let fileSystem = JSON.parse(localStorage.getItem('zeb11_fs')) || {
  root: []
};

function saveFileSystem() {
  localStorage.setItem('zeb11_fs', JSON.stringify(fileSystem));
}

function renderFileSystem() {
  const container = document.getElementById('fileContent');
  container.innerHTML = '';

  fileSystem.root.forEach(item => {
    const div = document.createElement('div');
    div.className = 'item';
    div.textContent = `${item.type.toUpperCase()}: ${item.name}`;
    container.appendChild(div);
  });
}

function createItem(type) {
  const name = document.getElementById('newFileName').value.trim();
  if (!name) return alert("Enter a name.");
  fileSystem.root.push({ type, name });
  saveFileSystem();
  renderFileSystem();
  document.getElementById('newFileName').value = '';
}

renderFileSystem();
