"use strict"; // treat all JS code as strict mode

// alert("Hello World"); we are using nodejs so we can't use alert ,we can use it in browser

console.log("Hello World"); // print in console

let name = "John Doe"; // string
let age = 30; // number
let isLoggedIn = false; // boolean
let state; // undefined
let standAlone = null; // null

//premitive data types
//number range is 2 to power 53
// BigInt - for large numbers
//string - for text use " "
// boolean - true or false
//null - Its a stand alone value.Representation of empy value
//symbol - unique value and not equal to any other value
//undefined - variable is not defined

console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof state); // undefined
console.log(typeof standAlone); // object (this is a bug in JS)

