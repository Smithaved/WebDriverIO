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

    async search(organizationName)
    {
        await this.searchText.setValue(organizationName)
        await this.searchButton.click()
        await this.searchedText(organizationName)
    }
}
module.exports=new Search()