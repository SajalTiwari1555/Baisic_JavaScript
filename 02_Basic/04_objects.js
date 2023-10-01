//Singleton object using consructor method

// const tinderUser = new Object();  //singleton object   (not any difference of line 3 and line 5)
//OR
const tinderUser ={}; //Non-singleton object

// to put the value in object externally
tinderUser.id ="123abc";
tinderUser.name="Sajju bhai";
tinderUser.isLoggedIn = false;

// console.log(tinderUser)

//2nd problem................(object to object to object and how to access it)

const other_Object = new Object(
    {
       name:"Papaji",
       Id:786,
      // Address: ["Kanpur","Lucknow","Punjab"],
      punjabi_Song:{
        name:"Teri_meri kahani",
        song_id:"456",
       // singer:["Bagal wale bhaiya","Bagal Wali bhabhi","Gande muh wale uncleji","others"],
        instruments:{
            1:"Musical note",
            2:"Trombone",
            3:"Saxophone",
            4: "Trumpet",
            5:  "Tuba",
            6:  "French horn",
            7:  "Record",
            8:  "Clarinet",
        }

       }
    }
);

// console.log(other_Object);
// console.log(typeof other_Object.punjabi_Song);
// console.log(other_Object.punjabi_Song["singer"])  OR  console.log(other_Object.punjabi_Song.singer)
// console.log(other_Object.punjabi_Song.instruments);
// console.log(other_Object.punjabi_Song);

const regularUser ={
    email:"pappukabadi@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Sajju",
            lastname:"Dada",
        }
    }
}


// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname?.userfullname.firstname);   //? when we use then donot define fullname in object

//03 problem :- merge/combine the objects
const obj1 ={1:"a",2:"b"};
const obj2={3:"a",4:"b"};
// const obj3 ={ obj1,obj2 }
// console.log("🍔",obj3); 

// const obj3 = Object.assign({},obj1,obj2)   //empty object is a target  and other objects is source   
// console.log(obj3)
//  OR(2nd method :using Spread (drop-Glass example))
const obj3 ={...obj1,...obj2};
// console.log(obj3);

// 4th problem  :-- array of object

const user =[
    {
        id:34,
        email:"abc@gmail.com",
    },
    {
        id:35,
        email:"hello@yahoo.com",
    },
    {
        id:67,
        email:"sajjudada@gmail.com",
    }
]

// console.log(user[1].email);
try{
// console.log(user[4]["email"]);
}catch(err){
    // console.log(err.message);
}

//5th problem :-- access the key/values of object
// console.table(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));  // minimum use in js
// console.log(tinderUser.hasOwnProperty("id")); //to return a boolean value

// ....................DeStructured of any values  And JSON APIs.............

const container ={
    name :"Sajju",
    Id :42,
    job_Post:"Web Dev",
}
console.log(container.job_Post);   //that is simple access the value of objects
console.log(container["job_Post"])  

const {job_Post : jpost} = container    
// console.log(job_Post)
console.log(jpost)

// ....................we are talking about APIs (small Intro Here )  JSON Format..............
//json is like an object, not an object
{
   " name"="Sajju"
   " coursename" ="Js_tutorial"
    "price"= 999
}
   //json is also formatted in array
[
    {},
    {},
    {}
]


