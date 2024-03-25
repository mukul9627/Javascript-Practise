function MyName(){
    console.log('kala')
    console.log('raja')               
    console.log('all of you')
    console.log('data file')
}

// MyName // function Reference
// MyName() // function Exesuction

// function addTowNumber(num1, num2){
    
//     console.log(num1 + num2);
// } 

function addTowNumber(num1, num2){
    
   let result = num1 + num2
   return result
} 
 
const data = addTowNumber(3 , 4)

// console.log("Result: ", data);

const LoginUserMessage = (username) =>
 {
if(username === undefined){
console.log("Please enter a username")
return
}
    return`${username} just logged in`

}
console.log(LoginUserMessage())