function sayMyName() {
    console.log("s");
    console.log("a");
    console.log("c");
    console.log("h");
    console.log("i");
    console.log("n");
}
  // sayMyName()
    
// function addTwoNumbers(number1, number2){
    
//     console.log(number1 + number2);  
// }

function addTwoNumbers(number1, number2){
    // let result =  number1 + number2;  
    // return result;

    return number1 + number2;
}

const result = addTwoNumbers(3, 5)
// console.log( "result:", result);

function loginUserMessage(username){
  if(username === undefined){
    console.log("please enter a username");
    return
  }
  
    return ` ${username} just logged in`
}
// console.log(loginUserMessage("sachin"));
// console.log(loginUserMessage("sachin"));

function calculateCartPrice(val1,val2, ...num1){
     return num1
}

  // console.log(calculateCartPrice(200, 400, 500,2000));

const user = {
    username: "sachin",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "sachin",
    price: 199
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 300, 500, 700]));




