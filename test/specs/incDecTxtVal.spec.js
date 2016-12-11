var assert = require('assert');
describe('check in-cart quantity manipulation by textfield value', function() {
    before('open product page', function () {
	var productUrl = '/product/852554/datautstyr/nettverksprodukter/videokonferanse/logitech-ptz-pro-kamera#';
	browser.deleteCookie();
	browser.url(productUrl);
    });
    it('should add item to a cart', function () {
	browser.click('.buy-button');
	browser.pause(2500);
    });
    it('should increase value', function () {
	browser.setValue('#product-quantity-852554', '2');
	var itemQuantityField = $('#product-quantity-852554');

        assert.equal(itemQuantityField.getValue(), '2');
    });
    it('should decrease value', function () {
	browser.setValue('#product-quantity-852554', '1');
	var itemQuantityField = $('#product-quantity-852554');

        assert.equal(itemQuantityField.getValue(), '1');		
    });
});
