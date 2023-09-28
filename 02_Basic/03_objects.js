//Singleton object  :- when you use constructor method(Syntax : "Object.create" ) thealways make a singleton object

// Object literals
const mySym =Symbol("hello"); //to make a symbole that name is Hello and is it is write down in object like "[mySym]"

//interviews Questions : to make a symbole and to put in object keys Example :- [Symbol(hello)]: 'key1'
const mydate =new Date();
const jsUser ={
    name:"SAJAL" ,    // name treate as String by javascript
    "fullname":"SAJAL TIWARI",  //it is only access by objectname["fullname"]
    age:19,
    location:"Kanpur",
    [mySym]:"key1",    
    email:"Sajjupandit786@gmail.com",
    lastLogin: [mydate.toTimeString()],
}
console.log(typeof jsUser["lastLogin"]);
// console.table(jsUser);
// console.log(jsUser["email"]);
// console.log(jsUser.email);
// console.log(jsUser["fullname"]);
//console.log(jsUser[mySym]);   // Value
//console.log(typeof mySym);   // Symbol

//Syntax :-  Object.freeze(object_name) :-- (A frozen object can no longer be changed) and if you want to not hange the value of an object( any  Update in object)the we use it.
jsUser.email= "SajjuthetradingLife@yahoo.com";
// console.log("Email:",jsUser["email"]);
// Object.freeze(jsUser);
jsUser.email ="hellobrother@gmail.com"
// console.log("Afterfreeze_Email:",jsUser["email"]);
// console.table(jsUser);


//How to write the function in object
 jsUser.greeting =function(){
    console.log(`hello Brother Movie .and Actor Name is ${[this.fullname]}`);
 };

 console.log(jsUser.greeting);    //o/p:- [Function (anonymous)]
 console.log(jsUser["greeting"]);  // [Function (anonymous)]
 console.log(jsUser.greeting());


