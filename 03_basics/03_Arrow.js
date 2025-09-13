const user = {
    username: "sachin",
    price: 20,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
       console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "messi"
// user.welcomeMessage()

//console.log(this);

// function hello   () {
//     let username = "sachin"
//     console.log(this.username);
// }
//    Chai()

//  const chai = function(){
//      let username = "sachin"     
//       console.log(this.username);
//  }

const chai = () =>{
    let username = "sachin"
     console.log(this.username)
}
    //  chai()

//const addTwo = (num1, num2) =>  {
//  return num1 + num2
//}

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  ( num1 + num2 )


const addTwo = (num1, num2,) => {{username:"hitesh"}}

console.log(addTwo(5, 10));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()












