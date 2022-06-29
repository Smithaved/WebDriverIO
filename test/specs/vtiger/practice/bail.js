const LoginPage=require("../../../pageobjects/VtigerPOM/login.page")
describe("Execution",async ()=>{
    it("first",async()=>{
        await LoginPage.open("http://localhost:8888/index.php")
        await LoginPage.login("admin1","admin2")
        await expect(browser).toHaveTitleContaining("Home")
    })
    it("Second",async()=>{
        await LoginPage.open("http://localhost:8888/index.php")
        await LoginPage.login("admin","admin")
        await expect(browser).toHaveTitleContaining("Home")
    })
})