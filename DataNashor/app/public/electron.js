const { app, BrowserWindow, ipcMain, webContents } = require('electron');
const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');
const { overlayWindow } = require('electron-overlay-window');

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
      contextIsolation: false, // to allow require in renderer
    },
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
  //     contextIsolation: false, // to allow require in renderer
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

// ------------------- set up event listeners here --------------------

// temporary variable to store data while background
// process is ready to start processing
let cache = {
  data: undefined,
};

// a window object outside the function scope prevents
// the object from being garbage collected
let hiddenWindow;
let currentPid;

// This event listener will listen for request
// from visible renderer process
ipcMain.on('START_BACKGROUND_VIA_MAIN', (event, args) => {
  console.log('listening');
  const backgroundFileUrl = url.format({
    pathname: path.join(__dirname, `../background_tasks/background.html`),
    protocol: 'file:',
    slashes: true,
  });
  hiddenWindow = new BrowserWindow({
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  hiddenWindow.loadURL(backgroundFileUrl);

  hiddenWindow.webContents.openDevTools();

  hiddenWindow.on('closed', () => {
    hiddenWindow = null;
  });

  cache.data = args.number;
  console.log(cache.data);
});

// This event listener will listen for data being sent back
// from the background renderer process
ipcMain.on('MSG_FROM_BACKGROUND', (event, args) => {
  console.log('electron.js MSG_FROM_BACKGROUND', args);
  mainWindow.webContents.send('MESSAGE_FROM_BACKGROUND_VIA_MAIN', args.message);
});

ipcMain.on('PID_FROM_BACKGROUND', (event, args) => {
  currentPid = args.message;
  log.info('Started background process with PID', currentPid);
  mainWindow.webContents.send('PID_FROM_BACKGROUND_VIA_MAIN', args.message);
});

ipcMain.on('BACKGROUND_READY', (event, args) => {
  console.log('electron.js BACKGROUND_READY', args);
  event.reply('START_PROCESSING', {
    data: cache.data,
    currentPid: currentPid,
  });
});
