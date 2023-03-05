"use strict";

// Functions

function describeCountry(country, population, capitalCity) {
  const string = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return string;
}

console.log(describeCountry("Finland", 6, "Helsinki"));
console.log(describeCountry("Argentina", 8, "Buenos Aires"));
console.log(describeCountry("Chile", 7, "Santiago"));

// Function Declarations vs. Expressions

const wordPopulation = 7900;
function percentageOfWorld1(population) {
  return ((population / wordPopulation) * 100).toFixed(2);
}

console.log(percentageOfWorld1(1441));

const percentageOfWorld2 = function (population) {
  return ((population / wordPopulation) * 100).toFixed(2);
};

console.log(percentageOfWorld2(1441));

// Arrow Functions

const percentageOfWorld3 = (population) =>
  ((population / wordPopulation) * 100).toFixed(2);

console.log(percentageOfWorld3(1441));

// Functions Calling Other Functions

function describePopulation(country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )} of the world.`;
}

console.log(describePopulation("EEUU", 100));

// Coding Challenge #1

const calcAverage = (value, value1, value2) =>
  ((value + value1 + value2) / 3).toFixed(0);

// TEST 1
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphins, avgKoalas);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins wins (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Dolphins wins (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log("No team wins");
  }
}

checkWinner(avgDolphins, avgKoalas);

// TEST 2
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolphins, avgKoalas);

checkWinner(avgDolphins, avgKoalas);

// Introduction to Arrays

const populations = [10, 23, 57, 123];
console.log(populations.length === 4);
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[populations.length - 1]),
];
console.log(percentages);

// Basic Array Operations (Methods)

const neighbours = ['Madison', 'Joaning', 'Peterson']

neighbours.push('Utopia')
console.log(neighbours);

neighbours.pop('Utopia')
console.log(neighbours);

if(!neighbours.includes('Germany')){
    console.log('Probably not a central European country :D');
}

neighbours[neighbours.indexOf('Peterson')] = 'Republic of Sweden'
console.log(neighbours);

// Coding Challenge #2

function calcTip(value) {
    return value >= 50 && value <= 300 ? value*0.15 : value*0.2
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]]

console.log(tips);
console.log(total);

// Introduction to Objects

const myCountry= {
    country : 'Argentina',
    capital : 'Buenos Aires',
    language : 'Spanish',
    population : 10,
    neighbours : ['Madison', 'Joaning', 'Peterson'],
    checkIsland: function() {
      this.isIsland = this.neighbours === 0 ? true : false;
      return this.isIsland;
    },
    describes: function() {
      return `${this.country} has ${this.population} millions ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
    }
}

console.log(myCountry.capital);

// Challenge

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriverLicense: true,
  calcAge: function() {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function() {
    return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriverLicense === true ? "a" : "no"} driver's license`
  }
};
// console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

// Dot vs. Bracket Notation
console.log(`${myCountry.country} has ${myCountry.population} millions ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries
and a capital called ${myCountry.capital}.`);


// Challenge 

// console.log(jonas.calcAge());
console.log(jonas.getSummary());
console.log(jonas.age);

// Object Methods

console.log(myCountry.describes());
console.log(myCountry.checkIsland());

// Coding Challenge #3

const mark = {
  firstName: 'Mark',
  lastName: 'Miller',
  mass: 78,
  height: 1.69,
  calBMI : function() {
    this.BMI = (this.mass / (this.height ** 2)).toFixed(2);
    return this.BMI;
  }
}

const john = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 92,
  height: 1.95,
  calBMI : function() {
    this.BMI = (this.mass / (this.height ** 2)).toFixed(2);
    return this.BMI;
  }
}

if (john.calBMI() > mark.calBMI()) {
  console.log(`${john.firstName}'s BMI ${john.calBMI()} is higher than ${mark.firstName}'s BMI ${mark.calBMI()}`);
} else if (mark.calBMI() > john.calBMI()) {
  console.log(`${mark.firstName}'s BMI ${mark.calBMI()} is higher than ${john.firstName}'s BMI ${john.calBMI()}`);
} else{
  console.log("Both MBI's are equal");
}

// Iteration: The for Loop

for (let vote = 1; vote <= 50; vote++){
  console.log(`Voter number ${vote} is currently voting`);
}

// Looping Arrays, Breaking and Continuing

const populations2 = [10, 1441, 332, 83];
const percentages2 = []

for (let i = 0; i < populations2.length; i++) {
  percentages2.push(percentageOfWorld1(populations2[i]));
}
console.log(percentages2);

// Looping Backwards and Loops in Loops

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++){
      console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    }
}

// The while Loop
// console.log('hello');
const percentages3 =[];
let num = 0;
while (num < populations2.length) {
  percentages3.push(percentageOfWorld1(populations2[num]));
  num ++;
}

console.log(percentages3);

// Coding Challenge #4

const bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips1 = [];
const totals = [];


for (let i = 0; i < bills1.length; i++) {
  tips1.push(calcTip(bills1[i]));
  totals.push(bills1[i] +tips1[i]);
}

console.log(tips1);
console.log(totals);

function calcAverage1(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // console.log(totals[i]);
      sum += arr[i];
  }
  return sum / totals.length;

}

console.log(calcAverage1(totals));