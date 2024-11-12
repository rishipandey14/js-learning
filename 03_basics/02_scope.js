// global scope

// var c = 300
let a = 500


// block scope
if (true) {
    let a = 10
    const b = 20
    // console.log(a);   //block scope print
}

// console.log(a);
// console.log(b);

// console.log(a);  // global scope print



function one(){
    const username = "Rishi"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()


if (true) {
    const username = "rishipandey"
    if(username == "rishipandey"){
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website);
}
// console.log(username);




// ******************************* interesting *********************************

console.log(addone(5))

function addone(num){   // basic function
    return num + 1
}



console.log(addTwo(5))   // ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num){    // function / expression
    return num += 2
}


