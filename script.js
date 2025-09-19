// const name = "alina";
// let name1 = "fardan";

// lesson 2

// console.log(name1);
// console.log(name);

// lesson 3

// object type
// object = {}
// let name = " alina";
// let age = 23;
// let admin = true;
// let person ={
//     name :"alina",
//     age : 23,
//     admin :true,
// };
// console.log(person);
// console.log(person.age);

//***********array type */
// lesson 4

// let users = [
//     "alina" , "ali","lala"
//     ]
//     users[4] = "salam"
//     // if you want to add object in array
//     users[1] = " hello"
//     // you can change your elements in array
//     users[1] = 4

//     // it can be a number
//     console.log(users[4]);
//     console.log(users);
//   console.log(users.length)
// //   its clear
//   console.log(users.includes("salam"))

// if the number is not in it  = undefind

// type of function
//
function deep(name, age) {
  console.log("hello" + name + "that you have a " + age);
}
deep("alina", 33);
//tamrin
function square(number) {
  return number * number;
}
let result = square(5);
console.log(result);

//******                       operators ****                            **** */
// let x = 10;
// let y = 15;
// x = x+y;
// console.log(x+y)
// console.log(x**y)
// console.log(x/y)
// console.log(x++)
// // console.log(++x)
// // console.log(+x)
// console.log(x<4)

// console.log(y<8)

// console.log(x<16)
// console.log(x == 1)
// console.log(10 === 10)
// seta === type ham check mishe

//*****                     ***                 *** */
let athenticated = false;
let bottonText = athenticated ? "dashboard" : "login";

console.log(bottonText);

// console.log(x%y)    baqimande

//logical and
// &&
console.log(false && false);
let ProductCount = 3;
let ProductPrice = 1000;
let credit = 1070;

let buy = ProductCount > 0 && credit > ProductPrice;
console.log(buy);
// logical OR
// ||
let cantbuy = ProductCount > 6 || credit > ProductPrice;
console.log(cantbuy);

//not

// !
//taqadom amalgara
let f = 4 + 5 * 2;
//* is the first
console.log(f);
// 6 am - 12pm -> good morning
// 12pm -6pm -> good afternoon
// (otherwise)other time -> good evening
let hour = 15;
if (hour >= 6 && hour < 12) {
  console.log("good morning");
} else if (hour >= 12 && hour < 18) {
  console.log("good afternoon");
} else {
  console.log("good evening");
}
/// ****                ****                ****
let role = "admin";
switch (role) {
  case "guest":
    console.log("guest user");
    break;
  case "admin":
    console.log("admin user");

    break;
  default:
    console.log("unknown user");
}
//***               **              ***  */
//for
///while
//do while
//  for .. in

//for .. of
// console("neon");
// console("neon");
// console("neon");
// console("neon");
// console("neon");

// for(let i=0;i<30;i++ ){
//     if(i % 2===0){
// console.log(i)
//     }
//     console.log("neon");

// }
//**        ***         ***         ***         *** */
// let i= 0 ;
// while(i<=8){
// console.log(i);
//     i++;
// }
// let i = 0;
// do {
//     console.log(i);
//     i++;
// }while(i<5);

const person = {
  name: "alina",
  age: 27,
  user: "admin",
};

const colors = ["red", "blue", "pink"];
// key inja yani name , age , user
for (const key in person) {
  console.log(key), console.log(person[key]);
}
for (index in colors) {
  console.log(index);
  console.log(colors[index]);
}
//index inja shomare haye har kodom ro mizare
for (let color of colors) {
  console.log(color);
}
let i = 0;
while (i <= 10) {
  if (i === 4) {
    console.log(i);
    i++;
    continue;
  }
  console.log(i);
  i++;
}

//***               ****                ****                    ****            ** */
//پیمایش پراپرنی های یک ابچکت
let radius = 2;
let x = 1;
let y = 1;

///                      ***    ***             ***         ***         ***         ***
//factory function
//camel notation   
//oneTwoThree
function createCircle(radius) {
  return {
    radius,
    isVisible: true,
    draw(){
      console.log("draw");
    },
  };
}
let circle1 = createCircle(2);
console.log(circle1);
let circle2 = createCircle(7);
console.log(circle2);

//***           ***             ***                 *** */
//constructor function 
//pascal notation
//OneTwoThree

function circle(radius){
this.radius  =radius;
}  