/* ══════════════════════════════════════════════════════════════════
   tayyibatfood.com — Site Interactions
   Lookup tool · Header scroll · Mobile nav · Newsletter
   ══════════════════════════════════════════════════════════════════ */

// ── Arabic normalization ───────────────────────────────────────
// Strips tashkeel, normalizes alef variants, handles teh-marbuta
function normalizeAr(str) {
  if (!str) return '';
  return str
    .toLowerCase()
    .replace(/[\u064B-\u065F\u0670]/g, '')     // remove tashkeel marks
    .replace(/[إأآا]/g, 'ا')                    // unify alef forms
    .replace(/ى/g, 'ي')                         // alef maksura → ya
    .replace(/ة/g, 'ه')                         // teh marbuta → ha (common typing pattern)
    .replace(/ؤ/g, 'و')
    .replace(/ئ/g, 'ي')
    .replace(/\s+/g, ' ')
    .trim();
}

// ── Levenshtein-lite for typo tolerance ────────────────────────
function levDist(a, b) {
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const m = Array.from({length: b.length + 1}, (_, i) => [i]);
  for (let j = 1; j <= a.length; j++) m[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      m[i][j] = b[i-1] === a[j-1]
        ? m[i-1][j-1]
        : 1 + Math.min(m[i-1][j], m[i][j-1], m[i-1][j-1]);
    }
  }
  return m[b.length][a.length];
}

// ── Search ─────────────────────────────────────────────────────
function searchFoods(query, foods) {
  const q = normalizeAr(query);
  if (!q) return [];

  const results = [];

  for (const food of foods) {
    const searchTargets = [
      normalizeAr(food.name_ar),
      (food.name_en || '').toLowerCase(),
      ...(food.aliases || []).map(a => normalizeAr(a))
    ];

    let bestScore = Infinity;
    let exact = false;

    for (const target of searchTargets) {
      if (!target) continue;
      if (target === q) { exact = true; bestScore = 0; break; }
      if (target.includes(q)) { bestScore = Math.min(bestScore, 1); continue; }
      if (q.length >= 3 && target.length >= 3) {
        const dist = levDist(q, target);
        const rel = dist / Math.max(q.length, target.length);
        if (rel <= 0.34) bestScore = Math.min(bestScore, 2 + rel);
      }
    }

    if (bestScore < Infinity) {
      results.push({ food, score: bestScore, exact });
    }
  }

  // Sort: exact > substring > fuzzy; then allowed > conditional > restricted
  const statusOrder = { allowed: 0, conditional: 1, restricted: 2 };
  results.sort((a, b) => {
    if (a.score !== b.score) return a.score - b.score;
    return statusOrder[a.food.status] - statusOrder[b.food.status];
  });

  return results.slice(0, 8).map(r => r.food);
}

// ── Render verdict card ────────────────────────────────────────
function renderVerdict(food, lang) {
  const isAr = lang === 'ar';
  const name = isAr ? food.name_ar : food.name_en;
  const nameAlt = isAr ? food.name_en : food.name_ar;
  const note = isAr ? food.note_ar : food.note_en;
  const alt = isAr ? food.alt_ar : food.alt_en;
  const badgeChar = food.status === 'allowed' ? '✓' : food.status === 'restricted' ? '✕' : '·';
  const statusLabel = isAr
    ? { allowed: 'مسموح', restricted: 'ممنوع', conditional: 'مشروط' }[food.status]
    : { allowed: 'Allowed', restricted: 'Restricted', conditional: 'Conditional' }[food.status];
  const altLabel = isAr ? 'البديل' : 'Alternative';

  return `
    <article class="verdict-card" data-food-id="${food.id}">
      <div class="verdict-badge ${food.status}" aria-hidden="true">${badgeChar}</div>
      <div class="verdict-body">
        <h3 class="verdict-name">${name}<span class="verdict-name-en">${nameAlt}</span></h3>
        <span class="verdict-status ${food.status}">${statusLabel}</span>
        <p class="verdict-note">${note}</p>
        ${alt ? `<div class="verdict-alt"><span class="verdict-alt-label">${altLabel}:</span><span>${alt}</span></div>` : ''}
      </div>
    </article>
  `;
}

function renderEmpty(query, lang) {
  const isAr = lang === 'ar';
  return `
    <div class="lookup-result-empty">
      <strong>${isAr ? 'لم نجد هذا الطعام في قاعدتنا بعد' : 'We haven\'t catalogued this food yet'}</strong>
      ${isAr
        ? `جرب كلمة مختلفة أو تحقق من الإملاء.<br><a href="/contact/" style="color:var(--ottoman);font-weight:500">اقترح إضافته ←</a>`
        : `Try a different term or check spelling.<br><a href="/contact/" style="color:var(--ottoman);font-weight:500">→ Suggest adding it</a>`}
    </div>
  `;
}

// ── Init lookup tool ───────────────────────────────────────────
function initLookup() {
  const input = document.getElementById('lookup-input');
  const results = document.getElementById('lookup-results');
  const chips = document.querySelectorAll('[data-lookup-chip]');

  if (!input || !results) return;

  const lang = document.documentElement.lang || 'ar';
  let debounce;

  function performSearch(query) {
    if (!query || !query.trim()) {
      results.classList.remove('is-open');
      results.innerHTML = '';
      return;
    }

    const foods = window.FOODS || [];
    const matches = searchFoods(query, foods);

    if (matches.length === 0) {
      results.innerHTML = renderEmpty(query, lang);
    } else {
      results.innerHTML = matches.map(f => renderVerdict(f, lang)).join('');
    }
    results.classList.add('is-open');

    // Fire analytics event (Plausible-compatible)
    if (window.plausible) {
      window.plausible('lookup_search', {
        props: {
          had_result: matches.length > 0 ? 'yes' : 'no',
          result_count: matches.length
        }
      });
    }
  }

  input.addEventListener('input', (e) => {
    clearTimeout(debounce);
    debounce = setTimeout(() => performSearch(e.target.value), 200);
  });

  input.addEventListener('focus', (e) => {
    if (e.target.value.trim()) performSearch(e.target.value);
  });

  // ESC to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && results.classList.contains('is-open')) {
      results.classList.remove('is-open');
      input.blur();
    }
  });

  // Chip shortcuts
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const term = chip.getAttribute('data-lookup-chip');
      input.value = term;
      input.focus();
      performSearch(term);
    });
  });

  // URL query param — shareable links
  const params = new URLSearchParams(window.location.search);
  const initialQ = params.get('q');
  if (initialQ) {
    input.value = initialQ;
    performSearch(initialQ);
  }
}

// ── Sticky header scroll effect ────────────────────────────────
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      if (window.scrollY > 80) header.classList.add('is-scrolled');
      else header.classList.remove('is-scrolled');
      ticking = false;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  const toggle = document.querySelector('.mobile-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => header.classList.toggle('menu-open'));
  }
}

// ── Newsletter handler (demo mode — no backend yet) ────────────
function initNewsletter() {
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const btn = form.querySelector('button');
      if (!input || !input.value) return;

      // Fire analytics
      if (window.plausible) {
        window.plausible('newsletter_signup', { props: { source: 'homepage' } });
      }

      // Visual confirmation
      const original = btn.textContent;
      btn.textContent = document.documentElement.lang === 'ar' ? 'شكراً لك!' : 'Thank you!';
      btn.disabled = true;
      input.value = '';
      setTimeout(() => {
        btn.textContent = original;
        btn.disabled = false;
      }, 3000);
    });
  });
}

// ── Dictionary filter ──────────────────────────────────────────
function initDictFilter() {
  const filterBtns = document.querySelectorAll('[data-dict-filter]');
  const items = document.querySelectorAll('[data-dict-item]');
  if (!filterBtns.length || !items.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-dict-filter');
      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      items.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-status') === filter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// ── Render dictionary list from FOODS ──────────────────────────
function renderDictionary() {
  const container = document.getElementById('dict-list');
  if (!container || !window.FOODS) return;

  const lang = document.documentElement.lang || 'ar';
  const isAr = lang === 'ar';

  const sorted = [...window.FOODS].sort((a, b) => {
    const nameA = isAr ? a.name_ar : a.name_en;
    const nameB = isAr ? b.name_ar : b.name_en;
    return nameA.localeCompare(nameB, isAr ? 'ar' : 'en');
  });

  container.innerHTML = sorted.map(food => {
    const name = isAr ? food.name_ar : food.name_en;
    const note = isAr ? food.note_ar : food.note_en;
    const badgeChar = food.status === 'allowed' ? '✓' : food.status === 'restricted' ? '✕' : '·';

    return `
      <a href="/ar/القاموس/${encodeURIComponent(food.id)}" class="dict-item" data-dict-item data-status="${food.status}" onclick="event.preventDefault();document.getElementById('lookup-input')?.focus();document.getElementById('lookup-input')&&(document.getElementById('lookup-input').value='${name.replace(/'/g,"\\'")}');document.getElementById('lookup-input')?.dispatchEvent(new Event('input'));window.scrollTo({top:0,behavior:'smooth'});">
        <div class="dict-item-badge ${food.status}" aria-hidden="true">${badgeChar}</div>
        <div class="dict-item-body">
          <h4 class="dict-item-name">${name}</h4>
          <p class="dict-item-note">${note}</p>
        </div>
      </a>
    `;
  }).join('');
}

// ── Init on DOM ready ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initLookup();
  initNewsletter();
  initDictFilter();
  renderDictionary();
});
