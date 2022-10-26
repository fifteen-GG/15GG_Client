const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const { overlayWindow } = require('electron-overlay-window');

app.disableHardwareAcceleration();
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 480,
    resizable: false,
    useContentSize: true,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      devTools: isDev,
    },
    ...overlayWindow.WINDOW_OPTS,
  });

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`,
  );

  if (isDev) {
    // mainWindow.webContents.openDevTools({ mode: "detach" });
    mainWindow.webContents.openDevTools({ mode: 'detach', activate: false });
    overlayWindow.attachTo(mainWindow, 'League of Legends (TM) Client');
    overlayWindow.on('focus', ev => {
      console.log('focus', ev);
    });
  }

  // mainWindow.setResizable(true);
  mainWindow.on('closed', () => (mainWindow = null));
  mainWindow.focus();
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
