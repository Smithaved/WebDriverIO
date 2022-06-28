const LoginPage=require("../../../pageobjects/VtigerPOM/login.page")
const fs=require("fs")
const LoginDetails=JSON.parse(fs.readFileSync("test/testData/loginDetail.json"))
describe('Vtiger',async ()=>{
    LoginDetails.forEach(({userName,password}) => {
        it('Launching vtiger application',async ()=>{
            // launching the application
            await LoginPage.open()
            //maximizing the browser
            await browser.maximizeWindow()
            //featching the title
            console.log(await browser.getTitle());
            //checking the title is matching
            await expect(browser).toHaveTitleContaining('vtiger CRM 5')
            //login to application by passing login critireas
            await LoginPage.login(userName,password)
            //fetch and check the error message
            
            await browser.waitUntil(async()=>(await $('.errorMessage').getText())==="You must specify a valid username and password.",{
                timeout: 5000,
                timeoutMsg: 'expected text to be different after 5s'
            })
            var element=await browser.$('//div[@class="errorMessage"]')
            await expect(element).toHaveText("You must specify a valid username and password.")
        })
    });
    
})