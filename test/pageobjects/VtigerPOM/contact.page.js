const Page=require("./page")

class Contact extends Page{
    get createContactImage()
    {
        return $('//img[@title="Create Contact..."]')
    }

    async clickOnCreateContact()
    {
       await this.createContactImage.click()
    }
}

module.exports = new Contact()