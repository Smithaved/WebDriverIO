describe("Documents",async ()=>{ 
    it("CreateDocument",async ()=>{
        // launching the application
        await browser.url("http://localhost:8888/index.php")
        //maximizing the browser
        await browser.maximizeWindow()
        //featching the title
        console.log(await browser.getTitle());
        //checking the title is matching
        await expect(browser).toHaveTitleContaining('vtiger CRM 5')
         //login to application by passing login credentials
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
         var element=browser.$('//img[@src="themes/softed/images/user.PNG"]')
         await element.moveTo()
         await browser.$('//a[.="Sign Out"]').click()
        })
})