// let jonSnowAttack = 25
// let jamieLannisterAttack = 35

// let jonSnowHealth = 100
// let jonSnowDefense = 0


// if (jonSnowAttack < jamieLannisterAttack){
//     console.log("jamie wins hooray")
// } else if(jonSnowAttack > jamieLannisterAttack) {
//     console.log("Jon wins YIPPEE")
// } else {
//     console.log("They both love each other")
// }
    
// jonSnowDefense += 10

// if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense){
//     console.log("Jon died RIP my man")
// } else {
//     jonSnowHealth -= jamieLannisterAttack - jonSnowDefense
//     console.log(jonSnowHealth)
// }
    
// if (jonSnowHealth + 50 > 100){
//     jonSnowHealth = 100
// } else {
//     jonSnowHealth += 50
// }

// let coinLandsHeads = false

// if(coinLandsHeads === false){
//     console.log("The fight continues")
// } else {
//     console.log("Jon makes his escape")
// }

// const myName = "Braydon"

// if(myName){
//     console.log("It's me")
// } else {
//     console.log("Not me hehehe")
// }

// for (let i = 0; i < 5; i++)
// //     if(jonSnowHealth <= 0){
// //         console.log("Jon died RIP")
// //     } else {
// //         jonSnowHealth -= jamieLannisterAttack - jonSnowDefense
// //         console.log(`Jon Snow's health has been reduced to ${jonSnowHealth}`)
// //     }
// // }

while(jonSnowHealth > 0) {
    jonSnowHealth -= jamieLannisterAttack - jonSnowDefense
    console.log(jonSnowHealth)
    if(jonSnowHealth <= 0){
        console.log("Bye bye John")
    }
}