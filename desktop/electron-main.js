// Coquille Electron — Malachie 4 Projections
// Sert l'app en HTTP local (127.0.0.1) : brochures, décompression gzip et service worker
// fonctionnent à 100 % hors-ligne, exactement comme sur le web.
const { app, BrowserWindow } = require('electron');
const http = require('http');
const path = require('path');
const fs = require('fs');

const RACINE_APP = path.join(__dirname, '..', 'app');
const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.gz': 'application/gzip',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.ttf': 'font/ttf', '.woff2': 'font/woff2',
  '.json~': 'application/json', '.webmanifest': 'application/manifest+json', '.manifest': 'application/json'
};

function creerServeur() {
  return new Promise((res) => {
    const srv = http.createServer((req, re) => {
      try {
        let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
        if (p.endsWith('/')) p += 'index.html';
        const fichier = path.normalize(path.join(RACINE_APP, p));
        if (!fichier.startsWith(RACINE_APP)) { re.writeHead(403); return re.end(); }
        let don = fs.readFileSync(fichier);
        const ext = path.extname(fichier).toLowerCase();
        re.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
        re.end(don);
      } catch (e) { re.writeHead(404); re.end('introuvable'); }
    });
    srv.listen(47847, '127.0.0.1', () => res(srv));
  });
}
let serveur = null;

async function creerFenetre() {
  serveur = await creerServeur();
  const win = new BrowserWindow({
    width: 1400, height: 840, minWidth: 1024, minHeight: 640,
    backgroundColor: '#1c3a2a', title: 'Malachie 4 Projections',
    icon: path.join(RACINE_APP, 'assets', 'logo-192.png'),
    autoHideMenuBar: true, webPreferences: { contextIsolation: true }
  });
  win.loadURL('http://127.0.0.1:47847/index.html');
}
app.whenReady().then(() => {
  creerFenetre();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) creerFenetre(); });
});
app.on('window-all-closed', () => { if (serveur) serveur.close(); if (process.platform !== 'darwin') app.quit(); });
