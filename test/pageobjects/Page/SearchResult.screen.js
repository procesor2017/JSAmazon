class SearchResult{
    async FindProductInSeachResult(my_product){
        await driver.pause(1000)
        //const selector = `android=new UiSelector().resourceId("search")`;
        const selector = $("id:mash_web_fragment").$("//android.view.View[@content-desc='SAMSUNG']");
        
        //const newSelector = $(selector).className("android.view.View").textContains("${my_product}");
        
        
        await selector.click();
        
    }

}

module.exports = new SearchResult();