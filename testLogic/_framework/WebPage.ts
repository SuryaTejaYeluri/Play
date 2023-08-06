import { chromium, Browser, Page, BrowserContext } from '@playwright/test';
let page: Page;

export class WebPage{

    static async createBrowser(){
        const browser = await chromium.launch();
        const context = await browser.newContext();
        page = await context.newPage();
        return page
    }

    static async destroyBrowser(browser: Browser): Promise<void> {
        await browser.close();
    }
    
    static async constructLocator(templateLocator: string
                            , target1?: string, replacement1?: string
                            , target2?: string, replacement2?: string
                            , target3?: string, replacement3?: string){
        
        if(target1 && replacement1 && target2 && replacement2 && target3 && replacement3)
            return templateLocator.replace(target1, replacement1).replace(target2, replacement2).replace(target3, replacement3)
        
        else if(target1 && replacement1 && target2 && replacement2)
            return templateLocator.replace(target1, replacement1).replace(target2, replacement2)
        
        else if(target1 && replacement1)
            return templateLocator.replace(target1, replacement1)
        
        else
            return templateLocator               
    }

    static async goTo(){
        await page.goto('https://demo.automationtesting.in/Register.html')
    }

    static async click(locator: string){
        await page.locator(locator).click()
    }

    static async type(locator: any, text: string){
        await page.locator(locator).clear()
        await page.locator(locator).type(text)
    }
    
    static async isDisplayed(locator: any){
        await page.locator(locator).isVisible()
    }
}