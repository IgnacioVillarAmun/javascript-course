// Importing Module
// import { addToCart, totalPrice as price, qty } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, qty);

// import shoppingCart from './shoppingCart';

// console.log('Importing Module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);
// import add, { addToCart, totalPrice as price, qty } from './shoppingCart.js';

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 2);
add('apples', 2);

console.log(cart);

// // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// // const data = await res.json();
// // console.log(data);

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// console.log(lastPost);

// // Not very clean
// // lastPost.then(res => console.log(res));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to the cart (shipping cost is ${shippingCost})`
//     );
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 2);

// console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost);

// // Export
// export.addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(
//     `${quantity} ${product} added to the cart (shipping cost is ${shippingCost})`
//   );
// };

// // Import
// const {addToCart} = require('./shoppingCart.js')

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;

// console.log(stateClone);
// console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}
const jonas = new Person('jonas');

console.log('Jonas' ?? null);
console.log('hello');
console.log('asdasd');

import 'core-js/stable';

import 'regenerator-runtime/runtime';
