const Page=require("./page")

class Product extends Page{
    get clickOnProductImage()
    {
        return $('//img[@title="Create Product..."]')
    }

    async clickOnProduct()
    {
        await this.clickOnProductImage.click()
    }
}
module.exports=new Product()