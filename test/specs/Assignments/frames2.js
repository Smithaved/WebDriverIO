describe("Frames",async()=>{
    it("frames2",async()=>{
        await browser.url("https://chercher.tech/practice/frames")
        const frame1=await browser.$("#frame1")
        const frame2=await browser.$("#frame2")
        await browser.switchToFrame(frame1)
        const textField=await browser.$("//input")
        await textField.setValue("Smitha")
        console.log(await textField.getValue());
        const frame3=await browser.$("#frame3")
        await browser.switchToFrame(frame3)
        const innercheckBox=await browser.$("//input[@id='a']") 
        await innercheckBox.click()
        console.log(await innercheckBox.getText());
        await browser.switchToParentFrame()
        console.log(await textField.getValue());
        await browser.switchToParentFrame()
        await browser.switchToFrame(frame2)
        const dropdown=await browser.$("//select")
        await dropdown.selectByVisibleText("Baby Cat")
        console.log(await dropdown.isSelected());
    })
})