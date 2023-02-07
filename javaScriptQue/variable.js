// 1. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with there type.

var variable1 = "learnCodeOnline";
var variable2 = undefined;
var variable3 = null;


console.log(`Variable one value is "${variable1}" and it's type is "${typeof variable1}"`)
console.log(`Variable one value is  "${variable2}" and it's type is "${typeof variable2}"`)
console.log(`Variable one value is  "${variable3}" and it's type is "${typeof variable3}"`)

/* 
Variable one value is "learnCodeOnline" and it's type is "string"
Variable one value is  "undefined" and it's type is "undefined"
Variable one value is  "null" and it's type is "object"
*/





// 2. Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.


var firstName = "deepak";
var lastName = "malik";
var maritalStatus = "unmarried";
var country = "India";
var age = "22";

console.log(
    `
    My firstName is ${firstName} 
    lastName is ${lastName}
    maritalStatus is ${maritalStatus}
    I live in ${country}
    At present my age is ${age}
    `
)

/*
    My firstName is deepak
    lastName is malik
    maritalStatus is unmarried
    I live in India
    At present my age is 22
*/




// 3. Decalre a varibale and assign value to it and change all the string characters to capital letters using toUpperCase() method.


let variableIs = "hello"

let variableInUpper = variableIs.toUpperCase()
console.log(variableInUpper)

// HELLO




// 4. Check if the string contains a word Script using includes() method.

let str = "javaScript"

let check = str.includes("Script")
console.log(check)

// true




// 5. Split the string into an array using split() method

let myStr = "WebDeveloper"

let split = myStr.split("")
console.log(split)

/*
[
  'W', 'e', 'b', 'D',
  'e', 'v', 'e', 'l',
  'o', 'p', 'e', 'r'
]
*/




// 6. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let newStr = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' 
let newSplit = newStr.split(",")
console.log(newSplit)

/*
[
  'Facebook',
  ' Google',
  ' Microsoft',
  ' Apple',
  ' IBM',
  ' Oracle',
  ' Amazon'
]
*/

