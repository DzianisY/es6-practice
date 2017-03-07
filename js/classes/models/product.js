'use strict';

class Product {

    constructor(name, price, shortDescr) {
        this.name = name;
        this.price = price;
        this.shortDescr = shortDescr;
    }

    get getInfo() {
        return ({
            Name: this.name,
            Price: this.price,
            Description: this.shortDescr
        });
    }
}

module.exports = Product;