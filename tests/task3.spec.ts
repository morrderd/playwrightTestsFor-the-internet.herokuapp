import {test} from "@playwright/test";
import { DropdownListPage } from '../pages/DropdownListPage';

test.describe('Task 3: Dropdown Interaction', () => {
    let dropdownPage : DropdownListPage;

    test.beforeEach(async ({page})=> {
        dropdownPage = new DropdownListPage(page)
        await page.goto("/dropdown")
    })

    test("check number of dropdown options", async ({page})=>{
        await dropdownPage.checkNumberOfDropDownOptions(3)
    })

    test("check if Option 1 can be select", async ({page})=>{
        
        await dropdownPage.selectOption('Option 1');
        await dropdownPage.checkSelectedOption('Option 1')
    })

    test("check if Option 2 can be select", async ({page})=>{
        
        await dropdownPage.selectOption('Option 2');
        await dropdownPage.checkSelectedOption('Option 2')
    })

    test("check if options are correct display", async ({page})=>{
        const expectedOptions : string[] = ['Please select an option', 'Option 1', 'Option 2'];
        await dropdownPage.checkDropDownOptions(page,expectedOptions)
    })

    test.afterAll(async ({page}) =>{
        await page.close();
    })
})