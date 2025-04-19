//Primitive

//7 types : String, Number, BigInt, Boolean, Undefined, Null, Symbol

const score = "100"; //String
const scoreValue = 100.3

const id = Symbol("123"); //Symbol
const anotherId = Symbol("123"); //Symbol
console.log(id === anotherId); //false

//Reference: Non-Premitive
//Array, Object, Function

const heros = ["Thor", "Ironman", "Hulk"]; 
let obj = {
    name : "Tony Stark",
    age : 45,
    isAvenger : true,
}

const myFunction = function() {
    console.log("Hello World");
} 

console.log(typeof myFunction);