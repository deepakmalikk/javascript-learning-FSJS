// All Data Types Primitive Data Types And Non-Primitive(object)


// Primitive Data Types  that can store only one value


// 1. number 

var a = 8;

// 2. string

var user_Name = 'deepak'

// 3. Boolean

var isLoggedIn = true

// 4. empty value data type

null
undefined

//Non-Primitive Data Types also called as OBJECT :- It is used to store multiple values.

// 1. Array is used to store multiple values that can be of different type.

var arr = [8, 'apple', true, 'hello']

console.log(arr)
// [ 8, 'apple', true, 'hello' ]

console.log(arr[1])
// apple

// 2. Object is used to store multiple values with the help of key value pair.

var obj = {
    name: 'deepak',
    phn: 829888888,
    email: 'eg@gmail.com'

}

console.log(obj)
// { name: 'deepak', phn: 829888888, email: 'eg@gmail.com' }

console.log(obj.phn)

// 829888888


// Discount percantage code

let price = 2999;

let mrp = 3999;

let dperc = ((mrp - price) / mrp) * 100;

console.log(dperc)
// 25.006251562890725

let round = Math.round(dperc);

console.log(round);
// 25


// User Login code using if else

let userLoggedIn = true;
let emailverified = false;

if (userLoggedIn && emailverified == true) {
    console.log(
        `Here is your Dashboard !! Hope you will enjoy it. `
    )

}
else if (userLoggedIn || emailverified == true) {
    console.log(
        ` As you ARE LOgged in plz verify your email as we know your email is not verified
        `
    )
}
else {
    console.log(
        `Create New Account`
    );
}

// As you ARE LOgged in plz verify your email as we know your email is not verified


// Ternary operator 

let x = 10;
let y = 20;

x > y ? console.log('x is greater') : console.log("y is greater")

//  y is greater