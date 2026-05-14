// Mock cookie banner — no real tracking. Preference lives in localStorage only.
(function () {
  const KEY = 'gd-cookie-consent';
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;

  function getConsent() {
    try { return JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (_) { return null; }
  }
  function setConsent(value) {
    localStorage.setItem(KEY, JSON.stringify({ ...value, at: new Date().toISOString() }));
  }

  if (!getConsent()) {
    banner.hidden = false;
  }

  banner.addEventListener('click', (e) => {
    const action = e.target.dataset && e.target.dataset.consent;
    if (!action) return;
    if (action === 'accept') setConsent({ essential: true, analytics: true });
    if (action === 'reject') setConsent({ essential: true, analytics: false });
    banner.hidden = true;
  });

  // Allow other pages (e.g. privacy.html) to re-open the banner
  window.openCookieBanner = () => { banner.hidden = false; };
})();
