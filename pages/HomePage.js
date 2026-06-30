const BasePage = require('./BasePage');

class HomePage extends BasePage {

    constructor(page) {
        super(page);

        this.registerLink = 'a[href*="register.htm"]';
        this.logoutLink = 'a[href*="logout.htm"]';
    }

    async clickRegister() {
        await this.click(this.registerLink);
    }

    async clickLogout() {
        await this.click(this.logoutLink);
    }
}

module.exports = HomePage;