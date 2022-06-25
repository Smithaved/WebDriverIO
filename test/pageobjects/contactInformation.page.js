const Page=require("./page")
class ContactInformation extends Page{
    get pageHead()
    {
        return $('//span[@class="dvHeaderText"]')
    }
}
module.exports=new ContactInformation()