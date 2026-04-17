/* ────────────────────────────────────────────────────────────
   updates.js — renders /data/updates.json into the changelog UI
   Locale: auto-detects from <html lang>. RTL-safe.
   ──────────────────────────────────────────────────────────── */
(function () {
  'use strict';
  const mount = document.getElementById('updates-mount');
  if (!mount) return;

  const lang = document.documentElement.lang || 'ar';
  const locale = lang.startsWith('ar') ? 'ar' : 'en';

  const arMonths = ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
  const fmtDate = (iso) => {
    const d = new Date(iso);
    if (locale === 'ar') return `${d.getDate()} ${arMonths[d.getMonth()]} ${d.getFullYear()}`;
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  fetch('/data/updates.json', { cache: 'no-cache' })
    .then(r => r.json())
    .then(data => {
      const cats = data.meta.categories;
      const entries = data.entries || [];
      if (!entries.length) {
        mount.innerHTML = `<p class="updates-empty">${locale === 'ar' ? 'لا توجد تحديثات بعد.' : 'No updates yet.'}</p>`;
        return;
      }
      // Group by date
      const byDate = {};
      entries.forEach(e => { (byDate[e.date] = byDate[e.date] || []).push(e); });
      const dates = Object.keys(byDate).sort().reverse();

      mount.innerHTML = dates.map(d => `
        <section class="update-day">
          <h2 class="update-day-date">${fmtDate(d)}</h2>
          <ol class="update-list">
            ${byDate[d].map(e => {
              const cat = cats[e.category] || {};
              const catName = locale === 'ar' ? cat.ar : cat.en;
              return `
                <li class="update-card" style="--cat-color:${cat.color || '#6B5F52'};">
                  <div class="update-meta">
                    <span class="update-cat">${catName || e.category}</span>
                  </div>
                  <h3 class="update-title">${locale === 'ar' ? e.title_ar : e.title_en}</h3>
                  <p class="update-summary">${locale === 'ar' ? e.summary_ar : e.summary_en}</p>
                </li>
              `;
            }).join('')}
          </ol>
        </section>
      `).join('');
    })
    .catch(err => {
      mount.innerHTML = `<p class="updates-empty">${locale === 'ar' ? 'تعذر تحميل التحديثات.' : 'Could not load updates.'}</p>`;
      console.error('updates.js:', err);
    });
})();
