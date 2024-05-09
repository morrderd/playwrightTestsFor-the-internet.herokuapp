import {Page, Locator} from "@playwright/test";

export default class SecurePageSelectors{
    readonly validLoginPopup: Locator;

    constructor(private page:Page){
        this.validLoginPopup = this.page.locator('//*[@id="flash"]');
    };
};