describe("SpiceJet",async ()=>{
    it("BookAFlight",async ()=>{
        await browser.url("https://www.ajio.com/")
        const element=await browser.$("//a[.='MEN']")
        await element.moveTo()
        console.log(element.getText());
        const catagory=await browser.$("//a[.='Backpacks']")
        await catagory.click()
    })
})