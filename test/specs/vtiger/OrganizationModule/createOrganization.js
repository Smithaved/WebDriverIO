const LoginPage=require("../../../pageobjects/login.page")
const HomePage=require("../../../pageobjects/home.page")
const OrganizationPage = require("../../../pageobjects/organization.page")
const CreateOrganizationPage = require("../../../pageobjects/createOrganization.page")
describe("Organization",async ()=>{
    it("CreateOrganization",async ()=>{
        // launching the application
        await LoginPage.open()
        //maximizing the browser
        await browser.maximizeWindow()
        //checking the title is matching
        await expect(browser).toHaveTitleContaining('vtiger CRM 5')
         //login to application by passing login credentials
         await LoginPage.login("admin","admin")
         //check whether home page is displayed or not
         console.log(await browser.getTitle());
         await expect(browser).toHaveTitleContaining('Home')
        //Create Organization
        await HomePage.clickOnOrganization()
        await OrganizationPage.clickOnCreateOrganization()
        var organizationname='Org_'+Math.round(Math.random()*1000)
        await CreateOrganizationPage.createOrganization(organizationname)
        // var pageTitle=await browser.$('.dvHeaderText')
        // await expect(pageTitle).toHaveTextContaining(orgName);
        //Mouse hover on administration and signout
        await HomePage.logout();
        })
})