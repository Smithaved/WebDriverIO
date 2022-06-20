describe("Campaign",async ()=>{
    it("CreateCampaignWithProduct",async ()=>{
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
        //Create Campain
        var moreOptions=await browser.$('//a[.="More"]')
        await moreOptions.moveTo()
        var campaign=await browser.$('//a[.="Campaigns"]')
        await campaign.click()
        await expect(browser).toHaveTitleContaining('Campaign')
        var createCampaign=await browser.$('//img[@title="Create Campaign..."]')
        await createCampaign.click()
        var campaignName=await browser.$('//input[@name="campaignname"]')
        await campaignName.setValue('Camp_'+Math.round(Math.random()*1000))
        var product=await browser.$('//input[@name="product_name"]//..//img')
        await product.click()
        var windows=await browser.getWindowHandles();
        await browser.switchToWindow(windows[1])
        var searchText=await browser.$('#search_txt')
        await searchText.setValue("prod")
        var search=await browser.$('//input[@name="search"]')
        await search.click()
        var searchedText=await browser.$('//a[.="prod"]')
        await searchedText.click()
        await browser.switchToWindow(windows[0])
        var saveOrganization=await browser.$$('//input[@title="Save [Alt+S]"]')
        await saveOrganization[0].click()
        //Mouse hover on administration and signout
        var element=browser.$('//img[@src="themes/softed/images/user.PNG"]')
        await element.moveTo()
        await browser.$('//a[.="Sign Out"]').click()
        await expect(browser).toHaveUrlContaining('Login')
    })
})