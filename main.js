(function () {
  var root = document.documentElement;
  var button = document.getElementById('lang');

  function label() {
    button.setAttribute('aria-label', root.dataset.lang === 'en' ? 'Ver en español' : 'View in English');
  }

  button.addEventListener('click', function () {
    var next = root.dataset.lang === 'en' ? 'es' : 'en';
    root.dataset.lang = next;
    root.lang = next;
    try { localStorage.setItem('lang', next); } catch (e) { /* private mode: the switch still works for this visit */ }
    label();
  });

  label();
})();
