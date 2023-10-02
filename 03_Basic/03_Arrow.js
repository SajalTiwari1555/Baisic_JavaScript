const user ={
    username :"Sajju",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to website`);   //  this-----> refer to current context/value
        console.log(this);
    }
}

// user.welcomeMessage()
// // user["username"]="Sam"
// user.username="Sunny_Paji"
// user.welcomeMessage()
// console.log(this);    //In node Environment "this" can return a empty object "{}"   and In Browser "this" can return window object because window is a global object in browser

// function chai(){
//     let username ="sajal"

// // console.log(this);   //here is not return a empty object Besides other something result

//     console.log(this.username);  // donot find result because this keyword is used in object but there is a function
// }
// chai();


// const chai = function(){
//     let username ="hitesh"
//      console.log(this);   //here is not return a empty object Besides other something result
//     console.log(this.username);
// }
// chai();

const chai = () => {
 let username ="Sajal"

 console.log(this.username)   //same result undefined same as above function result but we use "console.log(this)" then result is "Empty Object" not a global object when we use above functions same syntax then results is returns a Global Object.
console.log(this);
}
// chai()

// ........................Arrow Functions.............
 
//Explicit return (for multiple line) and when we use "{...}" then compulsory use of return Keyword
// const addTwo = (num1,num2) => {
//   return num1 +num2
// }
// console.log(addTwo(45,67));

// Implicit return (for Single line of code return only)
// const addTwo = (num1,num2) => num1 +num2
  
//   console.log(addTwo(45,88));

//we can use "(.....)" for returning object in single line of code and some operations

// 1.
// const addTwo = (num1,num2) =>( num1 +num2)
  
//   console.log(addTwo(34,88));

// 2.
const addTwo = (num1,num2) =>( user2 = {
    username:"sajju_Developer"
})
  
//   console.log(addTwo());
//   console.log(typeof user);


