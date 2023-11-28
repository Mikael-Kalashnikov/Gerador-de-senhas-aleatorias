const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('ready', () => {

    mainWindow = new BrowserWindow({
        width: 700,
        height: 500,
        resizable: true
    });

    mainWindow.loadURL(`File://${__dirname}/index.html`)

});