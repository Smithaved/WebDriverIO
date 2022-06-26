const Page=require("./page")
class createOrganization extends Page{
    get organizationName()
    {
        return $('//input[@name="accountname"]')
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
}
module.exports=new createOrganization()