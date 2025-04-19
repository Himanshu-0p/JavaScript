//Stack for primitive types
//Heap for non-primitive types

let myYoutubename = "Hp"

let anotheryoutubename = myYoutubename
anotheryoutubename = "Hp2"

console.log(myYoutubename) 
console.log(anotheryoutubename)

let userOne = {
    email : "user@google.com",
    upi : "user@upi"
}

let userTwo = userOne
userTwo.email = "user2@google.com"

console.log(userOne.email) 
console.log(userTwo.email)