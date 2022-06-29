const Page=require("./page")
const SearchPage=require("./search.page")
class createContact extends Page
{
    get pageHeaderLable()
    {
       return $('.lvtHeaderText')
    }
    get lastNameTextField()
    {
        return $('//input[@name="lastname"]')
    }
    get saveButton()
    {
        return $('//input[@class="crmButton small save"]')
    }
    get organizationImage()
    {
        return $('//input[@name="account_name"]//..//img')
    }
    
    get radioButton()
    {
        return $('//input[@value="T"]')
    }

    get groupDropdown()
    {
        return $('//select[@name="assigned_group_id"]')
    }

    async createContact(lastname)
    {
        await this.lastNameTextField.setValue(lastname)
        await this.saveButton.click()
    }

    async createContactWithOrganization(lastname,organizationName)
    {
        await this.lastNameTextField.setValue(lastname)
        await this.organizationImage.click()
        var windows=await browser.getWindowHandles();
        await browser.switchToWindow(windows[1])
        await SearchPage.search(organizationName)
        await browser.switchToWindow(windows[0])
        await this.saveButton.waitForClickable()
        await this.saveButton.click()
    }

    async createContactWithGroup(lastname,group)
    {
        await this.lastNameTextField.setValue(lastname)
        await this.radioButton.click()
        await this.groupDropdown.selectByVisibleText(group)
        await this.saveButton.waitForClickable()
        await this.saveButton.click()
    }
}
module.exports=new createContact()