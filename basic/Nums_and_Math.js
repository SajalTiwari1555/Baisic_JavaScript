const Score =400;
// console.log(Score);

const balance = new Number(500);
// console.log(balance);

// console.log(balance.toString().length)
// console.log(typeof balance.toString());
// console.log(balance.toFixed(2));        //500.00

const otherNumber = 123.89543;
// console.log(otherNumber.toPrecision(3));  // round figure and add 1

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));



// *************************Maths**********************************

console.log(Math);
// console.log(Math.abs(-4)); // to convert to -ive sign to +ive sign
// console.log(Math.round(4.8));
// console.log(Math.ceil(4.6));
// console.log(Math.floor(4.8));
// console.log(Math.min(6,4,8.9,1.2));
// console.log(Math.max(18,45,67,89));

console.log(Math.random());   //to randomly generate the number between 0 and 1
console.log(Math.floor((Math.random()*10))+1);   


// When given value Max and min value in betwwen random number
const max = 20;
const min =10;
console.log((Math.floor(Math.random()*(max - min + 1)+min)));

