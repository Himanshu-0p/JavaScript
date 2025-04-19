// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate)


// let myCreatedDate = new Date(2023,0,23);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate1 = new Date(2025,0,23,10,20);
// console.log(myCreatedDate1.toLocaleString()); 

// let myCreatedDate2 = new Date("01-14-2025");
// console.log(myCreatedDate2.toLocaleString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate2.getTime())
// console.log(Math.floor(myTimeStamp/1000)) //seconds

let newDate = new Date(0); //epoch time
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());

newDate.toLocaleString('default',{
    weekday: 'long',
    timeZone: 'UTC',
    
})