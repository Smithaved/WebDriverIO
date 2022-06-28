

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get usernameTextField () {
        return $('//input[@name="user_name"]');
    }

    get passwordtextField () {
        return $('//input[@name="user_password"]');
    }

    get loginButton () {
        return $('//input[@id="submitButton"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.usernameTextField.setValue(username);
        await this.passwordtextField.setValue(password);
        await this.loginButton.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new LoginPage();
