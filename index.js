
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
function openApp(title, url) {
  toggleStartMenu();
  const win = document.createElement("div");
  win.className = "window";
  win.style.zIndex = ++zIndex;

  if (!url && title === "Terminal") {
    fetch('apps/terminal.html')
      .then(res => res.text())
      .then(html => {
        win.innerHTML = `
          <div class="title-bar" onmousedown="dragMouseDown(event, this.parentElement)">
            <span class="title">${title}</span>
            <div class="window-controls">
              <button onclick="minimizeWindow(this)">_</button>
              <button onclick="maximizeWindow(this)">🗖</button>
              <button onclick="closeWindow(this)">✕</button>
            </div>
          </div>
          <div style="flex:1; overflow:auto;">${html}</div>
        `;
        document.getElementById("desktop").appendChild(win);
      });
    return;
  }

  // Default iframe loader
  win.innerHTML = `
    <div class="title-bar" onmousedown="dragMouseDown(event, this.parentElement)">
      <span class="title">${title}</span>
      <div class="window-controls">
        <button onclick="minimizeWindow(this)">_</button>
        <button onclick="maximizeWindow(this)">🗖</button>
        <button onclick="closeWindow(this)">✕</button>
      </div>
    </div>
    <iframe src="${url}" title="${title}"></iframe>
  `;
  document.getElementById("desktop").appendChild(win);
}
