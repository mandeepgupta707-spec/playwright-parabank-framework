const BasePage = require('./BasePage');

class RegisterPage extends BasePage {

    constructor(page) {
        super(page);

        this.firstName = 'input[id="customer.firstName"]';
        this.lastName = 'input[id="customer.lastName"]';
        this.address = 'input[id="customer.address.street"]';
        this.city = 'input[id="customer.address.city"]';
        this.state = 'input[id="customer.address.state"]';
        this.zipCode = 'input[id="customer.address.zipCode"]';
        this.phone = 'input[id="customer.phoneNumber"]';
        this.ssn = 'input[id="customer.ssn"]';

        this.username = 'input[id="customer.username"]';
        this.password = 'input[id="customer.password"]';
        this.confirmPassword = 'input[id="repeatedPassword"]';

        this.registerButton = 'input[value="Register"]';

        this.successMessage = 'h1.title';
    }

    async registerUser(user) {

        await this.fill(this.firstName, user.firstName);
        await this.fill(this.lastName, user.lastName);
        await this.fill(this.address, user.address);
        await this.fill(this.city, user.city);
        await this.fill(this.state, user.state);
        await this.fill(this.zipCode, user.zipCode);
        await this.fill(this.phone, user.phone);
        await this.fill(this.ssn, user.ssn);

        await this.fill(this.username, user.username);
        await this.fill(this.password, user.password);
        await this.fill(this.confirmPassword, user.password);

       await Promise.all([
    this.page.waitForLoadState('networkidle'),
    this.click(this.registerButton)
]);
    }

    async getSuccessMessage() {
        return await this.getText(this.successMessage);
    }
}

module.exports = RegisterPage;