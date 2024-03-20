// singalton objects

// const Instagram = new Object ()

const instagram = {}

instagram.id = 214365
instagram.name = "Mukul sharma"
instagram.pro = "Software Engineear"

// console.log(typeof instagram)

// nessted objects 
const instagramUser ={
    id: 12345,
    name: "mukul",
    profession: "Software Engineear",

    userdata : { 
        gameid: "12546778",
        gamename: "hunter",

        useraccess: {
            email: "mukul@dbbworldwide.com",
            password: 1234567890
        }

    }

}
 
// console.log(instagramUser.userdata.gameid)

// marge tow objects
const obj1 = {1: "m", 2: "u"}
const obj2 = {3: "k", 4: "u", 5: "l"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

// fine key, valuse, entries 

// console.log(Object.keys(instagramUser.userdata));
// console.log(Object.values(instagramUser));
// console.log(Object.entries(instagramUser.userdata));



console.log(instagram.hasOwnProperty("name"));

// console.log(obj3)