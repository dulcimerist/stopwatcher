const { app, BrowserWindow } = require("electron");

const is_mac = process.platform === "darwin";

if (is_mac) {
  app.dock.hide();
}

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 150,
    height: 100,
    backgroundColor: '#000000',
    hasShadow: false,
    webPreferences: {
      devTools: false,
    },
  });
  mainWindow.setOpacity(0.5);
  mainWindow.setAlwaysOnTop(true, "screen-saver");
  mainWindow.setVisibleOnAllWorkspaces(true);
  mainWindow.loadFile("index.html");
}
app.whenReady().then(() => {
  createWindow();
});
