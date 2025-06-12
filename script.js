// Scroll reveal com Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.fade-in');
  const obs = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => obs.observe(el));

  // CTA tracking
  document.querySelectorAll('.cta-btn').forEach(btn => {
    btn.addEventListener('click', () => console.log('CTA clicado:', btn.textContent));
  });
});
