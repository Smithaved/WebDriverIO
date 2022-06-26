const Page=require("./page")

class Organization extends Page
{
    get createOrganization()
    {
        return $('//img[@title="Create Organization..."]')
    }
    async clickOnCreateOrganization()
    {
        await this.createOrganization.click()
    }
}
module.exports=new Organization()