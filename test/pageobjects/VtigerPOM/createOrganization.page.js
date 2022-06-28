const Page=require("./page")
class createOrganization extends Page{
    get organizationNameTextField()
    {
        return $('//input[@name="accountname"]')
    }
    get industryDropdown()
    {
        return $('//select[@name="industry"]')
    }
    get typeDropdown()
    {
        return $('//select[@name="accounttype"]')
    }
    get saveOrganizationButton()
    {
        return $('//input[@title="Save [Alt+S]"]')
    }
    async createOrganization(organiztionname)
    {
        await this.organizationNameTextField.setValue(organiztionname)
        await this.saveOrganizationButton.click()
    }
    async createOrganizationWithIndustryAndType(organiztionname,industry,type)
    {
        await this.organizationNameTextField.setValue(organiztionname)
        await this.industryDropdown.selectByVisibleText(industry)
        await this.typeDropdown.selectByVisibleText(type)
        await this.saveOrganizationButton.click()
    }
}
module.exports=new createOrganization()