'use strict';

import Product from './models/product';
import Cart from './models/cart';
import Order from './models/order';

const constants = {
    ORDER_APPROVED: "approved",
    ORDER_PENDING: "pending"
};

const createCart = (customerName) => {
    return new Cart(generateId(), customerName)
};

const createOrder = (cart) => {
    return new Order(generateId(), cart.id, constants.ORDER_PENDING, cart.getSummaryCost)
};

const resolveOrder = (order, cash) => {
    if (order.summaryPrice<=cash) {
        order.status = constants.ORDER_APPROVED;
        return "Order approved";
    } else {
        return "Insufficient funds";
    }
};


const generateId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
};