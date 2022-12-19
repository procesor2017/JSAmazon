class SearchResult{
    async FindProductInSeachResult(my_product){
        await browser.pause(1000);
        const selector = $(`.//android.view.View[contains(@content-desc,"${my_product}")]`);
        await selector.click();
    }

}

module.exports = new SearchResult();