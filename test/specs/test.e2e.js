const LoginScreen = require("../pageobjects/Page/Login.screen");
const DashboardScreen = require("../pageobjects/Page/Dashboard.screen")
const SearchResultScreen = require("../pageobjects/Page/SearchResult.screen")

describe("Ours Test", () => {
    beforeEach(async () => {
        await LoginScreen.waitForLoadLoginPage();
    });

    it("TC1 :: POC", async () => {
        await LoginScreen.loginSkip();
        await DashboardScreen.CheckDashboardWasLoaded();
        await DashboardScreen.FindProduct("Samsung");
    });

    it("TC2 :: POC", async () => {
        await LoginScreen.loginSkip();
        await DashboardScreen.CheckDashboardWasLoaded();
        await DashboardScreen.FindProduct("Samsung");
        await DashboardScreen.CheckDashboardWasLoaded();
        await DashboardScreen.FindProduct("Samsung");
        await SearchResultScreen.FindProductInSeachResult("Samsung")
    }); 

});

