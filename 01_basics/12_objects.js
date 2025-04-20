const mySym = Symbol("key1");

const Jsuser = {
    name: "Himanshu",
    "full name": "Himanshu Patil",
    city: "Pune",
    [mySym]: "mykey1",
    email: "himanshu@vit.edu",
    isloggedin: true,
    lastlogindaya: ["Monday", "Tuesday", "Wednesday"],
};

// console.log(Jsuser.email);         
// console.log(Jsuser["full name"]);  
// console.log(Jsuser[mySym]);       

// Jsuser.email = "himanshu@test.com"
// Object.freeze(Jsuser) //freezes the object, no changes can be made to the object
// Jsuser.email = "himanshu@gmail.com"
// console.log(Jsuser.email); 

Jsuser.greeting = function(){
    console.log("Hello Js user")
}
Jsuser.greetingtwo = function(){
    console.log(`Hello Js user two,${this.name}`)
}
console.log(Jsuser.greeting())
console.log(Jsuser.greetingtwo())