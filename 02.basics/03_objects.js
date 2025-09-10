// singleton
//  object. create

//  object literals

// const mySym = Symbol("key1")

// const JsUser = {
//     name: "sachin",
//     "full name": "sachin raj",
//     [mySym]: "mykey1",
//     age: 21,
//     location: "punjab",
//     email: "sachinraj@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["monday","saturday"]
// }

// console.log(JsUser.email);
// console.log(JsUser["email"])
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

//JsUser.email = "hitesh@chatgpt.com"
//Object.freeze(JsUser)  // object freeze
//JsUser.email = "hitesh@microsoft.com"
//console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`hello JS user, ${this.name}`);
// }

//    console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


                  //      const tinderUser = new object()

//        const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "sammy"
// tinderUser.isLoggedId = false

//  // console.log(tinderUser);

// const regularUser = {
//        emaol: "some@gmail.com",
//        fullname: {
//               userfullname: {
//                      firstname: "sachin",
//                      lastname: "raj"
//               }
//        }
// }
//   // onsole.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}

// // const obj3 = {obj1, onj2 }
// // const obj3 = Object.assign({}, obj1, obj2)

// const obj3 =  {...obj1, ...obj2}
// // console.log(obj3);

//  const users = [
//        {
//               id: 1,
//               email: "s@gmail.com"
//        }
// ]
//    users[1].email
//    console.log(tinderUser);

//    console.log(Object.keys(tinderUser));
//    console.log(Object.values(tinderUser));
//    console.log(Object.entries(tinderUser));

   // console.log(tinderUser.hasOwnProperty(`isLoggedIn`));

const course = {
       coursename: "js in hindi",
       price: "999",
      courseInstructor: "sachin"
}

// course.courseInstructor

 const{courseInstructor: instructor} = course
 console.log(instructor)

// {
//        "name": "sachin",
//        "coursename": "js in hindi",
//        "price": "free"
// }


[
  {},
  {},
  {} 
]
















