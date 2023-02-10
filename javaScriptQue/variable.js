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




// 7. Use lastIndexOf to determine the position of the last occurrence of a script.

let position = "This script is of Javascript";

let occurrence = position.lastIndexOf("script");
console.log(occurrence)

// 22




// 8. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.

let sentence = 'You cannot end a sentence with because because because is a conjunction'
let pos = sentence.search('because');
console.log(pos)

// 31




// 9. Use trim() to remove any trailing whitespace at the beginning and the end of a string.

let whitespaceStr = "    Hello This is whiteSpace trailing    "
let trimmed = whitespaceStr.trim()
console.log(trimmed)

// Hello This is whiteSpace trailing




//10. Boolean value is either true or false.
// - Write three JavaScript statement which provide truthy value.
// - Write three JavaScript statement which provide falsy value.

let a = 10;
let b = 20;
let c = 30;

let true1 = a < b;
console.log(true1)

let true2 = a < c;
console.log(true2)

let true3 = a && b && c != 0;
console.log(true3)

/*
true
true
true
 */


let false1 = a > b;
console.log(false1)

let false2 = a > c;
console.log(false2)

let false3 = a && b && c == 0;
console.log(false3)

/*
false
false
false
*/




/*
11. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
    - 4 > 3
    - 4 >= 3
    - 4 < 3
    - 4 <= 3
    - 4 == 4
    - 4 === 4
    - 4 != 4
    - 4 !== 4
    - 4 != '4'
    - 4 == '4'
    - 4 === '4'
    - Find the length of python and jargon and make a falsy comparison statement.

*/
console.log("-------------------------------------")
console.log(4 > 3)
// true
console.log(4 >= 3)
// true
console.log(4 < 3)
//false
console.log(4 <= 3)
//false
console.log(4 == 4)
// true
console.log(4 === 4)
// true
console.log(4 != 4)
//false
console.log(4 != '4')
//false
console.log(4 == '4')
// true
console.log(4 === '4')
//false
console.log(4 !== 4)
//false

//  - Find the length of python and jargon and make a falsy comparison statement.
let py = 'python';
let jar = 'jargon';

console.log(py.length, jar.length)
// 6 6

console.log(py.length > jar.length)
// false





/*
12. Use the Date object to do the following activities
    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?
    - Find out the numbers of seconds elapsed from January 1, 1970 to now.

*/

let date = new Date();

console.log(date.getFullYear())
// 2023

console.log(date.getMonth()) // month starts from 0-11
// 1 

console.log(date.getDate())
// 8

console.log(date.getDay())
// 3  //wedneday

console.log(date.getHours())
// 13

console.log(date.getMinutes())
// 23

console.log(Date.now())
// 1675843599458   // seconds from 1 jan 1970 till 08 feb 2023





// 13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// let base = prompt("enter the base");
// let height = prompt("enter the hehight");

// let area =0.5 *base * height
// console.log(area)




// 14. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;

let m = (y2 - y1) / (x2 - x1);
console.log(m)
// 2




// 15. Calculate the slope, x-intercept and y-intercept of y = 2x -2

let x = 5;
let y = 2 * x - 2;
console.log(y)
//  8




// 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
const pi = 3.14;
let r = 3;

let areaa = pi * r * r;
console.log(areaa);
// 28.259999999999998

let circumference = 2 * pi * r;
console.log(circumference)
// 18.84




/*
17. Create a human readable time format using the Date time object
    - YYYY-MM-DD HH:mm
    - DD-MM-YYYY HH:mm
    - DD/MM/YYYY HH:mm

*/
let now = new Date();
console.log(now.toISOString())
// 2023-02-08T11:00:00.887Z
console.log(now.toUTCString())
// Wed, 08 Feb 2023 11:01:04 GMT
console.log(now.toLocaleString())
// 08/02/2023, 16:28:14




// 18. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let aage = 15;
if (aage >= 18) {
  console.log("You are old enough to drive")
}
else {
  console.log(
    `wait for the ${18 - aage} years
    `
  )
}

// wait for the 3 years





// 19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let numb = 20;

if (numb > 0) {
  if (numb % 2 == 0) {
    console.log(`${numb} is even number `)
  }
  else {
    console.log(`${numb} is not a even number
    `)
  }
}
// 20 is even number




/*
20. Write a code which can give grades to students according to theirs scores:
    - 80-100, A
    - 70-89, B
    - 60-69, C
    - 50-59, D
    - 0-49, F

*/

let sub1 = 50;
let sub2 = 70;
let sub3 = 80;

let res = (sub1 + sub2 + sub3) / 3
console.log(Math.round(res))
// 67
if (res >= 0 && res < 50) {
  console.log("F grade")
}
else if (res >= 50 && res < 60) {
  console.log("D grade")
}
else if (res >= 60 && res < 70) {
  console.log("C grade")
}
else if (res >= 70 && res < 80) {
  console.log("B grade")
}
else {
  +-
    console.log("A grade")
}
// C grade




/*
21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer

*/
let user = 'December'
if (user == 'September' || user == 'October' || user == 'November') {
  console.log(`the season is Autumn`)
}
else if (user == 'December' || user == 'January' || user == 'February') {
  console.log(
    `the season is Winter.`
  )
}
else if (user == 'March' || user == ' April' || user == 'May') {
  console.log(` the season is Spring`)
}
else {
  console.log(`the season is Summer`)
}

// the season is Winter.




// 22. Write a program which tells the number of days in a month.

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

// feb 
console.log(daysInMonth(02, 2023))

// 28






// 23. Write a program which tells the number of days in a month, now consider leap year.

console.log(daysInMonth(02, 2024))
// 29
