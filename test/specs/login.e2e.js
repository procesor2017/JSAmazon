const LoginScreen = require("../pageobjects/Login.screen");

describe("PoC :: Login", () => {
    it("Should skip", async () => {
        await LoginScreen.loginSkip();
    })
});