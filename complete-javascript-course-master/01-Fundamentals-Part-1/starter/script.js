//Values and Variable

// let country = "idaho";
// let continent = 'america';
const country = "United State";
const continent = 'america';
let population = 10;

console.log(country);
console.log(continent);
console.log(population);

//Data types

const isIsland = false;
// let language;
let language;

console.log(isIsland);
console.log(language);

//let, const and var
language = "English";

//Basic Operators

console.log(population / 2);
population++;
console.log(population);

const finland = 60;
console.log(population > finland);

const avgPopulation = 33
console.log(population < avgPopulation);

const description =  'Portugal is in Europe, and its 11 million people speak portuguese'


// Coding Challenge #1

// TEST 1
let markMass = 78;
let markHeight = 1.69; 
let johnMass = 92; 
let johnHeight = 1.95; 

let markBMI = (markMass / markHeight ** 2).toFixed(2);
let johnBMI = (johnMass / johnHeight ** 2).toFixed(2);
let markHigherMBI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherMBI);


// TEST 2
markMass = 95;
markHeight = 1.88; 
johnMass = 85; 
johnHeight = 1.76; 

markBMI = (markMass / markHeight ** 2).toFixed(2);
johnBMI = (johnMass / johnHeight ** 2).toFixed(2);
markHigherMBI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherMBI);


//Strings and Template Literals

const newDescription = `${country} is in ${continent}, an its ${population} millions people speak ${language}`;
console.log(newDescription);

// Taking Decisions: if / else Statements

const highPopulation = 33

if (population >= highPopulation){
      console.log(`${country}'s population is above average`)
} else{
      const difference = highPopulation - population;
      console.log(`${country}'s population is ${difference} millions below average`);
}

// Coding Challenge #2

if (markBMI > johnBMI){
      console.log(`Mark's BMI (${markBMI}) is higher then John's BMI(${johnBMI})!`)
}else{
      console.log(`John's BMI (${johnBMI}) is higher then Mark's BMI(${markBMI})!`)
}

// Type Conversion and Coercion

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);


// Equality Operators: == vs. ===

const numNeighbours = Number(('How many neighbour countries does your country have?')); //prompt

if (numNeighbours === 1) console.log('Only 1 border!');
else if (numNeighbours > 1) console.log('More than 1 border');
else console.log('No borders');

// Logical Operators

if (language === 'English' && population < 50 && !isIsland) console.log(('You should live in Portugal :)'));
else console.log('Portugal does not meet your criteria :(');

// Coding Challenge #3

// TEST 1

const avgDolphinsScore = ((97 + 112 + 80) / 3).toFixed(2); 
const avgKoalasScore = ((109 + 95 + 50) / 3).toFixed(2); 

console.log(avgDolphinsScore, avgKoalasScore);

if (avgDolphinsScore > avgKoalasScore) console.log("Dolphins wins");
else if (avgDolphinsScore < avgKoalasScore) console.log('Koalas wins');
else if (avgDolphinsScore === avgKoalasScore) console.log('It is a draw');

// TEST 2
const minScore = 100;

if (avgDolphinsScore > avgKoalasScore && avgDolphinsScore >= minScore )console.log("Dolphins wins");
else if ( avgKoalasScore> avgDolphinsScore && avgKoalasScore >= minScore ) console.log('Koalas wins');
else if (avgDolphinsScore  === avgKoalasScore) console.log('It is a draw');

// TEST 3

if (avgDolphinsScore > avgKoalasScore && avgDolphinsScore >= minScore )console.log("Dolphins wins");
else if ( avgKoalasScore> avgDolphinsScore && avgKoalasScore >= minScore ) console.log('Koalas wins');
else if (avgDolphinsScore  === avgKoalasScore && avgDolphinsScore >= minScore && avgKoalasScore >= minScore) console.log('It is a draw');
else console.log('No one wins');

// The switch Statement

const language1 = 'hindi';

switch(language1) {
      case 'mandarin':
            console.log('MOST number of native speakers!');
            break;
      case 'spanish':
            console.log('2nd place in number of native speakers');
            break;
      case 'english':
            console.log('3rd place');
            break;
      case 'hindi':
            console.log('Number 4');
            break;
      case 'arabic':
            console.log('5th most spoken language');
            break;
      default:
            console.log( 'Great language too :D');
            break;
}

// The Conditional (Ternary) Operator

console.log(`${country}'s population is ${population >= 13 ? 'above' : 'below'} average`);


// Coding Challenge #3

const bill = 40;
const tip = (bill >= 50 && bill <= 300 ) ? (bill * 0.15) : (bill * 0.20);
console.log(`This bill was $${bill}, the tip was $${tip}, and the total value $${bill + tip}`)