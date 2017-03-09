import Product from '../js/models/product';
import Cart from '../js/models/cart';
var assert = require("assert");

describe('getInfo Tests', () => {
    it('returns same', (done) => {
        let testProduct = new Product("test", 12, "test");
        assert.equal(testProduct.getInfo.Name, "test");
        assert.equal(testProduct.getInfo.Price, 12);
        assert.equal(testProduct.getInfo.Description, "test");
        done();
    });
});

describe('countSummary Tests', () => {
    it('returns same', (done) => {
        let firstPrice = 12;
        let firstProduct = new Product("test", firstPrice, "test");

        let secondPrice = 18;
        let secondProduct = new Product("test", secondPrice, "test");

        let testCart = new Cart(1,"test");


        testCart.addToCart(firstProduct);
        testCart.addToCart(secondProduct);

        assert.equal(testCart.getSummaryCost, firstPrice+secondPrice);
        done();
    });
});