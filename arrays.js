const arr1 = [3,7,34,90,12];
let a1= arr1[arr1.length -1];
arr2 = [true, "green", "where",12,56];
let a2 = arr2[arr2.length - 1];

console.log(a1);
console.log(a2);

myPets = ["Cow", "Bird", "Snake", "Dog"];
let a3 = myPets.join(",");
console.log(a3);

words = ["Learning", "Javascript", "is","fun"];
let a4 = words.join(" ");
console.log(a4);

arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let a5 = arr3.sort();
console.log(a5);


//removing duplicates
let arr = ["boy", "man", "girl",  "school", "girl", "woman"];
let a6 = [...new Set (arr)];

let a7 = arr.filter((value,index,self)=> 
    self.indexOf(value)===index)
console.log(a6);
console.log(a7);

let arr5 = ["the", "way", "x", 4];
let search = arr5.includes("")

let word = "renniw";
let newWord = word.split('').sort().join();
console.log(newWord);

let fruits = ["Apple","Carrot", "Avocado", "Orange"];
let index = 4;
let element = "tomato";
fruits.splice(index, 0,element);
console.log(fruits);









