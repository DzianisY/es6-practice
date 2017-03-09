import Product from '../js/models/product';
import Cart from '../js/models/cart';
import Order from '../js/models/order';
let logic = require("../js/shopLogic");
let assert = require("assert");

let testString = "test";

let firstPrice = 12;
let firstProduct = new Product(testString, firstPrice, testString);

let secondPrice = 18;
let secondProduct = new Product(testString, secondPrice, testString);

let testCart;

describe('Product getInfo Tests', () => {
    it('returns if parameters equal', (done) => {
        assert.equal(firstProduct.getInfo.Name, testString);
        assert.equal(firstProduct.getInfo.Price, firstPrice);
        assert.equal(firstProduct.getInfo.Description, testString);
        done();
    });
});

describe('Cart countSummary Tests', () => {
    it('returns if cart cost counted right', (done) => {
        testCart = new Cart(1, "test");

        testCart.addToCart(firstProduct);
        testCart.addToCart(secondProduct);

        assert.equal(testCart.getSummaryCost, firstPrice + secondPrice);
        done();
    });
});

describe('shopLogic createCart Tests', () => {
    it('returns if created cart parameter equals manually created', (done) => {
        let internalCart = logic.createCart(testString);
        assert.equal(internalCart.customerName, testCart.customerName);
        done();
    });
});

describe('shopLogic createOrder Tests', () => {
    it('returns if  order resolves', (done) => {
        let testOrder = logic.createOrder(testCart);
        logic.resolveOrder(testOrder, secondPrice + firstPrice);
        assert.equal(testOrder.status, logic.constants.ORDER_APPROVED);
        done();
    });
});