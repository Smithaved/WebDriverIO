const Page=require("./page")
class Search extends Page
{
    get searchTextField()
    {
        return $('#search_txt')
    }
    get searchButton()
    {
        return $('//input[@name="search"]')
    }
    async searchedText(searchtext)
    {
        var searchedTextLink=await browser.$("//a[.='"+searchtext+"']")
        searchedTextLink.click();
    }

    async search(searchtext)
    {
        await this.searchTextField.setValue(searchtext)
        await this.searchButton.click()
        await this.searchedText(searchtext)
    }
}
module.exports=new Search()