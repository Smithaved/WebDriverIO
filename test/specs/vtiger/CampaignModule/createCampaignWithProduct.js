const LoginPage=require("../../../pageobjects/VtigerPOM/login.page")
const HomePage=require("../../../pageobjects/VtigerPOM/home.page")
const CampaignPage=require("../../../pageobjects/VtigerPOM/campaign.page")
const CreateCampaignPage=require("../../../pageobjects/VtigerPOM/createCampaign.page")
const fs=require('fs')
const detail=JSON.parse(fs.readFileSync("test/GenericUtilities/commonData.json"))
describe("Campaign",async ()=>{
    detail.forEach(({username,password}) => {
        it("CreateCampaignWithProduct",async ()=>{
            // launching the application
            await LoginPage.open()
            //maximizing the browser
            await browser.maximizeWindow()
            //featching the title
            console.log(await browser.getTitle());
            //checking the title is matching
            await expect(browser).toHaveTitleContaining('vtiger CRM 5')
            //login to application by passing login credentials
            await LoginPage.login(username,password)
            //check whether home page is displayed or not
            console.log(await browser.getTitle());
            await expect(browser).toHaveTitleContaining('Home')
            //Create Campain
            await HomePage.clickOnCampaign()
            await expect(browser).toHaveTitleContaining('Campaign')
            await CampaignPage.clickOnCreateCampaign()
            var campaignName='Camp_'+Math.round(Math.random()*1000)
            var productName="prod"
            await CreateCampaignPage.createCampaignWithProduct(campaignName,productName)
            //Mouse hover on administration and signout
            await HomePage.logout()
        })
    });
})