// DATE 

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2020, 0, 23)
// console .log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2025, 9, 8, 5, 3)
// console .log(myCreatedDate.toLocaleString());
 
let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// let myCreatedDate = new Date(myTimeStamp)
// console .log(myCreatedDate.toLocaleString()); 
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday: "long",
})








