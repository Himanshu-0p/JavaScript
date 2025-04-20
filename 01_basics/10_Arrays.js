// const myArr = [0,1,2,3,4,5,6,7,8,9];
// const myHero = ['Superman', 'Batman', 'Spiderman', 'Ironman', 'Hulk'];  

// const myArr2 = new Array(1,2,3,4);
// console.log(myArr2[0]);

// myArr.push(10);
// myArr.push(11);
// myArr.pop();
// console.log(myArr)

// myArr.unshift(-1);
// myArr.shift();

// console.log(myArr.includes(5));
// console.log(myArr.indexOf(5)) //true

// const newArr = myArr.join();
// console.log(myArr); //0,1,2,3,4,5,6,7,8,9
// console.log(newArr)


//slice and splice

const arr = [1,2,3,4,5];

console.log('A',arr);
const myarr1 = arr.slice(0,3);
console.log(myarr1)

console.log('B',arr);
const myarr2 = arr.splice(1,3);
console.log(myarr2)
console.log('C',arr);


