const Page=require("./page")
class createOrganization extends Page{
    get organizationName()
    {
        return $('//input[@name="accountname"]')
    }
    get industry()
    {
        return $('//select[@name="industry"]')
    }
    get type()
    {
        return $('//select[@name="accounttype"]')
    }
    get saveOrganization()
    {
        return $$('//input[@title="Save [Alt+S]"]')
    }
    async createOrganization(organiztionname)
    {
        await this.organizationName.setValue(organiztionname)
        await this.saveOrganization[0].click()
    }
    async createOrganization(organiztionname,industry,type)
    {
        await this.organizationName.setValue(organiztionname)
        await this.industry.selectByVisibleText(industry)
        await this.type.selectByVisibleText(type)
        await this.saveOrganization[0].click()
    }
}
module.exports=new createOrganization()