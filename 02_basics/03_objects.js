// singleton
// Object.create()


// object literals

const mySym = Symbol("key1")


const jsUser = {
    name: "Rishi",
    "full name" : "Rishi Pandey",
    [mySym] : "myKey1",
    age : 20,
    location : "Pratapgarh",
    email : "work.qwerty@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])


jsUser.email = "krghqieik@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "hehe@gmail.com"
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello js User");
}
jsUser.greetingTwo = function(){
    console.log(`Hello js User - ${this.name}`);
}

jsUser.greeting();
jsUser.greetingTwo();