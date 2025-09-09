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
function deep(name ,age){
    console.log("hello"+name +"that you have a " +age)
}
deep("alina" , 33) 
//tamrin
function square(number){
    return number *number 
}
let  result = square(5)
console.log(result)
//******                       operators ****                            **** */
let x = 10;
let y =15;
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
let bottonText =  athenticated ? "dashboard" : "login"
console.log(bottonText)

// console.log(x%y)    baqimande
 
//logical and
// &&
console.log(false && false)
let ProductCount = 3;
let ProductPrice = 1000;
 let credit = 1070;
 let buy = ProductCount > 0 && credit >ProductPrice;
 console. log(buy);
// logical OR
// ||
 let cantbuy = ProductCount > 6 || credit >ProductPrice;
console.log(cantbuy)

//not
// !

