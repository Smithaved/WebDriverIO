const LoginPage=require("../../../pageobjects/login.page")
const HomePage=require("../../../pageobjects/home.page")
const CampaginPage=require("../../../pageobjects/campaign.page")
const CreateCampaignPage = require("../../../pageobjects/createCampaign.page")
describe("Campaign",async ()=>{
    it("CreateCampaign",async ()=>{
        // launching the application
        await LoginPage.open()
        //maximizing the browser
        await browser.maximizeWindow()
        //featching the title
        console.log(await browser.getTitle());
        //checking the title is matching
        await expect(browser).toHaveTitleContaining('vtiger CRM 5')
        //login to application by passing login credentials
        await LoginPage.login("admin","admin")
        //check whether home page is displayed or not
        console.log(await browser.getTitle());
        await expect(browser).toHaveTitleContaining('Home')
        //Create Campaign
        await HomePage.clickOnCampaign()
        await expect(browser).toHaveTitleContaining('Campaign')
        await CampaginPage.clickOnCreateCampaign()
        var campaignname='Camp_'+Math.round(Math.random()*1000)
        await CreateCampaignPage.createCampaign(campaignname)
        //Mouse hover on administration and signout
        await HomePage.logout()
        })
})