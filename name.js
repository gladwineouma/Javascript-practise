// concat method() used to link more strings together
const firstName = "salma";
const secondName = "judy";

//methods to concat
console.log(firstName.concat(secondName));
console.log(firstName + secondName);
console.log(`${firstName}${secondName}`)  //

//match method() used search a string for a match
//  in against an expression and returns it matches as an array
 const quote = "if t=you don't know where the you are going, any road will get you there";
 console.log(quote.match(/you/g));

//split() converts strings into an array by splitting into substring
const word1 = "simultaneous";
console.log(word1.split( ));
console.log(word1.split(""));

//replaceAll() retuurns a new string with some or 
// all matches of a pattern by a replacement
const slug = "5-html-tags-that-nobody-knows"
console.log(slug.replaceAll('-', ' '));
console.log(slug.replace('-', '/'));     //replaces the first element


//search returns position index of a spesific value in a string. 
// returns negative if the value does not exist
const statement = 'I enjoy working alone';
console.log(statement.search('alone'));
console.log(statement.search(/funny/g));


//trim() delete whitespaces at the end & start
const myName= '  Gladwine Ouma';
console.log(myName.trim());


//includes() checks if a value exist in a string and returns a boolean
const address = 'Morrocco, Rabat';
console.log(address.includes('Morrocco'));
console.log(address.includes('morrocco'));
console.log(address.includes('tiger'));

//toLowerCase() returns a given string to lowercase
const name = 'Aya BOUty';
console.log(name.toLowerCase());
console.log(name.toUpperCase());  //returns a string to uppercase

//repeat() returns a string repeatedly n times
const school = 'friend';
console.log(school.repeat(3));

//slice() extarct a sprcific part of a string




 