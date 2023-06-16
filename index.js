const { app, BrowserWindow, ipcMain } = require('electron');
const url = require('url');
const path = require('path');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 960,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, `/index.html`),
            protocol: 'file:',
            slashes: true,
        }),
    );
    // Open the DevTools.
    // mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function() {
    if (mainWindow === null) createWindow();
});

//http
const http = require('http');

const port = 3000;

const fs = require('fs');

var EasyFtp = require('easy-ftp-extra');
var ftp = new EasyFtp();
var config = {
    host: 'ftp.alwanlab.com',
    port: '22',
    username: 'alwanlab',
    password: 'pYlscziHoS2S',
    type: 'sftp',
};

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const data = fs.readFileSync(path.join(__dirname, '/config.json'), 'utf8');
    if (req.url == '/config.json') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(data);
    } else if (req.url == '/upload') {
        ftp.connect(config);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        console.log(JSON.parse(data).filePath);
        ftp
            .upload(
                JSON.parse(data).filePath,
                '/home/alwanlab/public_html/' + uniqueSuffix + '.zip',
            )
            .then((r) => {
                res.statusCode = 200;
                res.write('Done'); //write a response to the client
                res.end();
            })
            .catch(console.error);
    } else {
        res.statusCode = 200;
        res.write('Hello World!'); //write a response to the client
        res.end();
    }
});

server.listen(port, () => {
    console.log(`Server running at http://${port}/`);
});

const { autoUpdater } = require('electron-updater');

ipcMain.on('app_version', (event) => {
    event.sender.send('app_version', { version: app.getVersion() });
});

autoUpdater.on('update-available', () => {
    mainWindow.webContents.send('update_available');
});

autoUpdater.on('update-downloaded', () => {
    mainWindow.webContents.send('update_downloaded');
});

ipcMain.on('restart_app', () => {
    autoUpdater.quitAndInstall();
});