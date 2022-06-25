const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Home extends Page {
    get contact () {
        return $('//a[.="Contacts"]');
    }
    get adminstrator()
    {
        return $('//img[@src="themes/softed/images/user.PNG"]')
    }
    get signOut()
    {
        return $('//a[.="Sign Out"]')
    }
    async clickOnContact()
    {
        await this.contact.click()
    }
    async logout()
    {
        await this.adminstrator.moveTo()
        await this.signOut.click()
    }
}
module.exports = new Home();