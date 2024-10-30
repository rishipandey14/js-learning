// Primitive datatype (or you can get it by term as "Call by value")

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreVal = 100.3

const idLoggedIn = false
const outsideTemp = null

let userEmail;  // or  let userEmail = undefined;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)  // expected output -> false

const bigNumber = 23435364533231312n




// Non-Primitive Datatype ( Reference)

// Array, Objects, Functions


const heroes = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name : "rishi",
    age : 21,
}

const myFun = function(){
    console.log("Hello world!");
}


console.log(typeof bigNumber)
console.log(typeof myFun)
console.log(typeof heroes)
console.log(typeof id)




// ********************** MEMORY ********************

// Stack (Primitive) , Heap (Non-Primitive)

let myYoutubename = "Rishi.com"

let anothername = myYoutubename
anothername = "arpit.com"

console.log(myYoutubename);
console.log(anothername);



let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "rishi@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
// email same in both 

