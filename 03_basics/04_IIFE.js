// function chai() {
//     console.log("DB");
// }

// chai()




// Immediately Invoked Function Expression (IIFE)
// IIFEs prevent pollution of the global JS scope. In a traditional 
// function, if you create a variable within the function, it is accessible 
// in the global object. If you define a variable in an IIFE, it is accessible 
// only directly within the function.

(function chai() {
    // names IIFE
    console.log("DB connected");
}) ();

( (name) => {
    // unnamed IIFE
    console.log(`db connected two ${name}`)
}) ('rishi');