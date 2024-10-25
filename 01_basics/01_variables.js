const accountId = 144553
let accountEmail = "qwerty@gmail.com"
var accountPassword = "1234"
accountCity = "srinagar"
let accountState;

// accountId = 2   not allowed to alter/change the const variables

accountEmail = "asdfg@gmai.com"
accountPassword = "12345678"
accountCity = "prayagraj"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

