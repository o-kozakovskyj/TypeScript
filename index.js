"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("./products");
const getInfo = (productName) => {
    let product = products_1.default.find(({ name }) => name === productName);
    if (product === undefined) {
        return "not found";
    }
    if (Boolean(product.preOrder) === true) {
        console.log(`we’ll send you a message when ${product.name} on the way`);
    }
    let shipping;
    let taxPercent;
    let taxTotal;
    let total;
    let shippingAddress = "New York city 20av, 10str f 12";
    if (Number(product.price) > 25) {
        shipping = 0;
        console.log(`we provide free shipping for ${product.name} `);
    }
    else {
        shipping = 5;
        console.log(` the value of shipping ${product.name} is ${shipping}$`);
    }
    if (shippingAddress.match("New York")) {
        taxPercent = 0.1;
    }
    else {
        taxPercent = 0.05;
    }
    taxTotal = Number(product.price) * taxPercent;
    total = taxTotal + Number(product.price) + shipping;
    console.log("product data:");
    console.group();
    console.log("Product name :", product.name);
    console.log("Shipping address :", shippingAddress);
    console.log("Price of the product :", Number(product.price), "$");
    console.log("Tax total :", taxTotal, "$");
    console.log("Shipping :", shipping, "$");
    console.log("Total amount :", total, "$");
    console.groupEnd();
};
getInfo('tote bag');
