const Page=require("./page")
const SearchPage=require("./search.page")
class CreateCampaign extends Page{
    get campaignNameTextField()
    {
        return $('//input[@name="campaignname"]')
    }
    get saveCampaignButton()
    {
        return $('//input[@title="Save [Alt+S]"]')
    }
    get productImage()
    {
        return $('//input[@name="product_name"]//..//img')
    }
    async createCampaign(campaignname)
    {
        await this.campaignNameTextField.setValue(campaignname)
        await this.saveCampaignButton.click()
    }
    async createCampaignWithProduct(campaignname,productname)
    {
        await this.campaignNameTextField.setValue(campaignname)
        await this.productImage.click()
        var windows=await browser.getWindowHandles();
        await browser.switchToWindow(windows[1])
        await SearchPage.search(productname)
        await browser.switchToWindow(windows[0])
        await this.saveCampaignButton.click()
    }
}
module.exports=new CreateCampaign()