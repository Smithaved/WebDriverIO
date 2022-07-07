const HomePage=require("../../../pageobjects/VtigerPOM/home.page")
const ProductPage=require("../../../pageobjects/VtigerPOM/productPage")
const CreateProductPage  = require("../../../pageobjects/VtigerPOM/createProduct.page")
describe("Product",async ()=>{
        it("CreateProduct",async ()=>{
            await expect(browser).toHaveTitleContaining('Home')
            await HomePage.clickOnProduct()
            await ProductPage.clickOnProduct()
            var productName='Product_'+Math.round(Math.random()*1000)
            await CreateProductPage.createProduct(productName)
        })
    
})