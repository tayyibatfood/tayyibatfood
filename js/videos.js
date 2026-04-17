/* ────────────────────────────────────────────────────────────
   videos.js — renders /data/videos.json into the video gallery
   Lightbox embed on click. Keyboard-accessible.
   ──────────────────────────────────────────────────────────── */
(function () {
  'use strict';
  const mount = document.getElementById('videos-mount');
  if (!mount) return;

  const lang = document.documentElement.lang || 'ar';
  const locale = lang.startsWith('ar') ? 'ar' : 'en';

  const fmtDuration = (s) => {
    const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
    if (h) return `${h}:${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
    return `${m}:${String(sec).padStart(2,'0')}`;
  };

  const openEmbed = (video) => {
    const overlay = document.createElement('div');
    overlay.className = 'video-lightbox';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.innerHTML = `
      <button class="video-lightbox-close" aria-label="${locale === 'ar' ? 'إغلاق' : 'Close'}">&times;</button>
      <div class="video-lightbox-stage">
        <div class="video-lightbox-frame">
          <iframe src="https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0"
                  title="${locale === 'ar' ? video.title_ar : video.title_en}"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
        </div>
        ${video.chapters?.length ? `
          <aside class="video-lightbox-chapters">
            <h4>${locale === 'ar' ? 'الفصول' : 'Chapters'}</h4>
            <ol>
              ${video.chapters.map(c => `
                <li>
                  <span class="chapter-time">${c.time}</span>
                  <span class="chapter-title">${locale === 'ar' ? c.title_ar : c.title_en}</span>
                </li>
              `).join('')}
            </ol>
          </aside>
        ` : ''}
      </div>
    `;
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
    const close = () => { overlay.remove(); document.body.style.overflow = ''; };
    overlay.querySelector('.video-lightbox-close').addEventListener('click', close);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
    document.addEventListener('keydown', function esc(e) { if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc); } });
  };

  fetch('/data/videos.json', { cache: 'no-cache' })
    .then(r => r.json())
    .then(data => {
      const topics = data.meta.topics;
      const videos = data.videos || [];
      if (!videos.length) {
        mount.innerHTML = `<p class="videos-empty">${locale === 'ar' ? 'لا توجد فيديوهات بعد.' : 'No videos yet.'}</p>`;
        return;
      }
      // Group by topic, featured first
      const byTopic = {};
      videos.forEach(v => { (byTopic[v.topic] = byTopic[v.topic] || []).push(v); });

      mount.innerHTML = Object.keys(byTopic).map(topic => {
        const t = topics[topic] || { ar: topic, en: topic };
        return `
          <section class="video-topic">
            <h2 class="video-topic-title">${locale === 'ar' ? t.ar : t.en}</h2>
            <div class="video-grid">
              ${byTopic[topic].map(v => `
                <article class="video-card" data-video-id="${v.id}" tabindex="0" role="button" aria-label="${locale === 'ar' ? 'شاهد: ' + v.title_ar : 'Watch: ' + v.title_en}">
                  <div class="video-thumb">
                    <img src="https://i.ytimg.com/vi/${v.id}/hqdefault.jpg" alt="" loading="lazy">
                    <div class="video-play">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                    ${v.duration_seconds ? `<span class="video-duration">${fmtDuration(v.duration_seconds)}</span>` : ''}
                  </div>
                  <div class="video-meta">
                    <h3 class="video-title">${locale === 'ar' ? v.title_ar : v.title_en}</h3>
                    <p class="video-desc">${locale === 'ar' ? v.description_ar : v.description_en}</p>
                  </div>
                </article>
              `).join('')}
            </div>
          </section>
        `;
      }).join('');

      // Wire up cards
      mount.querySelectorAll('.video-card').forEach(card => {
        const v = videos.find(x => x.id === card.dataset.videoId);
        if (!v) return;
        const trigger = () => openEmbed(v);
        card.addEventListener('click', trigger);
        card.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); trigger(); } });
      });
    })
    .catch(err => {
      mount.innerHTML = `<p class="videos-empty">${locale === 'ar' ? 'تعذر تحميل الفيديوهات.' : 'Could not load videos.'}</p>`;
      console.error('videos.js:', err);
    });
})();
