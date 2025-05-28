// => function/cwhat is the difference between 
//Write a JavaScript function that takes an array of strings and returns a new array with the length of each string

function stringLength(arr){
return arr.map(str=>str.length);

};
let fruits = ["Apple", "Mango","Avocado","Orange"]
let length = stringLength(fruits);
console.log(length);

// Given an array of numbers, write a function that filters out and returns only the even numbers.

function even(numbers){
    return numbers % 2==0
};
