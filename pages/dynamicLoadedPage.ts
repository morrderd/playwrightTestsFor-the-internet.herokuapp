import { Page, expect } from "@playwright/test";
import DynamicLoadedPageSelectors from "../selectors/dynamicloaded.page.selectors";

export class DynamicLoadedPage {
    private dynamicLoadedPageSelectors: DynamicLoadedPageSelectors;

    constructor(private page: Page) {
        this.dynamicLoadedPageSelectors = new DynamicLoadedPageSelectors(page);
    }

    async clickStartButton(){
        await this.dynamicLoadedPageSelectors.startButton.click()
        await this.page.waitForLoadState('networkidle');
    }

    async checkIfLoaderIsVisible(){
        await expect(this.dynamicLoadedPageSelectors.loadingElem).toBeVisible();
    }

    async checkIfHiddenElementIsHidden() {
        await expect(this.dynamicLoadedPageSelectors.finishElem).toBeHidden();
    }

    async checkIfHiddenElementIsVisible() {
        await expect(this.dynamicLoadedPageSelectors.finishElem).toBeVisible();
    }

    async checkIfElemHasName(text: string){
        await expect(this.dynamicLoadedPageSelectors.finishElem).toHaveText(text)
    }
    async checkIfElemIsAttached(){
        
        try 
        {
            await this.page.waitForSelector('//*[@id="finish"]', { state: 'attached' });    
            await expect(true).toBeTruthy(); 
        } 
        catch (error) 
        {
            console.error('Element with ID "finish" is not attached to the DOM');
            await expect(false).toBeTruthy();
        }
    }

    async checkIfElemIsDetached(){
        
        try 
        {
            await this.page.waitForSelector('//*[@id="finish"]', { state: 'detached' });    
            await expect(true).toBeTruthy(); 
        } 
        catch (error) 
        {
            console.error('Element with ID "finish" is not attached to the DOM');
            await expect(false).toBeTruthy(); 
        }
    }
}
