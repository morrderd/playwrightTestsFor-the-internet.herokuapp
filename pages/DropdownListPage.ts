import { Page, expect } from "@playwright/test";
import DropdownPageSelectors from "../selectors/dropdown.page.selectors";


export class DropdownListPage {
    private dropdownPageSelectors: DropdownPageSelectors;

    constructor(private page: Page) {
        this.dropdownPageSelectors = new DropdownPageSelectors(page);
    }

    async selectOption(optionToSelect: string) {
        await this.dropdownPageSelectors.dropdown.selectOption({ label: optionToSelect });
    }
    async checkNumberOfDropDownOptions(expectedOptions: number) {
        let items: number = await this.dropdownPageSelectors.dropdownOptions.count()
        await expect(items).toBe(expectedOptions)
    }

    async checkSelectedOption(expectedOption: string){
        await expect(await this.dropdownPageSelectors.selectedDropdownOption).toHaveText(expectedOption)
    }

    async checkDropDownOptions(page, expectedOptions :string[]){
        const options = await page.$$('select#dropdown option');

        const actualOptionsText : string[] = await Promise.all(options.map(async (option) => {
            return option.textContent();
        }));
        
        expect(actualOptionsText).toEqual(expectedOptions);
    }
}
