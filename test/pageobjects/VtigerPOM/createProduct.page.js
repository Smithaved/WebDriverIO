const Page=require("./page")
class CreateProduct extends Page{
    get productNameTextField()
    {
        return $('//input[@name="productname"]')
    }

    get saveButton()
    {
        return $('//input[@title="Save [Alt+S]"]')
    }

    async createProduct(productName)
    {
        await this.productNameTextField.setValue(productName)
        await this.saveButton.click()
    }
}
module.exports=new CreateProduct()