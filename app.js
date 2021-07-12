// Setting a variable for my age
const myAge = 36;
// Setting a variable to depict an early year
let earlyYears = 2;
earlyYears = earlyYears * 10.5;
// Variable to depict a later year
let laterYears = myAge - 2;
// calculate the dog years accounted for by later years 
laterYears *= 4;
//console.log(earlyYears);
//console.log(laterYears);
// variable for age in dog years
const myAgeInDogYears = earlyYears + laterYears;
// Variable for personal name
const myName = 'Reginald'.toLowerCase();
// output
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is 
${myAgeInDogYears} years old in dog years`);