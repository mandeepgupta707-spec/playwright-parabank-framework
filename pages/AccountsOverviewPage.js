const BasePage = require('./BasePage');

class AccountsOverviewPage extends BasePage {

    constructor(page) {
        super(page);

        this.accountOverviewHeading = 'h1.title';
        this.balance = 'tbody tr:first-child td:nth-child(2)';
    }

    async getHeading() {
    return (await this.page.locator(this.accountOverviewHeading).first().textContent()).trim();
}

    async getBalance() {
        return await this.page.locator(this.balance).textContent();
    }
}

module.exports = AccountsOverviewPage;