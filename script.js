// script.js

document.addEventListener('DOMContentLoaded', () => {
  // 1. Scroll-reveal com Intersection Observer
const revealObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, {
  threshold: 0,           // dispara mesmo com 1px visível
  rootMargin: '0px 0px -10% 0px'  // “puxa” o disparo 10% antes de sair da viewport
});

  document.querySelectorAll('.fade-in').forEach(el => revealObserver.observe(el));

  // 2. Smooth scroll para a seção de Oferta ao clicar nos CTAs
  const ofertaSection = document.querySelector('#oferta');
  document.querySelectorAll('.cta-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      if (ofertaSection) {
        ofertaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // opcional: atualiza a âncora na URL sem recarregar
        history.pushState(null, '', '#oferta');
      }
    });
  });
});
