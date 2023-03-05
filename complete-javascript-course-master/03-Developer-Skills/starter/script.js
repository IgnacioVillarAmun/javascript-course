// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Coding Challenge #1

// const temperatures = [17, 21, 23];
const temperatures = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
    let str = '';
    for (let i = 0; i < arr.length; i++){
        str += `${arr[i]}°C in ${i+1} days... `;
    }
    return str;
} 
console.log( '... ' + printForecast(temperatures));
