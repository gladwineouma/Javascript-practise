function greet(){
    
    console.log(`Hello ${developer}`);
}
const developer ="Jessica";
greet(developer)

function getBirthYear(age){
    const currenrYear = 2025;
    const birthYear = currentYear - age;
    return birthYear;
}
console.log(getBirthYear(25));

// function task (){
//     return new Promise ((resolve)=>{
//         const dalay = Math.floor(Math.random()*2000)+ 1000
//         setTimeout(()=>{
//             resolve (10),dalay
//         })
//     })
// }

// function callMe(dalay){
//     setTimeout(()=>{
//         console.log("called");
//         callMe(dalay)
//     })
//     const dalays = [500,1000]
// }


async function reminder(email) {
    await new Promise ((resolve)=>
    setTimeout(() => {
        resolve (`Remainder email sent to ${email}`)
    }, 5000))
}

