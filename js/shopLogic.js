'use strict';

import Product from './models/product';
import Cart from './models/cart';
import Order from './models/order';

const constants = {
    ORDER_APPROVED: "approved",
    ORDER_PENDING: "pending"
};

let createCart = (customerName) => {
    return new Cart(generateId(), customerName)
};

let createOrder = (cart) => {
    return new Order(generateId(), cart.id, constants.ORDER_PENDING, cart.getSummaryCost)
};

let resolveOrder = (order, cash) => {
    if (order.summaryPrice<=cash) {
        order.status = constants.ORDER_APPROVED;
        return "Order approved";
    } else {
        return "Insufficient funds";
    }
};


let generateId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
};