import test from "@playwright/test"
import { DynamicLoadedPage } from '../pages/dynamicLoadedPage';

test.describe('Dynamically Loaded Page Elements - Example 1', () => {
    let dynamicLoadedPage:DynamicLoadedPage;

    test.beforeEach(async ({page})=> {
        dynamicLoadedPage = new DynamicLoadedPage(page)
        await page.goto("/dynamic_loading/1")
    })

    test("test1", async ({})=>{
        await dynamicLoadedPage.checkIfHiddenElementIsHidden()
        await dynamicLoadedPage.clickStartButton()
        await dynamicLoadedPage.checkIfLoaderIsVisible()
        await dynamicLoadedPage.checkIfHiddenElementIsVisible()
        await dynamicLoadedPage.checkIfElemHasName('Hello World!')
    })
    test.afterAll(async ({page}) =>{
        await page.close();
    })
})

test.describe('Dynamically Loaded Page Elements - Example 2', () => {
    let dynamicLoadedPage:DynamicLoadedPage;
    
    test.beforeEach(async ({page})=> {
        dynamicLoadedPage = new DynamicLoadedPage(page)
        await page.goto("/dynamic_loading/2")
    })
    
    test("test1", async ({})=>{
        await dynamicLoadedPage.checkIfElemIsDetached()
        await dynamicLoadedPage.checkIfHiddenElementIsHidden()
        await dynamicLoadedPage.clickStartButton()
        await dynamicLoadedPage.checkIfLoaderIsVisible()
        await dynamicLoadedPage.checkIfHiddenElementIsVisible()
        await dynamicLoadedPage.checkIfElemIsAttached()
        await dynamicLoadedPage.checkIfElemHasName('Hello World!')
    })
    test.afterAll(async ({page}) =>{
        await page.close();
    })
})