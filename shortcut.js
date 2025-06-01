// how to remove dupicates in js
const arr = [1,2,2,3,4,5,6,3]
const unique = [...new Set(arr)];
console.log(unique);

// swap two variable without temp
// let a = 5
// let b = 10
// [a, b] = [b, a]
// console.log(a,b);

// generate random number between ranges
const random = (min,max)=>Math.random()*(max - min) +min;
console.log(random(1,6));

// flatten a multi dimentional array use flat infinity to completely flatten deeply nested arrays
const arra = [1,[2,[3,[4,5]]]];
const flatarra = arr=> arr.flat(Infinity);
console.log(flatarra(arra));

// short-circuit Deafault value
const someVariabe = null;
const value = someVariabe ||  'Default value';
console.log(value);

// get the last element in an array
const numbers = [10,20,30,40];
const last = arr => arr.slice(-1)[0];
console.log(last(numbers));

// convert a number to a string
const num = 123;
const strNum = num + "";
console.log(strNum);




