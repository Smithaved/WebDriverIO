describe("Organization",async ()=>{
    it("CreateOrganization",async ()=>{
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
        //Create Organization
        var organization=await browser.$('//td[@class="tabUnSelected"]/a[.="Organizations"]')
        await organization.click()
        var createOrganization=await browser.$('//img[@title="Create Organization..."]')
        await createOrganization.click()
        var organizationName=await browser.$('//input[@name="accountname"]')
        await organizationName.setValue('Org_'+Math.round(Math.random()*1000))
        var orgName=await organizationName.getText()
        var saveOrganization=await browser.$$('//input[@title="Save [Alt+S]"]')
        await saveOrganization[0].click()
        var pageTitle=await browser.$('.dvHeaderText')
        await expect(pageTitle).toHaveTextContaining(orgName);
        //Mouse hover on administration and signout
        var element=browser.$('//img[@src="themes/softed/images/user.PNG"]')
        await element.moveTo()
        await browser.$('//a[.="Sign Out"]').click()
        })
})