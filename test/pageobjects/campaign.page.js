const Page=require("./page")
class Campaign extends Page{
    get createCampaign()
    {
        return browser.$('//img[@title="Create Campaign..."]')
    }
    async clickOnCreateCampaign()
    {
        await this.createCampaign.click()
    }
}
module.exports=new Campaign()