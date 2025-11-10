// ====== HERO SLIDESHOW (fade) ======
document.addEventListener('DOMContentLoaded', () => {
  const slides = Array.from(document.querySelectorAll('.slide'));
  let current = 0;
  const interval = 5000; // ms
  let timer = null;
  const start = () => {
    slides.forEach(s => s.classList.remove('active'));
    slides[current].classList.add('active');
  };
  start();
  const nextSlide = () => {
    current = (current + 1) % slides.length;
    start();
  };
  timer = setInterval(nextSlide, interval);

  // pause on hover
  const hero = document.querySelector('.hero');
  hero.addEventListener('mouseenter', () => clearInterval(timer));
  hero.addEventListener('mouseleave', () => timer = setInterval(nextSlide, interval));

  // MOBILE NAV TOGGLE
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  navToggle && navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    if (mobileMenu) {
      if (mobileMenu.hasAttribute('hidden')) mobileMenu.removeAttribute('hidden');
      else mobileMenu.setAttribute('hidden', '');
    }
  });

  // contact form demo (no backend)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(contactForm);
      const obj = Object.fromEntries(data.entries());
      // demo UX: show message and reset
      alert('Terima kasih — pesan Anda telah dikirim (demo). Kami akan menghubungi Anda.');
      contactForm.reset();
    });
  }

  // set year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
