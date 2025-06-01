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