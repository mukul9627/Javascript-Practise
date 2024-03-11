// Primitive  (Call by value)

// 7 types String, number, boolean, null, undefined, Symbol, bigInt

const Name = "mukul"

const score = 100;
const isLoginedIn = true;
const  outsideTemp = null;

let valuedefine;

let name = Symbol(123)
let sirname = Symbol(123)

const largNumber = 111111112222233333444444n;

// Non Primitive (Call by Reference)

// Array, Objects, Function

const arr = [1,2,3,4,5,6,7,8]

const obj = {
    name: 'Mukul',
    sarName: 'sharma'
}

const myFunction = function () {
    console.log('hi all Stu')
}


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++==

// Stack (Primitive) 

let myName = "Mukul Sharma"

let mySecondName = myName;

mySecondName = 'bhola'

console.log(myName)
console.log(mySecondName)



// Heap (Non Primitive)

let firstName = {
    email: "mukul@gmail.com",
    id: 12345
}

let secondName = firstName;

secondName.id = 2345;

console.log(firstName)
console.log(secondName)