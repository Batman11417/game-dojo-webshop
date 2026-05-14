// Mock checkout — purely client-side. No data leaves the browser.
(function () {
  const form = document.getElementById('checkout-form');
  const success = document.getElementById('checkout-success');
  const errors = document.getElementById('checkout-errors');
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
    const card = (data.get('card') || '').toString().replace(/\s+/g, '');

    if (!name) return showError('Bitte Namen eingeben.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showError('Bitte gültige E-Mail-Adresse eingeben.');
    if (!/^\d{13,19}$/.test(card)) return showError('Bitte 13–19 Ziffern für die Kartennummer eingeben.');
    if (!data.get('terms')) return showError('Bitte Lizenzbedingungen und Datenschutzerklärung bestätigen.');
    if (!data.get('consent')) return showError('Bitte ausdrückliche Zustimmung zum vorzeitigen Vertragsbeginn erteilen.');
    if (!data.get('acknowledge')) return showError('Bitte Kenntnisnahme des Verlusts des Rücktrittsrechts bestätigen.');

    form.hidden = true;
    success.hidden = false;
    success.querySelector('[data-bind=name]').textContent = name;
    success.querySelector('[data-bind=email]').textContent = email;
    // Focus to confirmation for screen readers
    success.setAttribute('tabindex', '-1');
    success.focus();
  });
})();
