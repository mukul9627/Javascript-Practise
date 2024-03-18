// Object

const sym = Symbol("data");

const jsuser = {
    name: "Mukul",
    "Full_Name": "Mukul Sharma",
    age: 24,
    [sym]: "kalae"
    ,
    email: "mukulsharmawd@gmail.com",
    Roll_No: 43
}

// console.log(jsuser[sym])

// console.log(jsuser["email"])

// jsuser.name = "mukul sharma"
// Object.freeze(jsuser)
// console.log(jsuser)
// jsuser.name = "kala"

// jsuser.age = 12;
// console.log(jsuser)

jsuser.greeting  = function(){
    console.log("Hello Js user");
} 
jsuser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`)
}
console.log(jsuser.greeting() )
console.log(jsuser.greetingTwo() )