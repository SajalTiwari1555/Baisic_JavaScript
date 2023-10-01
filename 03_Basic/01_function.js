// 1st

function printName(){
console.log("S")
console.log("A")
console.log("J")
console.log("J")
console.log("U")    
}

// printName();

//2nd
// function sumTwoNumber(number1,number2){
// console.log(number1+number2);
// }
// let result =sumTwoNumber(98,45);     //this is wrong way So we use return keyword in function body
// console.log(result)

//3rd

function sumTwoNumber(number1,number2){
  // let result= number1+number2
  // return result;

//   IInd Method
  return number1+number2
    }
//    const result =sumTwoNumber(56,45)    //this result variable is different from inner function result
//    console.log("Result :",result)

//4th
function loginUserMessage(username ="sam"){
    if(!username){
        console.log("Please enter the User Name");
        return      // after return is not exected other line in function
    }
    return `${username} just logged IN`
}
// console.log(loginUserMessage("sajju"))

//  console.log(loginUserMessage())

//5th problem ---> when we use Ecommerce website the user multiple items puchased then how to stored in card?

// function calculateCartPrice(...num){    //...num is a rest operator
//     return num
// }
// // console.log(calculateCartPrice(340))
// console.log(calculateCartPrice(340,567,456,345,765,789))

function calculateCartPrice(val1,val2,val3,...num){    //...num is a rest operator  and starting three arguments values passed in val1,val2,val3 respectively
    return num
}
// console.log(calculateCartPrice(340))
// console.log(calculateCartPrice(340,567,456,345,765,789))

// 6th problem ---> to pass/access the object in fuction 
user={
    name:"Sajju",
    course:"Mca",
}
function handleObject(anyobject){
    return `Username is ${anyobject.name} and Course is ${anyobject.course}`
}
//  console.log(handleObject(user))
// console.log(handleObject(Student={
//     name:"Amitabh",
//     Id:42,
//     course:"BBA"
// }))

// 7th problem ---> to pass/access the Array in fuction 
const myArray = new Array(456,432,567,234,89,"Hello.php",true,76.4)
function handleArray(anyarray){
    console.log(` Array is a : ${anyarray[1]}`)

}
handleArray(myArray)