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

  var clock = document.getElementById('bcn-time');
  var fmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Madrid', hour: '2-digit', minute: '2-digit' });
  function tick() {
    var t = fmt.format(new Date());
    clock.innerHTML = '<span data-l="en">' + t + ' in Barcelona now</span><span data-l="es">Ahora son las ' + t + ' en Barcelona</span>';
    clock.hidden = false;
  }
  tick();
  setInterval(tick, 30000);
})();
