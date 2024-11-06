// const score = 400

// const balance = Number(100)
// console.log(balance)
// console.log(typeof balance)

// coverting in string gives more access of properties and functions
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));    // decimal value 


// const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4));

// const hun = 1000000
// console.log(hun.toLocaleString('en-IN'));





// ****************************** MATHS  **********************************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 5, 7, 9, 2));
// console.log(Math.max(4, 5, 7, 9, 2));

console.log(Math.random());   // gives value between 0 and 1 i.e., 0.345 etc
console.log((Math.random()*10) + 1);  
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)