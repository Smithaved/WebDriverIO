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

    get organization()
    {
        return $('//a[.="Organizations"]')
    }

    get more()
    {
        return $('//a[.="More"]')
    }
    get campaign()
    {
        return $('//a[.="Campaigns"]')
    }

    async clickOnCampaign()
    {
        await this.more.moveTo()
        await this.campaign.click()

    }
    async clickOnContact()
    {
        await this.contact.click()
    }
    async clickOnOrganization()
    {
        await this.organization.click()
    }
    async logout()
    {
        await this.adminstrator.click()
        await this.signOut.click()
    }
}
module.exports = new Home();