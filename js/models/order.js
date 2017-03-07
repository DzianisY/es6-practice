'use strict';

export default class Order {

    constructor(id, cartId, orderStatus, summaryPrice) {
        this.id = id;
        this.cartId = cartId;
        this.orderStatus = orderStatus;
        this.summaryPrice = summaryPrice;
    }

}

module.exports = Order;
