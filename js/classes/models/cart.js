'use strict';

class Cart {

    constructor(id, customerName) {
        this.id = id;
        this.customerName = customerName;
        this.productsList = [];
    }

    get getSummaryCost() {
        let summaryCost = 0;
        for (let product of this.productsList) {
            summaryCost += product.price
        }
        return summaryCost
    }

    set addToCart(product) {
        this.productsList.push(product);
    }
}

module.exports = Cart;