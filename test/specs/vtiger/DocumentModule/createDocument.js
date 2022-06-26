const LoginPage=require("../../../pageobjects/login.page")
const HomePage=require("../../../pageobjects/home.page")
describe("Documents",async ()=>{ 
    it("CreateDocument",async ()=>{
        // launching the application
        await LoginPage.open()
        //maximizing the browser
        await browser.maximizeWindow()
        //checking the title is matching
        await expect(browser).toHaveTitleContaining('vtiger CRM 5')
         //login to application by passing login credentials
        await LoginPage.login("admin","admin")
         //check whether home page is displayed or not
         await expect(browser).toHaveTitleContaining('Home')
        //Create Document
        var document=await browser.$('//a[.="Documents"]')
        await document.click()
        var createDocument=await browser.$('//img[@title="Create Document..."]')
        await createDocument.click()
        var documentTitle=await browser.$('//input[@name="notes_title"]')
        await documentTitle.setValue('Title_'+Math.round(Math.random()*1000))
        await browser.switchToFrame(0)
        var documentDesciption=await browser.$("//body[@class='cke_show_borders']")
        await documentDesciption.setValue(`Hi,
        Please Find the Attachment`)
        await browser.switchToParentFrame()
        // await browser.waitUntil(async ()=>{await $$('//input[@title="Save [Alt+S]"]').isEnabled()})
        var saveOrganization=await browser.$$('//input[@title="Save [Alt+S]"]')
        await saveOrganization[0].click()
         //Mouse hover on administration and signout
         await HomePage.logout()
        })
})