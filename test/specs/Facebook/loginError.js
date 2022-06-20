describe("FaceBook",async()=>{
    it("LoginError",async()=>{
        await browser.url('https://www.facebook.com/')
        await expect(browser).toHaveTitleContaining('log in')
        var userName= await browser.$('//input[@name="email"]')
        userName.setValue('smitha20130@gmail.com')
        var submit= await $('//button[@name="login"]')
        await submit.click()
        await browser.waitUntil(async ()=>(await $('._9ay7').getText()==="The password that you've entered is incorrect"),{
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        })
        console.log(await $('._9ay7').getText());
        await expect(await $('._9ay7').getText()).toHaveTextContaining('entered is incorrect')
    })
})