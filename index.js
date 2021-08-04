const electron = require("electron");

const {app, BrowserWindow} = electron;

const createWindow = () => {
    const mainWindow = new BrowserWindow({width: 800, height: 600, icon: __dirname + "./icon/images.png"});
    mainWindow.setMenu(null);
    mainWindow.loadFile("index.html");
}

app.whenReady().then(() => createWindow());