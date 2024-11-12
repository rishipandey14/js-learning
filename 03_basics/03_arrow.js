const user = {
    username : "rishi",
    price : 999,
    age : 18,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        // output :
            // {
            //     username: 'rishi',
            //     price: 999,
            //     age: 18,
            //     welcomeMessage: [Function: welcomeMessage]
            // }
    }
}


// user.welcomeMessage()
// user.username = "arpit"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "rishi69"
//     console.log(this.username);    // output -> undefined 
// }

// chai()



// arrow function
const chai = () => {
    let username = "rishi"
    console.log(this.username)   // output  -> undefined
}

// chai()



// const addtwo = (num1, num2) => {
//     return num1 + num2
// }


// const addtwo = (num1, num2) => num1 + num2

// const addtwo = (num1, num2) => (num1 + num2)

const addtwo = (num1, num2) => ({username : "rishi"})

console.log(addtwo(3, 4))



const myArray = [2, 3, 4, 5, 6]

myArray.forEach()