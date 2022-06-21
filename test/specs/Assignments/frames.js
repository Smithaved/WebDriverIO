describe("Frames",async()=>{
    it("Handling Frames",async()=>{
        await browser.url("https://ui.vision/demo/webtest/frames/")
        await expect(browser).toHaveUrlContaining("https://ui.vision/demo/webtest/frames/")
        await expect(browser).toHaveTitleContaining("Frames")
        await browser.switchToFrame(0)
        const frame1Text=await browser.$('//input[@name="mytext1"]')
        var originalText1="Smitha"
        await frame1Text.setValue(originalText1)
        var presentText1=await frame1Text.getValue()
        // await expect(presentText1).toContainEqual(originalText1)
        await browser.switchToParentFrame()
        //frame 2
        await browser.switchToFrame(1)
        const frame2Text=await browser.$('//input[@name="mytext2"]')
        var originalText1="Smitha.S"
        await frame2Text.setValue(originalText1)
        // var presentText1=await frame1Text.getValue()
        // await expect(presentText1).toContainEqual(originalText1)
        await browser.switchToParentFrame()
        //frame 4
        // await browser.switchToFrame(3)
        // const frame4Text=await browser.$('//input[@name="mytext4"]')
        // var originalText1="SmithaVed"
        // await frame4Text.setValue(originalText1)
        //  var presentText1=await frame4Text.getValue()
        // await expect(presentText1).toContainEqual(originalText1)
        // await browser.switchToParentFrame()
        //frame 3
        await browser.switchToFrame(2)
        const frame3Text=await browser.$('//input[@name="mytext3"]')
        var originalText1="Smitha@gmail.com"
        await frame3Text.setValue(originalText1)
        var presentText1=await frame3Text.getValue()
        console.log(presentText1);
        // await expect(presentText1).toContainEqual(originalText1)
        await browser.switchToFrame(0)
        const radioButton=await browser.$('//span[.="I am a human"]')
        await radioButton.click()
        console.log( await radioButton.getText());
        await browser.switchToParentFrame()
    })
})