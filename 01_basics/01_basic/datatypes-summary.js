// Primitive  

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = 100
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);

//const bigNumber = 34567899112465788541n


// Reference (Non primitive)

// Array, Objects, Functions 

const heros=["Shaktiman","naagraj","doga"];
let myObj ={
    name:"Sairaj",
    age: 22,
}

const myFunction = function(){
   console.log("Hello World"); 
}

console.log(typeof anotherid);

// ++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) ,Heap (Non-Primitive) 

let myfavYoutubername= "codewithharry"

let anothername = "chai aur code"

console.log(myfavYoutubername);
console.log(anothername);

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo= userOne

userTwo.email = "sairaj@google.com"

console.log(userOne.email);
console.log(userTwo.email);