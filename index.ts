import products from "./products";

interface Product {
  name: string;
  price: string;
  preOrder: string;
}
interface ProductsList extends Array<Product> {}

const getInfo = (productName: string)=> {
  let product = products.find(({ name }) => name === productName);
  if (product === undefined) {
    return "not found";
  }
  if (Boolean(product.preOrder) === true) {
    console.log(`we’ll send you a message when ${product.name} on the way`);
  }

  let shipping: number;
  let taxPercent: number;
  let taxTotal: number;
  let total: number;
  let shippingAddress: string = "New York city 20av, 10str f 12";

  if (Number(product.price) > 25) {
    shipping = 0;
    console.log(`we provide free shipping for ${product.name} `);
  } else {
    shipping = 5;
    console.log(` the value of shipping ${product.name} is ${shipping}$`);
  }
  if (shippingAddress.match("New York")) {
    taxPercent = 0.1;
  } else {
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