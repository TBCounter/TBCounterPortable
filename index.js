const { app, BrowserWindow } = require("electron");

const { chromium } = require('playwright');

const performScreenshot = async () => {
    const browser = await chromium.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://stackoverflow.com/');
    await page.screenshot({ path: `example.png` });
    // await browser.close();
  };

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();

  console.log("hahah");
  performScreenshot()

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
