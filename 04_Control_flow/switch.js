// switch (key) {
//     case value1:

//         break;

//      default: 
//         break;
// }   

// const month = 3;

// switch (month) {
//       case 1:
//         console.log("January");
//         break;
//       case 2:
//         console.log("february");
//         break;
//       case 3:
//         console.log("March");
//         break;
//       case 4:
//         console.log("April");
//         break;

// default:
//     console.log("default case match");
// break;
// }

//////////////////// TRUTHY ////////////////

const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN


// truthy values
// "0", " ", [], {}, function(){}, 1, -1, 3.14, -3.14, Infinity, -Infinity

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }



                   // const emptyObj = {}

// if (object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }

 // Nullish Coalescing Operator (??): null and undefined

let vall;
// vall = 5 ?? 10
// vall = null ?? 10
// vall = undefined ?? 10
vall = null ?? 10 ?? 20


console.log(vall);
 
// ternary operator

// condition ? true : false

const ideTeaPrice = 100;

ideTeaPrice  <= 80 ? console.log("less than 80") : console.log("more than 80");




















