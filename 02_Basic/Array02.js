const marvel_heroes =["Thor","pokemon","Doremon","Chota_Bheem"];
const bollywood_heros =["Salmaan","Sunny","Hritik","Bobby"]

// marvel_heroes.push(bollywood_heros);
//console.log(marvel_heroes);  // output : 
// output :
/*   [ 'Thor',
    'pokemon',
    'Doremon',
    'Chota_Bheem',
    [ 'Salmaan', 'Sunny', 'Hritik', 'Bobby' ]    :--  this array is like a data
  ]
  */

  const Csum = marvel_heroes.concat(bollywood_heros);
//   console.table(Csum);


// 2nd Method (Spread Method) hints for remember : take a Glass and drop it 

const spreadM =[...marvel_heroes,...bollywood_heros];
// console.log(spreadM);

//3rd problem : array of array of array

const another_array = [1,2,5,[4,6,5],89,2,[5,4,3,[6,8,4,2,[91,34,56,32]]]];
// console.log(another_array.flat(Infinity));   // to put the value of Depth

// 4th problem   if you fetch the data from web pages the you want to convert Array use "Array.from" and if you want to know this data is array or not the we use : "Array.isArray"

console.log(Array.isArray("SAJAL"));
console.log(Array.isArray(['SAJAL']));
console.log(Array.from("SAJAL"));
console.log(Array.from({name:'SAJAL'})); //Interested case  it return empty objec.and when you ake a project then you define only one use either key or values
