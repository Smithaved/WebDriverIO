describe('Vtiger',async ()=>{
    it('Launching vtiger application',async ()=>{
        // launching the application
        await browser.url("http://localhost:8888/index.php")
        //maximizing the browser
        await browser.maximizeWindow()
        //featching the title
        console.log(await browser.getTitle());
        //checking the title is matching
        await expect(browser).toHaveTitleContaining('vtiger CRM 5')
        //login to application by passing login critireas
        await browser.$('//input[@name="user_name"]').setValue('admin')
        await browser.$('//input[@name="user_password"]').setValue('admin1')
        await browser.$('//input[@id="submitButton"]').click()
        //fetch and check the error message
        
        await browser.waitUntil(async()=>(await $('.errorMessage').getText())==="You must specify a valid username and password.",{
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        })
        var element=await browser.$('//div[@class="errorMessage"]')
        await expect(element).toHaveText("You must specify a valid username and password.")
        //console.log(error);
        // var element=browser.$('//img[@src="themes/softed/images/user.PNG"]')
        // await element.moveTo()
        // await browser.$('//a[.="Sign Out"]').click()
    })
})