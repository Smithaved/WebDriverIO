describe("Alert",async ()=>{
    it("Handle alert", async ()=>{
        await browser.url("C:/Users/USER/Desktop/WebDriverIo/test/specs/Alert/alert.html")
        console.log("Alert Message 1 "+await browser.getAlertText());
        await browser.acceptAlert();
        console.log("Alert Message 2 "+await browser.getAlertText())
        await browser.sendAlertText("Smitha")
        await browser.dismissAlert()
    })
})