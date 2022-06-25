const LoginPage=require("../../../pageobjects/login.page")
const HomePage=require("../../../pageobjects/home.page")
const ContactPage=require("../../../pageobjects/contact.page")
const CreateContactPage=require("../../../pageobjects/createContact.page")
const ContactInformationPage=require("../../../pageobjects/contactInformation.page")
describe("CreateContact",async()=>{
    it("CreateContactWithOrganization",async()=>{
         // launching the application
         await LoginPage.open()
         //maximizing the browser
         await browser.maximizeWindow()
         //checking the title is matching
         await expect(browser).toHaveTitleContaining('vtiger CRM 5')
         //login to application by passing login critireas
        await LoginPage.login("admin","admin")
        await expect(browser).toHaveTitleContaining('Home')
        //navigate to contacts page and check whether  the contacts page is displayed
        await HomePage.clickOnContact()
        console.log(await browser.getTitle());
        await expect(browser).toHaveUrlContaining('Contacts')
        //click on create contact and check create contact page is displayed
        await ContactPage.clickOnCreateContact()
        var pageTitle=await CreateContactPage.pageHeader
        await expect(pageTitle).toHaveText("Creating New Contact")
        //Fill mandatory fields,organization and click on save and check contact information page is displayed with the newly added lastname
        var lastName='JS'+Math.round(Math.random()*1000)
        var organizationName="org"
        await CreateContactPage.createContact(lastName,organizationName)
        var pageTitle=await ContactInformationPage.pageHead
        await expect(pageTitle).toHaveTextContaining(lastName);
        //logout
        await HomePage.logout()
    })
})