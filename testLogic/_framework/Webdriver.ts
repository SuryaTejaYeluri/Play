import { chromium, Browser, Page, BrowserContext } from '@playwright/test';

export async function createBrowser() {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    return { browser, context, page }
  }

  export async function destroyBrowser(browser: Browser): Promise<void> {
    await browser.close();
  }