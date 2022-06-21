describe("Assignment1",async ()=>{
    it("RadioButton",async ()=>{
        await browser.url("https://demos.jquerymobile.com/1.4.5/checkboxradio-radio/")
        await expect(browser).toHaveUrlContaining("https://demos.jquerymobile.com/1.4.5/checkboxradio-radio/")
        await expect(browser).toHaveTitleContaining("Radio buttons")
        await browser.maximizeWindow()
        const radioButton=await browser.$$('//label[.="Two"]')
        await radioButton[2].click()
        const result=await radioButton[2].isSelected()
        console.log(result);
    })
})