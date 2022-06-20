describe("Product",async ()=>{
    it("Launch Application",async ()=>{
        // launching the application
        await browser.url("http://localhost:8888/index.php")
        //maximizing the browser
        await browser.maximizeWindow()
        //featching the title
        console.log(await browser.getTitle());
        //checking the title is matching
        await expect(browser).toHaveTitleContaining('vtiger CRM 5')
    })
    it("Login",async ()=>{
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
    })
    it("CreateProduct",async ()=>{
        var product=await browser.$('//a[.="Products"]')
        await product.click()
        var createProduct=await browser.$('//img[@title="Create Product..."]')
        await createProduct.click()
        var productName=await browser.$('//input[@name="productname"]')
        await productName.setValue('Product_'+Math.round(Math.random()*1000))
        var saveOrganization=await browser.$$('//input[@title="Save [Alt+S]"]')
        await saveOrganization[0].click()
        })
    it("Logout",async ()=>{
        //Mouse hover on administration and signout
        var element=browser.$('//img[@src="themes/softed/images/user.PNG"]')
        await element.moveTo()
        await browser.$('//a[.="Sign Out"]').click()
    })
})