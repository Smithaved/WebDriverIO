describe("CreateContact",async()=>{
    it("CreateContactWithImage",async()=>{
         // launching the application
         await browser.url("http://localhost:8888/index.php")
         //maximizing the browser
         await browser.maximizeWindow()
         //featching the title
         console.log(await browser.getTitle());
         //checking the title is matching
         await expect(browser).toHaveTitleContaining('vtiger CRM 5')
         //login to application by passing login critireas
        var username=await browser.$('//input[@name="user_name"]')
        await username.setValue('admin')
        await expect(username).toHaveValueContaining('admin')
        var password=await browser.$('//input[@name="user_password"]')
        await password.setValue('admin')
        var submit=await browser.$('//input[@id="submitButton"]')
        await submit.click()
        //check whether home page is displayed or not
        console.log(await browser.getTitle());
        await expect(browser).toHaveTitleContaining('Home')
        //navigate to contacts page and check whether  the contacts page is displayed
        var contact=await browser.$('//a[.="Contacts"]')
        await contact.click()
        console.log(await browser.getTitle());
        await expect(browser).toHaveUrlContaining('Contacts')
        //click on create contact and check create contact page is displayed
        var createContact=await browser.$('//img[@title="Create Contact..."]')
        await createContact.click()
        var pageTitle=await browser.$('.lvtHeaderText')
        await expect(pageTitle).toHaveText("Creating New Contact")
        //Fill mandatory fields and click on save and check contact information page is displayed with the newly added lastname
        var lastName=await browser.$('//input[@name="lastname"]')
        await lastName.setValue('JS'+Math.round(Math.random()*1000))
        var scrollElement=await browser.$('//b[.="Contact Image Information:"]')
        await scrollElement.scrollIntoView()
        var choseImage=await browser.$('//input[@name="imagename"]')
        await choseImage.setValue('C:/Users/USER/Desktop/WebDriverIo/ScreenShots/s1.png')
        var save=await browser.$('//input[@class="crmButton small save"]')
        await save.click()
        var pageTitle=await browser.$('.dvHeaderText')
        await expect(pageTitle).toHaveTextContaining('JS');
        //logout
        var element=browser.$('//img[@src="themes/softed/images/user.PNG"]')
        await element.moveTo()
        await browser.$('//a[.="Sign Out"]').click()
    })
})