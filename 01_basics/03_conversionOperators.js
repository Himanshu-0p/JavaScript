let score = false;

console.log(typeof score)
console.log(typeof (score))

let valueinNumber = Number(score)
console.log(typeof valueinNumber)
console.log(valueinNumber)// convert number to string

//Convversion of string to number
// "33" => 33
// "33abc" => NaN
// "abc33" => NaN   
// "33.33" => 33.33
// true => 1 and false => 0

let isboolean = 1
let isbooleanString = Boolean(isboolean)
console.log(typeof isbooleanString) // string
console.log(isbooleanString) // "1"

// 1 => true
// 0 => false
// "" => false
// "Himanshu" => true
