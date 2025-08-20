/*

1.This file is part of conversion operations in Javascript
2.When you will try convert string to number then it won't be conbert and you wil get NAN
3.When you will be try to convert boolean to number then you will be get 1 for true and false for zero
4.33abc==>NAN
5.

*/
let score =true;
let scoreNumber = Number(score); // Convert number to string
//console.log(scoreNumber)
console.log(typeof scoreNumber)


let logedInUser=1

let booleanIsLOgedIn=Boolean(logedInUser)


let str1=33;
let str2=String(str1)
console.log(typeof str2)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(4**2)
console.log(2/2)
console.log(25%2)