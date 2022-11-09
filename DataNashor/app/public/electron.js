const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');
const { overlayWindow } = require('electron-overlay-window');

const iconUrl = url.format({
  pathname: path.join(__dirname, 'assets/png/nashor_logo_64.png'),
  protocol: 'file,',
  slashes: true,
});

app.disableHardwareAcceleration();
let mainWindow;
let window2;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 480,
    useContentSize: true,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      devTools: isDev,
    },
    icon: iconUrl,
  });

  // window2 = new BrowserWindow({
  //   width: 800,
  //   height: 480,
  //   resizable: false,
  //   useContentSize: true,
  //   webPreferences: {
  //     nodeIntegration: true,
  //     enableRemoteModule: true,
  //     devTools: isDev,
  //   },
  //   parent: mainWindow,
  //   ...overlayWindow.WINDOW_OPTS,
  // });

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000/app'
      : `file://${path.join(__dirname, '../build/index.html')}`,
  );

  // window2.loadURL(
  //   isDev
  //     ? 'http://localhost:3000/overlay'
  //     : `file://${path.join(__dirname, '../build/index.html')}`,
  // );

  if (isDev) {
    mainWindow.webContents.openDevTools({ mode: 'detach' });

    // window2.webContents.openDevTools({ mode: 'detach', activate: false });
    // overlayWindow.attachTo(window2, '제목 없음 - Windows 메모장');
    // overlayWindow.on('focus', ev => {
    //   console.log('focus', ev);
    // });
  }

  mainWindow.setResizable(true);
  mainWindow.on('closed', () => (mainWindow = null));
  mainWindow.focus();
  // window2.on('closed', () => (window2 = null));
  // window2.focus();
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
  // if (window2 === null) {
  //   createWindow();
  // }
});
