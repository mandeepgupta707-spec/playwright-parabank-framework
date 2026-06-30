const BasePage = require('./BasePage');

class LoginPage extends BasePage {

    constructor(page) {
        super(page);

        this.username = 'input[name="username"]';
        this.password = 'input[name="password"]';
        this.loginButton = 'input[value="Log In"]';
    }

    async login(username, password) {

        await this.fill(this.username, username);
        await this.fill(this.password, password);

       await Promise.all([
    this.page.waitForLoadState('networkidle'),
    this.click(this.loginButton)
]);
    }
}

module.exports = LoginPage;