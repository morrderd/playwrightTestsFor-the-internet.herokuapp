import {Page, Locator} from "@playwright/test";

export default class DynamicLoadedPageSelectors{
    readonly startButton: Locator;
    readonly finishElem: Locator;
    readonly loadingElem: Locator

    constructor(private page:Page){
        this.startButton = this.page.locator('//*[@id="start"]/button');
        this.finishElem = this.page.locator('//*[@id="finish"]')
        this.loadingElem = this.page.locator('//*[@id="loading"]')
    };
};