
/*
there are mainly two types of datatyes in js 

1. Primitive 
    types:
    String,Boolean,undefine,Number,null,sybol,BigInt


2. reference types
    types:
    fuunction,
    array
    objects

*/

const score=1000;
const scoreNum=100.45
const isLoged=false
const outsideTemp=null

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId)
console.log(id)
console.log(anotherId)

//======================
/*
There are two tyes of meemory in js 
1. Stack==>all permitive datatypes==>actual changes of object
2. Heap==>all refrence datatypes ==>refrence of object

*/

let myyoutbe="Shashi.youtube"

let anotherchnnel=myyoutbe
anotheranme="myyoutube"

console.log(myyoutbe)
console.log(anotheranme)

let userOne={
    ueranme:"shashi",
    email:"shasi@google"

}

let userTwo={
    username:"kumar",
    email:"myemail@google"
}

console.log(userOne.ueranme)
console.log(userTwo.username)
