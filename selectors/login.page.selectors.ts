import {Page, Locator} from "@playwright/test";

export default class LoginPageSelectors{
    readonly userNameInput: Locator;
    readonly userPasswordInput: Locator;
    readonly loginButton: Locator;
    readonly invalidLoginPopup: Locator;

    constructor(private page:Page){
        this.userNameInput = this.page.locator('//*[@id="username"]');
        this.userPasswordInput = this.page.locator('//*[@id="password"]');
        this.loginButton = this.page.locator('//button')
        this.invalidLoginPopup = this.page.locator('//*[@id="flash"]');
    };
};