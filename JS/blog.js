// for(let i = 1; i <= 15; ++i){
//     if(i % 5 === 0){
//         console.log(i + " " + "ASAP FRONTEND")
//     }
//     else if(i % 2 === 0){
//         console.log(i + " " + "ASAP")
//     }
//     else{
//         console.log(i + " " + "Frontend")
//     }
// }
// console.log("Congratulations you know what you're doing!")

// let str = "Asap Rocky"

// for(let i = str[0]; i[0] < i[8]; i++){

//     console.log(i)
// }

// function orderConfirmation (name, food, resturant, time, city, price) {
//     console.log(`Thank you ${name}, for ordering ${food} from ${resturant} in ${city}. Your total was $${price} and your ${food} will be ready at ${time}!`);
// }
// orderConfirmation ("Aimen", "Chicken Rice", "Doodleys", "5:00", "Regina", "25")

function conversion(aud, audToUsd) {
    return aud * audToUsd
}

console.log(conversion("1000", "1.5"))
console.log(conversion("500", "1.5"))
console.log(conversion("200", "1.5"))