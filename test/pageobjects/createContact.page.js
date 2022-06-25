const Page=require("./page")
const SearchPage=require("./search.page")
class createContact extends Page
{
    get pageHeader()
    {
       return $('.lvtHeaderText')
    }
    get lastName()
    {
        return $('//input[@name="lastname"]')
    }
    get save()
    {
        return $('//input[@class="crmButton small save"]')
    }
    get organization()
    {
        return $('//input[@name="account_name"]//..//img')
    }

    async createContact(lastname)
    {
        await this.lastName.setValue(lastname)
        await this.save.click()
    }

    async createContact(lastname,organizationName)
    {
        await this.lastName.setValue(lastname)
        await this.organization.click()
        var windows=await browser.getWindowHandles();
        await browser.switchToWindow(windows[1])
        await SearchPage.search(organizationName)
        await browser.switchToWindow(windows[0])
        await this.save.waitForClickable()
        await this.save.click()
    }
}
module.exports=new createContact()