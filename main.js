const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const url = require('url')
let mainWindow

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        title: "Rock, Paper, Scissors!",
        width: 500,
        height: 500,
        center: true,
        resizable: false,
        icon: path.join(__dirname, './images/rps_ico.ico')
    })

    // and load the index.html of the app.
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    //remove menu bar for a minimal look
    mainWindow.setMenu(null);

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()


    mainWindow.on('closed', function () {
        mainWindow = null
    })
}


app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
})
