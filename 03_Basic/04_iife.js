 //Immediately Invoked Function Expressions (IIFE)

//  Simply We use IIFE because sometimes we could find polution on the reason of Global Scope then we use IIFE.

// IIFE Syntax is --- (function declaration)(calling function)

 (function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
 })();      //After "()" we use ";" end of first code and then start second code
// Similarly as --> chai()

 ((name) =>{
    //unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
 })("Sajju")
 // similarlly as--> chai("Sajju")


// Important Note :-  when we use two IIFE the we must write a semicolon";" end of the first IIFE 
