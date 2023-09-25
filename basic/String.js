const name = "Sajju";
const data = 50;
// console.log(name + data +"Value");       // this is bad practice
console.log(`the person name is ${name.toUpperCase()} and the value of the data ${data} `);


const Name = "Normal"     ///  Normal Way to initialize  string
const container = new String("Parameter");  // this is object ,not an array      // this is way to recommanded to initialize string  
//  console.log(container);
// console.log(container[0]);
// console.log(container.__proto__);    // output :- {}

// console.log(container.toUpperCase());

// console.log(container.charAt(4));

// console.log(container.indexOf(`a`));    // if doesn't exist then returns -1


const gaming = container.substring(0,6)
// console.log(gaming);

// const pName = container.slice(-4,10)
const pName = container.slice(7,9)
// console.log(pName.concat("hello"));
console.log(pName)
 
// console.log(typeof container);

const game = new String("  SAJAL  ");
console.log(game);
console.log(game.trim());

const url = "https://Sajjuthetradinglife.com";
console.log(url.replace("Sajju","BMT"));

const data1 = "hello bhaiyaoh aur bhaheno !how Are You !"
console.log(data1.includes(`h `));