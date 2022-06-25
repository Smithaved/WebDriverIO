const LoginPage = require('C:/Users/USER/Desktop/WebDriverIo/test/pageobjects/login.page.js');
const HomePage = require('C:/Users/USER/Desktop/WebDriverIo/test/pageobjects/home.page.js');
const ContactPage = require('C:/Users/USER/Desktop/WebDriverIo/test/pageobjects/contact.page.js');
const CreateContactPage = require('C:/Users/USER/Desktop/WebDriverIo/test/pageobjects/createContact.page.js');
const ContactInformationPage = require('C:/Users/USER/Desktop/WebDriverIo/test/pageobjects/contactInformation.page.js');
describe("CreateContact",async()=>{
    it("CreateContact",async()=>{
       // launching the application
       await LoginPage.open()
       //maximizing the browser
       await browser.maximizeWindow()    
         //checking the title is matching
         await expect(browser).toHaveTitleContaining('vtiger CRM 5')
         //login to application by passing login critireas
      await LoginPage.login("admin","admin")
        //check whether home page is displayed or not
        await expect(browser).toHaveTitleContaining('Home')
        //navigate to contacts page and check whether  the contacts page is displayed
        await HomePage.clickOnContact()
        await expect(browser).toHaveUrlContaining('Contacts')
        //click on create contact and check create contact page is displayed
        await ContactPage.clickOnCreateContact()
        var pageTitle=await CreateContactPage.pageHeader
        await expect(pageTitle).toHaveText("Creating New Contact")
        // browser.pause(4000)
        //Fill mandatory fields and click on save and check contact information page is displayed with the newly added lastname
        var lastname='JS'+Math.round(Math.random()*1000)
        await CreateContactPage.createContact(lastname)
        var pageTitle=await ContactInformationPage.pageHead;
        await expect(pageTitle).toHaveTextContaining(lastname);
        //logout
        await HomePage.logout();
    })
})