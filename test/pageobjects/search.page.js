const Page=require("./page")
class Search extends Page
{
    get searchText()
    {
        return $('#search_txt')
    }
    get searchButton()
    {
        return $('//input[@name="search"]')
    }
    
    async searchedText(organizationName)
    {
        var searchedText=await browser.$("//a[.='"+organizationName+"']")
        searchedText.click();
    }

    async search(searchtext)
    {
        await this.searchText.setValue(searchtext)
        await this.searchButton.click()
        await this.searchedText(searchtext)
    }
}
module.exports=new Search()