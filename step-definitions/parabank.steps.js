const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const HomePage = require('../pages/HomePage');
const RegisterPage = require('../pages/RegisterPage');
const LoginPage = require('../pages/LoginPage');
const AccountsOverviewPage = require('../pages/AccountsOverviewPage');

const testData = require('../utils/testData');
const { generateUsername } = require('../utils/randomData');
const { BASE_URL } = require('../utils/constants');

Given('the user opens the ParaBank application', async function () {

    await this.page.goto(BASE_URL);

    this.homePage = new HomePage(this.page);
    this.registerPage = new RegisterPage(this.page);
    this.loginPage = new LoginPage(this.page);
    this.accountsOverviewPage = new AccountsOverviewPage(this.page);

   this.user = testData;


});

When('the user navigates to the registration page', async function () {

    await this.homePage.clickRegister();

});
When('the user registers with valid details', async function () {

    
    await this.registerPage.registerUser(this.user);

const body = await this.page.locator("body").textContent();


    await this.page.waitForLoadState('networkidle');

    console.log(await this.page.locator('body').textContent());

});
Then('the account should be created successfully', async function () {

    const heading = await this.registerPage.getSuccessMessage();

    expect(heading).toContain('Welcome');

});


When('the user logs out', async function () {

    await this.homePage.clickLogout();

});

When('the user logs in with the registered credentials', async function () {

    await this.loginPage.login(
        this.user.username,
        this.user.password
    );

});

Then('the Accounts Overview page should be displayed', async function () {

    const heading = await this.accountsOverviewPage.getHeading();

    expect(heading).toContain('Accounts Overview');

});

Then('the available balance should be printed in the console', async function () {

    const balance = await this.accountsOverviewPage.getBalance();

    console.log("Available Balance:", balance);

});