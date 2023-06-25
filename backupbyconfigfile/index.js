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
    mainWindow.webContents.openDevTools();
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

let configData = {
    name: 'test name2',
    filePath: '/home/mohamedfarraj/Desktop/data/',
    emailAddress: 'sample@3ddx.com',
    password: 'Sam1@234',
};

let getArguments = () => {
    const array = process.argv;

    for (const item of array) {
        if (item.includes('=')) {
            const arr = item.split('=');
            configData[arr[0]] = arr[1];
        }
    }
    return array;
};

console.log('arrges', getArguments());

//http
const http = require('http');

const port = 3000;

const fs = require('fs');

var request = require('request');

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const data = fs.readFileSync(path.join(__dirname, '/config.json'), 'utf8');
    if (req.url == '/config.json') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        console.log(JSON.stringify(configData))
        res.end(JSON.stringify(configData));
    } else if (req.url == '/upload') {
        const formData = {
            myfile: fs.createReadStream(JSON.parse(data).filePath),
        };
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        // res.end(formData);
        // request.post({ url: 'http://localhost:2000/uploadjavatpoint', formData: formData },
        //     function(error, response, body) {
        //         if (!error && response.statusCode == 200) {
        //             res.statusCode = 200;
        res.write(formData); //write a response to the client
        res.end();
        //         } else {
        //             res.statusCode = 200;
        //             res.write(error); //write a response to the client
        //             res.end();
        //         }
        //     },
        // );
    } else if (req.url == '/saveConfig') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        let body = [];
        req
            .on('data', (chunk) => {
                body.push(chunk);
            })
            .on('end', () => {
                body = Buffer.concat(body).toString();
                const data = fs.writeFileSync(
                    path.join(__dirname, '/config.json'),
                    body,
                    'utf8',
                );

                res.end(body);
            });
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