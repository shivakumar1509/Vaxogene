// /assets/osx_widget.js — Vaxogene widget (collision-proof: vxw-* classes)
(function () {
  const PANEL_W = 420, PANEL_H = 520, LOG_MAX = 300, TYPE_MS = 15;

  function getQA() {
    return (typeof window !== 'undefined' && (window.VX_QA || window.OSX_QA)) || [
      {id:'hello',  q:'What does Vaxogene AI do?', a:'We build bioinformatics platforms for neoantigen discovery, vaccine design, and translational immunology.'},
      {id:'contact',q:'How do I contact you?', a:'info@vaxogeneai.com (general) • investorrelations@vaxogeneai.com (IR) • bd@vaxogeneai.com (BD).'}
    ];
  }

  // NEW: unique CSS id so old CSS can’t “stick”
  const CSS_ID = 'vxw-widget-css';

  // Collision-proof CSS: all classes are vxw-*
  const CSS = `
    .vxw-panel{
      position:fixed; bottom:70px; right:16px;
      width:${PANEL_W}px; height:${PANEL_H}px;
      max-width:calc(100vw - 32px); max-height:calc(100vh - 120px);
      color:#0b1b3a;
      border:1px solid #e6ebf4;
      border-radius:16px;
      box-shadow:0 10px 28px rgba(0,0,0,.35);
      display:none;
      overflow:hidden;
      z-index:2147483000;
      background:#fff; /* hard white */
    }
    .vxw-panel.vxw-open{ display:block; }

    .vxw-head{
      display:flex; align-items:center; justify-content:space-between;
      padding:12px 14px;
      background:#1B427A; color:#fff;
    }
    .vxw-close{
      background:transparent; border:0; color:#fff;
      font-size:20px; cursor:pointer;
    }

    .vxw-hero{
      display:flex; align-items:center; gap:14px;
      padding:12px 14px;
      background:#f6f9ff;
      border-bottom:1px solid #e6ebf4;
    }
    .vxw-illus{
      width:72px; height:72px; border-radius:999px;
      flex:0 0 72px;
      background:#fff center/80% no-repeat;
      background-image:url("/assets/assistant-lady.svg");
      border:1px solid #e6ebf4;
      box-shadow:0 4px 10px rgba(0,0,0,.08);
    }
    .vxw-w1{ font-weight:800; font-size:1rem; color:#0b1b3a; }
    .vxw-w2{ font-size:.9rem; color:#395084; }

    .vxw-body{
      display:grid;
      grid-template-rows:1fr auto;
      height:calc(100% - 110px);
      padding:10px 12px 12px;
      gap:10px;
    }
    .vxw-log{
      max-height:${LOG_MAX}px;
      overflow:auto;
      display:grid;
      gap:8px;
      padding-right:4px;
    }
    .vxw-x{ display:grid; gap:4px; }
    .vxw-q{ font-weight:700; font-size:.85rem; }
    .vxw-a{
      background:#f8fbff;
      border:1px solid #e6ebf4;
      border-radius:8px;
      padding:8px;
      white-space:pre-wrap;
      font-size:.85rem;
    }

    .vxw-bottom{
      border-top:1px solid #e6ebf4;
      background:#fbfdff;
      display:grid;
      gap:6px;
      padding:8px 12px;
    }
    .vxw-pop{ font-size:.8rem; font-weight:800; color:#314579; }
    .vxw-buttons{ display:flex; flex-wrap:wrap; gap:6px; }
    .vxw-sugg{
      border:1px solid #d7e0f7;
      border-radius:999px;
      padding:6px 10px;
      background:#f6f9ff;
      cursor:pointer;
      font-size:.85rem;
    }

    .vxw-row{ display:flex; align-items:center; gap:6px; }
    .vxw-input{
      flex:1; min-width:0;
      padding:8px 10px;
      border:1px solid #d7e0f7;
      border-radius:8px;
      font-size:.9rem;
      background:#fff;
    }
    .vxw-send{
      border:0;
      border-radius:8px;
      padding:8px 10px;
      background:#1B427A;
      color:#fff;
      font-weight:800;
      cursor:pointer;
    }
  `;

  const esc = s => String(s).replace(/[&<>"]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
  const escAttr = s => esc(s).replace(/'/g,'&#39;');
  const ready = fn => (document.readyState === 'loading')
    ? document.addEventListener('DOMContentLoaded', fn, { once: true })
    : fn();

  function ensureCSS() {
    // Remove any old CSS from prior versions (optional but helpful)
    const old = document.getElementById('vx-widget-css');
    if (old) old.remove();

    if (!document.getElementById(CSS_ID)) {
      const s = document.createElement('style');
      s.id = CSS_ID;
      s.textContent = CSS;
      document.head.appendChild(s);
    }
  }

  function buildPanel() {
    ensureCSS();

    let panel = document.querySelector('.vxw-panel');
    if (panel) return panel;

    panel = document.createElement('div');
    panel.className = 'vxw-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'Vaxogene AI');

    panel.innerHTML = `
      <div class="vxw-head">
        <strong>Vaxogene AI</strong>
        <button class="vxw-close" aria-label="Close">×</button>
      </div>

      <div class="vxw-hero">
        <div class="vxw-illus" aria-hidden="true"></div>
        <div>
          <div class="vxw-w1">Hi! How can I help you?</div>
          <div class="vxw-w2">Ask about our platform, pipelines, or partnerships.</div>
        </div>
      </div>

      <div class="vxw-body">
        <div class="vxw-log"></div>

        <div class="vxw-bottom">
          <div class="vxw-pop">Popular questions</div>
          <div class="vxw-buttons"></div>
          <div class="vxw-row">
            <input class="vxw-input" placeholder="Type your question…" aria-label="Type your question">
            <button class="vxw-send" type="button">Send</button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(panel);

    const closeBtn = panel.querySelector('.vxw-close');
    const input = panel.querySelector('.vxw-input');
    const send = panel.querySelector('.vxw-send');
    const log = panel.querySelector('.vxw-log');
    const suggs = panel.querySelector('.vxw-buttons');

    const Q = getQA();
    suggs.innerHTML = Q.slice(0, 6)
      .map(x => `<button class="vxw-sugg" type="button" data-q="${escAttr(x.q)}">${esc(x.q)}</button>`)
      .join('');

    closeBtn.addEventListener('click', () => panel.classList.remove('vxw-open'));

    panel.addEventListener('click', (e) => {
      const b = e.target.closest('.vxw-sugg');
      if (!b) return;
      input.value = b.getAttribute('data-q') || '';
      answer(input.value);
      input.focus();
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        answer(input.value.trim());
      }
    });

    send.addEventListener('click', () => answer(input.value.trim()));

    function answer(q) {
      if (!q) return;

      const wrap = document.createElement('div');
      wrap.className = 'vxw-x';
      wrap.innerHTML = `<div class="vxw-q">${esc(q)}</div><div class="vxw-a" aria-live="polite"></div>`;
      log.appendChild(wrap);
      log.scrollTop = log.scrollHeight;

      const found = getQA().find(x => (x.q || '').toLowerCase() === q.toLowerCase()) || null;
      type(wrap.querySelector('.vxw-a'), found ? String(found.a) : 'Thanks! A specialist will follow up soon.');
      input.value = '';
      input.focus();
    }

    return panel;
  }

  function type(el, text) {
    el.textContent = '';
    let i = 0;
    const t = setInterval(() => {
      el.textContent += text.charAt(i++);
      if (i >= text.length) clearInterval(t);
      const sc = el.closest('.vxw-log');
      if (sc) sc.scrollTop = sc.scrollHeight;
    }, TYPE_MS);
  }

  window.VX_WIDGET = {
    open() {
      const p = buildPanel();
      p.classList.add('vxw-open');
      // focus input for better UX
      const input = p.querySelector('.vxw-input');
      if (input) input.focus();
    },
    close() {
      const p = document.querySelector('.vxw-panel');
      if (p) p.classList.remove('vxw-open');
    }
  };

  function bindFABs() {
    document.querySelectorAll('.vx-fab').forEach(btn => {
      if (!btn.dataset.vxBound) {
        btn.dataset.vxBound = '1';
        btn.addEventListener('click', () => window.VX_WIDGET.open(), { passive: true });
        btn.style.cursor = 'pointer';
        btn.style.position = 'relative';
        btn.style.zIndex = '2147483001';
      }
    });
  }

  ready(() => {
    bindFABs();
    const obs = new MutationObserver(() => bindFABs());
    obs.observe(document.documentElement, { childList: true, subtree: true });
  });
})();
