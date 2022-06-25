const Page=require("./page")
class createContact extends Page
{
    get pageHeader()
    {
       return $('.lvtHeaderText')
    }
    get lastName()
    {
        return $('//input[@name="lastname"]')
    }
    get save()
    {
        return $('//input[@class="crmButton small save"]')
    }

    async createContact(lastname)
    {
        await this.lastName.setValue(lastname)
        await this.save.click()
    }
}
module.exports=new createContact()