describe("AutomationPratice",async ()=>{
    it("Book A OutFit",async ()=> {
        await browser.url("https://automationpractice.com")
        await expect(browser).toHaveUrlContaining("index.php")
        await expect(browser).toHaveTitleContaining("My Store")
        await browser.maximizeWindow()
        const majorTab= await browser.$("//a[.='Dresses']")
        await majorTab.moveTo()
    })
})