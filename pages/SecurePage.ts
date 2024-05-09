import {Page, expect} from '@playwright/test';
import SecurePageSelectors from '../selectors/secure.page.selectors';

export class SecurePage {
    private securePageSelectors: SecurePageSelectors;

    constructor(private page:Page){
        this.securePageSelectors = new SecurePageSelectors(page)
    }

    async goToSecurePage(){
        await this.page.goto('/secure')
    }

    async verifiedIfInvalidLoginPopupIsDisplay(massage:string){
        await expect(this.securePageSelectors.validLoginPopup).toContainText(massage);
    }
}