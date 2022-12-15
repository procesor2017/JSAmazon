class LoginScreen {
    get skipLogin() {
        return $('id=skip_sign_in_button');
    }

    /**
    * a method to encapsule automation code to interact with the page
    * e.g. to login using username and password
    */

    async loginSkip(){
        await this.skipLogin.click();
    }

}

module.exports = new LoginScreen();