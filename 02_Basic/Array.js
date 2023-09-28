//Array

// const myArray =[0,3,5,7,4];
// myArray.push(45,67,45,89,98);
// const myHeros = ["Sajal","Sajju"];
// console.log(myArray);
// console.log(myArray[3]);
// console.log(typeof myHeros);

// Array Method
const MyArr2 =new Array(1,2,3,4,5,6,7,8);
// MyArr2.push(8);
// MyArr2.push(78);
// MyArr2.push(79);
// MyArr2.pop();

// MyArr2.unshift(87);
// MyArr2.shift()
// console.log(MyArr2);

console.log(MyArr2.includes(5));     //returns boolean value
console.log(MyArr2.indexOf(5));       //index value returns

console.log("A",MyArr2);
const mineArr1= MyArr2.slice(1,5);
console.log(" ",mineArr1);

console.log("B",MyArr2);
const mineArr2 = MyArr2.splice(1,5);
console.log(mineArr2);
console.log("C",MyArr2);

