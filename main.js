/* Brightside Studio website interactions */
(() => {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
    }));
  }

  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      const isOpen = item.classList.toggle('open');
      button.setAttribute('aria-expanded', String(isOpen));
      const symbol = button.querySelector('b');
      if (symbol) symbol.textContent = isOpen ? '−' : '＋';
    });
  });

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const topLink = document.getElementById('backToTop');
  if (topLink) {
    window.addEventListener('scroll', () => {
      topLink.classList.toggle('show', window.scrollY > 450);
    }, { passive: true });
  }

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const status = document.getElementById('formStatus');
      const values = new FormData(form);
      const name = String(values.get('name') || '').trim();
      const email = String(values.get('email') || '').trim();
      const message = String(values.get('message') || '').trim();
      if (!name || !email || !message) {
        status.textContent = 'Please complete all required fields.';
        return;
      }
      status.textContent = `Thanks, ${name}. The demo form validated successfully. Connect a form service to receive enquiries.`;
      form.reset();
    });
  }
})();
