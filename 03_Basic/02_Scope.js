
// { } ------> Block SCOPE and other area(it means out side the block scope) is called Global Scope
 
// var c =700;  
let a =400;
if(true){
    
    let a = 10;
    const b=25;
    var c =98;
    // console.log("INNER = ",a);
}



// console.log((a));
// console.log(b);
// console.log(c);

// Nested Function for Scope 

function one(){
    const username ="Sajju"
    function two(){
        const website ="Youtube"
        // console.log(username);
    }
    // console.log(website);   //Error occured , because can't access value  of two() website is a block scope variable declaration
    two()
}
one()

// one() is parent and two() is a child and we know that child function can access the value of parent function but parent function can't access the value of child function

//Nested-If for Scope understanding concepts

if(true){
    const username = "Sajal"
    if(username ==="Sajal"){
        const website ="SajjuDada.com"
        // console.log(website+" "+ username);
    }
  // console.log(website);   //Error --- do not access out side the block
}
// console.log(username);

// *************************Interesting*********************************************

console.log(addOne(5))
function addOne(num){
    return num+1
}
// addOne(5)   //we could use  before the Declaration 

// console.log(addTwo(7)); ///there are some error

const addTwo = function(num){       //addtwo is a function but also called a Variable. In javascript Variable is more powerfull that holds the functions,Array,JSON file,Manymore.

    return num +2;
}
addTwo(7)     //we could not use  before the Declaration because this is a variable

// hoisting in javascript   (go through)