const name = "himanshu";
const repoCount = 100;

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //concatination

const gameName = new String("Himanshu");

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length) 
console.log(gameName.toUpperCase())
console.log(gameName.charAt(1))
console.log(gameName.indexOf('n'))//String {"Himanshu"}

const newString = gameName.substring(0, 4); //substring(startIndex, endIndex)
console.log(newString) 

const anotherString  = gameName.slice(-2, 4); //slice(startIndex, endIndex)
console.log(anotherString)

const newString1 = "  hitesh  ";
console.log(newString1) //removes extra spaces from the string
console.log(newString1.trim()) //removes extra spaces from the string

const newString2 = "Himanshu Patil";
console.log(newString2.replace("u","uz"))
console.log(newString2.includes("Him"))
console.log(newString2.includes("il"))
console.log(newString2.split('- ')) //splits the string into an array of strings