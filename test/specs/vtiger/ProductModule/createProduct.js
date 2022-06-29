const LoginPage=require("../../../pageobjects/VtigerPOM/login.page")
const HomePage=require("../../../pageobjects/VtigerPOM/home.page")
const ProductPage=require("../../../pageobjects/VtigerPOM/productPage")
const CreateProductPage  = require("../../../pageobjects/VtigerPOM/createProduct.page")
const fs=require('fs')
const detail=JSON.parse(fs.readFileSync("test/testData/productName.json"))
describe("Product",async ()=>{
    detail.forEach(({username,password,productName}) => {
        it("CreateProduct",async ()=>{
            // launching the application
            await LoginPage.open()
            //maximizing the browser
            await browser.maximizeWindow()
            //checking the title is matching
            await expect(browser).toHaveTitleContaining('vtiger CRM 5')
            //login to application by passing login credentials
            await LoginPage.login(username,password)
            //check whether home page is displayed or not
            await expect(browser).toHaveTitleContaining('Home')
            await HomePage.clickOnProduct()
            await ProductPage.clickOnProduct()
            // var productName='Product_'+Math.round(Math.random()*1000)
            await CreateProductPage.createProduct(productName)
            //Mouse hover on administration and signout
            await HomePage.logout()
        })
    });
})