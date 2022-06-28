const Page=require("./page")

class Organization extends Page
{
    get createOrganizationImage()
    {
        return $('//img[@title="Create Organization..."]')
    }
    async clickOnCreateOrganization()
    {
        await this.createOrganizationImage.click()
    }
}
module.exports=new Organization()