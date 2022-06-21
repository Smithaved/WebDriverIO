describe("Amazon",async()=>{
    it("ScrollToHelp",async()=>{
        await browser.url("https://www.amazon.in")
        await expect(browser).toHaveUrlContaining("https://www.amazon.in")
        await expect(browser).toHaveTitleContaining("Online Shopping")
        await browser.maximizeWindow()
        const help=await browser.$("//a[.='Help']")
        await help.scrollIntoView()
        await browser.debug()
    })
})