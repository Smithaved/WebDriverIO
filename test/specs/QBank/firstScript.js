describe('Banking application',async ()=>{
    it('Launch the Application',async ()=>{
        await browser.url('http://122.166.192.191:9001/')
        await browser.maximizeWindow();
        await console.log(browser.getTitle());
        await browser.$('//input[@id="edit-name"]').setValue('customer')
        await browser.$('//input[@id="edit-pass"]').setValue('customer')
        var links=await $$('a')
        await console.log(links);
        await browser.pause(1000)
        await (browser.$('//input[@id="edit-submit"]')).click()
        var home= browser.$('//a[@class="active"]')
        await expect(home).toHaveText('Home')
        await browser.saveScreenshot('./ScreenShots/s1.png')
        
    })
})