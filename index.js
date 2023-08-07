const { app, BrowserWindow, ipcMain } = require("electron");
const url = require("url");
const path = require("path");

let mainWindow;
const { autoUpdater } = require("electron-updater");

Object.defineProperty(app, 'isPackaged', {
    get() {
      return true;
    }
  });

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 960,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    autoHideMenuBar: true,
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/index.html`),
      protocol: "file:",
      slashes: true,
    })
  );
  // Open the DevTools.

  // mainWindow.webContents.openDevTools();
  
  mainWindow.on("closed", function () {
    mainWindow = null;
  });

  mainWindow.once("ready-to-show", () => {
    autoUpdater.checkForUpdatesAndNotify();
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
  if (mainWindow === null) createWindow();
});

let configData = {
  name: "test name2",
  filePath: "/home/mohamedfarraj/Desktop/data/",
  emailAddress: "sample@3ddx.com",
  password: "Sam1@234",
};

let getArguments = () => {
  const array = process.argv;

  for (const item of array) {
    if (item.includes("=")) {
      const arr = item.split("=");
      configData[arr[0]] = arr[1];
    }
  }
  return array;
};

console.log("arrges", getArguments());

const fs = require("fs");

ipcMain.on("app_version", (event) => {
  event.sender.send("app_version", { version: app.getVersion() });
});

// Back Btn
ipcMain.on("back", (event) => {
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/index.html`),
      protocol: "file:",
      slashes: true,
    })
  );
});

//Done
ipcMain.on("done", (event) => {
  mainWindow.close();
});

ipcMain.on("upload", (event, args) => {
  const file = fs.readFileSync("./newconnect-ui/assets/Images/connectLog-transparent.png");
  const base64Data = file.toString("base64");
  event.sender.send("uploadFile", {
    fileName: "test.jpg",
    fileContent: base64Data,
  });
});

ipcMain.on("get_data", (event) => {
  event.sender.send("get_data", configData);
});

// update
autoUpdater.on("update-available", () => {
  mainWindow.webContents.send("update_available");
});
autoUpdater.on("update-downloaded", () => {
  mainWindow.webContents.send("update_downloaded");
});

ipcMain.on("restart_app", () => {
  autoUpdater.quitAndInstall();
});
