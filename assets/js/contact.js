// Mock contact form — never leaves the browser.
(function () {
  const form = document.getElementById('contact-form');
  const success = document.getElementById('contact-success');
  const errors = document.getElementById('contact-errors');
  if (!form || !success) return;

  function showError(msg) {
    errors.textContent = msg;
    errors.hidden = false;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    errors.hidden = true;
    errors.textContent = '';

    const data = new FormData(form);
    const name = (data.get('name') || '').toString().trim();
    const email = (data.get('email') || '').toString().trim();
    const message = (data.get('message') || '').toString().trim();

    if (!name) return showError('Bitte Namen eingeben.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showError('Bitte gültige E-Mail-Adresse eingeben.');
    if (message.length < 10) return showError('Bitte Nachricht mit mindestens 10 Zeichen eingeben.');

    form.hidden = true;
    success.hidden = false;
    success.setAttribute('tabindex', '-1');
    success.focus();
  });
})();
