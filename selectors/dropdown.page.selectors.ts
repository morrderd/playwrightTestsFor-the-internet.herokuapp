import {Page, Locator} from "@playwright/test";

export default class DropDownPageSelectors{
    readonly dropdown: Locator;
    readonly dropdownOptions: Locator;
    readonly selectedDropdownOption: Locator;

    constructor(private page:Page){
        this.dropdown = this.page.locator('//*[@id="dropdown"]');
        this.dropdownOptions = this.page.locator('//*[@id="dropdown"]/option');
        this.selectedDropdownOption =this.page.locator('//*[@id="dropdown"]/option[@selected]');
    };
};