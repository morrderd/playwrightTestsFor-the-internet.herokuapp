import {Page, expect} from '@playwright/test';
import LoginPageSelectors from '../selectors/login.page.selectors';

export class LoginPage {
    private loginPageSelectors: LoginPageSelectors;

    constructor(private page:Page){
        this.loginPageSelectors = new LoginPageSelectors(page)
    }

    async login(login:string,password:string): Promise<void> {
        await this.loginPageSelectors.userNameInput.fill(login);
        await this.loginPageSelectors.userPasswordInput.fill(password);
    };

    async clickSignInButton(): Promise<void>{
        await this.loginPageSelectors.loginButton.click();
        await this.page.waitForLoadState('domcontentloaded')
    };

    async verifiedIfInvalidLoginPopupIsDisplay(massage:string){
        await expect(this.loginPageSelectors.invalidLoginPopup).toContainText(massage);
    }
}