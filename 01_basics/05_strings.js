const name = "rishi"
const repoCount = 14

// console.log(name + repoCount + " value");


// console.log(`Hello my anme is ${name} and my repo count is ${repoCount}`);

const gameName = String('buri-buri-zaemon');
// console.log(gameName);
// console.log(typeof gameName);


// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(6));
// console.log(gameName.indexOf('z'));

const newString = gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(-6);
console.log(anotherString);

const newStringOne = "          rishi    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rishi.com/rishi%20pandey"
console.log(url.replace('%20', '-'));

console.log(url.includes('rishi'));
console.log(url.includes('arpit'));


console.log(gameName.split('-'))

