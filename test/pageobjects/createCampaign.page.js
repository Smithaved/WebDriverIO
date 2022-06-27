const Page=require("./page")
const SearchPage=require("./search.page")
class CreateCampaign extends Page{
    get campaignName()
    {
        return $('//input[@name="campaignname"]')
    }
    get saveCampaign()
    {
        return $$('//input[@title="Save [Alt+S]"]')
    }
    get product()
    {
        return $('//input[@name="product_name"]//..//img')
    }
    async createCampaign(campaignname)
    {
        await this.campaignName.setValue(campaignname)
        await this.saveCampaign[0].click()
    }
    async createCampaign(campaignname,productname)
    {
        await this.campaignName.setValue(campaignname)
        await this.product.click()
        var windows=await browser.getWindowHandles();
        await browser.switchToWindow(windows[1])
        await SearchPage.search(productname)
        await browser.switchToWindow(windows[0])
        await this.saveCampaign[0].click()
    }
}
module.exports=new CreateCampaign()