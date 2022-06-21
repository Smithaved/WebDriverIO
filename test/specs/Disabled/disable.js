describe("Disable",async()=>{
    it("disable",async()=>{
        await browser.url("C:/Users/USER/Desktop/WebDriverIo/test/specs/Disabled/disable.html")
        var firstName=await browser.$('#fname')
        await firstName.setValue("Smitha")
        var fnameValue=await firstName.getValue()
        console.log(fnameValue);
        var lastName=await browser.$('#lname')
        await browser.execute((lstname)=>{
            document.getElementById("lname").setAttribute("value",lstname)
        },"Siddaraju")
        var lnameValue=await lastName.getValue()
        console.log(lnameValue);
    })
})