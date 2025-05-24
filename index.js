
function launchApp(app) {
  const apps = ['zebgx', 'store', 'settings'];
  apps.forEach(id => {
    const el = document.getElementById('app-' + id);
    if (el) {
      el.classList.remove('active');
      el.innerHTML = '';
    }
  });

  const container = document.getElementById('app-' + app);
  if (container) {
    container.classList.add('active');
    fetch('apps/' + app + '.html')
      .then(res => res.text())
      .then(html => {
        container.innerHTML = html;
      });
  }
}

function toggleStartMenu() {
  const menu = document.getElementById('start-menu');
  menu.classList.toggle('hidden');
}

function powerOption(action) {
  alert("Zeb11 will now " + action + ".");
}
