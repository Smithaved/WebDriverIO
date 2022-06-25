const Page=require("./page")

class Contact extends Page{
    get createContact()
    {
        return $('//img[@title="Create Contact..."]')
    }

    async clickOnCreateContact()
    {
       await this.createContact.click()
    }
}

module.exports = new Contact()