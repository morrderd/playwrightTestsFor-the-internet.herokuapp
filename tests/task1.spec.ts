import test from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { SecurePage } from "../pages/SecurePage"
const loginData = JSON.parse(JSON.stringify(require('../fixtures/loginData.json')))


test.describe('Task 1: Login Functionality Test', () => {
    let loginPage : LoginPage;
    let securePage : SecurePage;
    
    test.beforeEach(async ({page})=> {
        loginPage = new LoginPage(page);
        securePage = new SecurePage(page)
        await page.goto("/login")
    })

    test("valid login with correct login and password", async ({page})=>{
        await loginPage.login(loginData.correctUserLogin,loginData.correctUserPassword);
        await loginPage.clickSignInButton();
        await securePage.verifiedIfInvalidLoginPopupIsDisplay('You logged into a secure area!')
    })
    test("invalid login with incorrect login and incorrect password", async ({page})=>{
        await loginPage.login(loginData.incorrectUserLogin,loginData.incorrectUserPassword);
        await loginPage.clickSignInButton();
        await loginPage.verifiedIfInvalidLoginPopupIsDisplay("Your username is invalid!")
    })
    test("invalid login with correct login and incorrect password", async ({page})=>{
        await loginPage.login(loginData.correctUserLogin,loginData.incorrectUserPassword);
        await loginPage.clickSignInButton();
        await loginPage.verifiedIfInvalidLoginPopupIsDisplay("Your password is invalid!")
    })
    test("invalid login with incorrect login and correct password", async ({page})=>{
        await loginPage.login(loginData.incorrectUserLogin,loginData.correctUserPassword);
        await loginPage.clickSignInButton();
        await loginPage.verifiedIfInvalidLoginPopupIsDisplay("Your username is invalid!")
    })
    test("user open secure page without login before", async ({page})=>{
        await securePage.goToSecurePage();
        await loginPage.verifiedIfInvalidLoginPopupIsDisplay("You must login to view the secure area!")
    })

    test.afterAll(async ({page}) =>{
        await page.close();
    })
})