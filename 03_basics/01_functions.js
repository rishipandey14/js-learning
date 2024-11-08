function sayMyName(){
    console.log("R");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("i");
}


// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }
function addTwoNumbers(num1, num2){
    return num1 + num2
}

addTwoNumbers(3, 4)
addTwoNumbers(3, "4")
addTwoNumbers(3, "a")

const res = addTwoNumbers(3, 5)

// console.log("Result: ", res)

function loginUserMessage(username = "sam"){
    if(!username){
        return "Please enter a valid username"
    }
    return `${username} just logged in`
}


// console.log(loginUserMessage())


// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(200))
// console.log(calculateCartPrice(200, 400, 500))
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200))
// console.log(calculateCartPrice(200, 400, 500, 2354, 4343))


const user = {
    username : "rishi",
    price : 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username: "sam",
    price : 353
})


const myNewArray = [200, 3453, 5343, 535, 433]

function returnSecondVal(getArray){
    return getArray[1]
}

// console.log(returnSecondVal(myNewArray))
console.log(returnSecondVal([2324, 353, 534, 242, 535, 423]))