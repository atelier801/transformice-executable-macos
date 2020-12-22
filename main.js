// Based on https://github.com/electron/electron-quick-start/

// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')

// Specify flash path (has to be placed in the same directory as this file)
app.commandLine.appendSwitch('ppapi-flash-path', path.join(__dirname, 'PepperFlashPlayer.plugin'))

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    useContentSize: true,  // make width & height relative to the content, not the whole window
    backgroundColor: "#6A7495",
    webPreferences: {
      plugins: true
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})