// // 'use strict';

// // function calAge(birthYear) {
// //     const age = 2037 - birthYear;

// //     function printAge() {
// //         let outPut = `You are ${age}, born in ${birthYear}`;
// //         console.log(outPut);

// //         if (birthYear >= 1981 && birthYear <= 1996) {
// //             var millenial = true;
// //             const firstName = 'steven'
// //             const str = `lol, ${firstName}`
// //             console.log(str);

// //             function add(a,b) {
// //                 return a + b;
// //             }

// //             outPut = "new one";
// //         }
// //         // console.log(str);
// //         console.log(millenial);
// //         // console.log(add(2,3));
// //         console.log(outPut);
// //     }
// //     printAge();
// //     return age;
// // }

// // const firstName = 'jonas';
// // // console.log(age);
// // calAge(1991);

// // console.log('-----------------------------------');

// // // Hoisting and TDZ

// // // variables
// // console.log(me);
// // // console.log(job);
// // // console.log(year);

// // var me = 'Jonas';
// // let job = 'Teacher';
// // const year = 1991;

// // // Functions
// // console.log(addDecl(2,3));
// // // console.log(addExpr(2,3));
// // // console.log(addArrow(2,3));

// // function addDecl(a,b){
// //     return a + b;
// // }

// // const addExpr = function(a, b){
// //     return a + b;
// // }

// // var addArrow = (a,b) => a + b;

// // // Example

// // if (!products) deleteShippingCart();

// // var products = 10

// // function deleteShippingCart() {
// //     console.log('All products deleted!');
// // }

// // // This Keyword

// // console.log(this);

// // const calAge1 = function(birthYear) {
// //     console.log(2037 - birthYear);
// //     console.log(this);
// // }

// // calAge1(1991)

// // const calAgeArrow = birthYear => {
// //     console.log(2037 - birthYear);
// //     console.log(this);
// // }

// // calAgeArrow(1980)

// // const jonas = {
// //     year: 1991,
// //     calAge1: function() {
// //         console.log(this);
// //         console.log(2037 - this.year);
// //     }
// // }

// // jonas.calAge1();

// // const matilda = {
// //     year: 2017,
// // };

// // matilda.calAge1 = jonas.calAge1

// // matilda.calAge1();

// // var firstName = 'Matilda';

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     // const self = this
//     // const isMillenial = function () {
//     //     console.log(self);
//     //     console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     // const self = this
//     const isMillenial = () => {
//         console.log(this);
//         console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
//   },

//   greet: () => console.log((`Hey ${this.firstName}`)),
// };

// jonas.greet();
// jonas.calAge();

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', me);

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage', jessica);
console.log('After marriage', marriedJessica);


const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before marriage', jessica2);
console.log('After marriage', jessicaCopy);

jessicaCopy.family.push('Mary'),
jessicaCopy.family.push('John')

console.log('Before marriage', jessica2);
console.log('After marriage', jessicaCopy);
