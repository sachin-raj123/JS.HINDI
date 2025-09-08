// primitive data types

// 7 types of primitive: string, number, boolearn, null,
                        // undefined, symbol, BigInt

    const score = 100
    const scoreValue = 100.5

    const isLoggedIn = false
    const outsideTemp = null
    let userEmail;                    

    const id = Symbol('123')
    const anotherId = Symbol('123')

    console.log(id === anotherId);
// const bigNumber = 1234567890123456789012345678901234567890n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
 let myObj = {
    name: "sachin",
    age: 22,
}

   const myFunction = function(){
            console.log("Hello world");
        }
     
console.log(typeof anotherId);

 // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
// stack  (primitive), heap (non-primitive)

let myYoutubename = "sachinrajdotcom"

let anothername = myYoutubename
anothername = "vipergaming"

console.log(myYoutubename);
console.log(anothername);

 let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
 }
       let userTwo = userOne
       userTwo.email = "sachin@google.com"
         console.log(userOne.email );  
            console.log(userTwo.email);



















































