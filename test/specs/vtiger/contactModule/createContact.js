const LoginPage = require("../../../pageobjects/VtigerPOM/login.page");
const HomePage = require("../../../pageobjects/VtigerPOM/home.page");
const ContactPage = require("../../../pageobjects/VtigerPOM/contact.page");
const CreateContactPage = require("../../../pageobjects/VtigerPOM/createContact.page");
const ContactInformationPage = require("../../../pageobjects/VtigerPOM/contactInformation.page");
const fs=require("fs")
const detail=JSON.parse(fs.readFileSync("test/GenericUtilities/commonData.json"))
describe("CreateContact",async()=>{
    detail.forEach(({username,password,contact}) => {
      it("CreateContact--ContactModule",async()=>{
        // launching the application
        await LoginPage.open()
        //maximizing the browser
        await browser.maximizeWindow()    
          //checking the title is matching
          await expect(browser).toHaveTitleContaining('vtiger CRM 5')
          //login to application by passing login critireas
       await LoginPage.login(username,password)
         //check whether home page is displayed or not
         await expect(browser).toHaveTitleContaining('Home')
         //navigate to contacts page and check whether  the contacts page is displayed
         await HomePage.clickOnContact()
         await expect(browser).toHaveUrlContaining('Contacts')
         //click on create contact and check create contact page is displayed
         await ContactPage.clickOnCreateContact()
         var pageTitle=await CreateContactPage.pageHeaderLable
         await expect(pageTitle).toHaveText("Creating New Contact")
         // browser.pause(4000)
         //Fill mandatory fields and click on save and check contact information page is displayed with the newly added lastname
         var lastname=contact+Math.round(Math.random()*1000)
         await CreateContactPage.createContact(lastname)
         var pageTitle=await ContactInformationPage.pageHeadLable;
         await expect(pageTitle).toHaveTextContaining(lastname);
         //logout
         await HomePage.logout();
     })
    });
})