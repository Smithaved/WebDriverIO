const Page=require("./page")
class ContactInformation extends Page{
    get pageHeadLable()
    {
        return $('//span[@class="dvHeaderText"]')
    }
}
module.exports=new ContactInformation()