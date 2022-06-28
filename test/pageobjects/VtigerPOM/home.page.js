const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Home extends Page {
    get contactLink () {
        return $('//a[.="Contacts"]');
    }
    get adminstratorImg()
    {
        return $('//img[@src="themes/softed/images/user.PNG"]')
    }
    get signOutLink()
    {
        return $('//a[.="Sign Out"]')
    }

    get organizationLink()
    {
        return $('//a[.="Organizations"]')
    }

    get moreDropdownList()
    {
        return $('//a[.="More"]')
    }
    get campaignLink()
    {
        return $('//a[.="Campaigns"]')
    }

    get productLink()
    {
        return $('//a[.="Products"]')
    }

    async clickOnCampaign()
    {
        await this.moreDropdownList.moveTo()
        await this.campaignLink.click()

    }
    async clickOnContact()
    {
        await this.contactLink.click()
    }
    async clickOnOrganization()
    {
        await this.organizationLink.click()
    }

    async clickOnProduct()
    {
        await this.productLink.click()
    }

    async logout()
    {
        await this.adminstratorImg.click()
        await this.signOutLink.click()
    }
}
module.exports = new Home();