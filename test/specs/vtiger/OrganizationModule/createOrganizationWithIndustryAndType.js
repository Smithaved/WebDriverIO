const LoginPage=require("../../../pageobjects/VtigerPOM/login.page")
const HomePage=require("../../../pageobjects/VtigerPOM/home.page")
const OrganizationPage=require("../../../pageobjects/VtigerPOM/organization.page")
const CreateOrganizationPage=require("../../../pageobjects/VtigerPOM/createOrganization.page")
const fs=require('fs')
const detail=JSON.parse(fs.readFileSync("test/GenericUtilities/commonData.json"))
describe("Organization",async ()=>{
    detail.forEach(({username,password}) => {
        it("CreateOrganization",async ()=>{
            // launching the application
            await LoginPage.open()
            //maximizing the browser
            await browser.maximizeWindow()
            //checking the title is matching
            await expect(browser).toHaveTitleContaining('vtiger CRM 5')
             //login to application by passing login credentials
             await LoginPage.login(username,password)
             //check whether home page is displayed or not
             console.log(await browser.getTitle());
             await expect(browser).toHaveTitleContaining('Home')
            //Create Organization
            await HomePage.clickOnOrganization()
            await OrganizationPage.clickOnCreateOrganization()
            var organizationName='Org_'+Math.round(Math.random()*1000)
            var industry='Education'
            var type='Press'
            await CreateOrganizationPage.createOrganizationWithIndustryAndType(organizationName,industry,type)
            // var pageTitle=await browser.$('.dvHeaderText')
            // await expect(pageTitle).toHaveTextContaining(orgName);
            //Mouse hover on administration and signout
           await HomePage.logout()
            })
    });
})