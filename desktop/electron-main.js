// Coquille Electron — Malachie 4 Projections
const { app, BrowserWindow } = require('electron');
const path = require('path');

function creerFenetre() {
  const win = new BrowserWindow({
    width: 1366, height: 820, minWidth: 1024, minHeight: 640,
    backgroundColor: '#1c3a2a',
    title: 'Malachie 4 Projections',
    autoHideMenuBar: true,
    webPreferences: { contextIsolation: true }
  });
  win.loadFile(path.join(__dirname, '..', 'app', 'index.html'));
}
app.whenReady().then(() => {
  creerFenetre();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) creerFenetre(); });
});
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
