const Page=require("./page")
class Campaign extends Page{
    get createCampaignImage()
    {
        return browser.$('//img[@title="Create Campaign..."]')
    }
    async clickOnCreateCampaign()
    {
        await this.createCampaignImage.click()
    }
}
module.exports=new Campaign()