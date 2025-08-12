// script.js — versão corrigida
document.addEventListener('DOMContentLoaded', () => {
  /* ========= 1) Fade-in com IntersectionObserver ========= */
  const fadeEls = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0,                 // dispara com 1px visível
      rootMargin: '0px 0px -10% 0px'
    });

    fadeEls.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback p/ navegadores antigos
    fadeEls.forEach(el => el.classList.add('visible'));
  }

  /* ========= 2) Smooth scroll SOMENTE para botões marcados =========
     Ex.: <a href="#oferta" class="cta-btn" data-scroll="oferta">...</a>
  */
  const scrollBtns = document.querySelectorAll('.cta-btn[data-scroll]');
  scrollBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = btn.getAttribute('data-scroll');   // "oferta"
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', `#${id}`);
      }
    }, { passive: false });
  });

  /* ========= 3) CTAs dos planos (links externos) =========
     Use class="cta-btn plan-cta" e NENHUM preventDefault aqui.
     Ex.: <a class="cta-btn plan-cta" href="https://payfast.greenn.com.br/131014" ...>Assinar</a>
  */
  document.querySelectorAll('.plan-cta').forEach(btn => {
    btn.addEventListener('click', () => {
      // opcional: métricas
      console.log('[CTA plano] clicado:', btn.href);
    });
  });
});
