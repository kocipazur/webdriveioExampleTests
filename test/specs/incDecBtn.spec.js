var assert = require('assert');
describe('check in-cart quantity manipulation by plus-minus buttons', function() {
    before('open product page', function () {
	var productUrl = '/product/751375/datautstyr/nettverksprodukter/videokonferanse/logitech-bcc950-conferencecam#';
	browser.deleteCookie();
	browser.url(productUrl);
    });
    it('should add item to a cart', function () {
	browser.click('.buy-button');
	browser.pause(2500);
    });
    it('should increase value', function () {
	browser.click('.adjust-button.inc');

	var itemQuantityField = $('#product-quantity-751375');
        assert.equal(itemQuantityField.getValue(), 2);
    });
    it('should decrease value', function () {
	browser.click('.adjust-button.dec');

	var itemQuantityField = $('#product-quantity-751375');
        assert.equal(itemQuantityField.getValue(), 1);		
    });
});
