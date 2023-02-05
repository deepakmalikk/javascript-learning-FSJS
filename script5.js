// // object :-

// let obj = {
//     name: 'deepak',
//     lastName: 'malik',
//     user: 'admin',
//     // methods on object
//     call: function () {
//         return `let's call ${this.name}`
//     }
// }

// console.log(obj)
// /* {
//   name: 'deepak',
//   lastName: 'malik',
//   user: 'admin',
//   call: [Function: call]
// }*/

// console.log(obj['lastName'])
// // malik

// console.table(obj)
// /*
// ┌──────────┬──────────┐
// │ (index)  │  Values  │
// ├──────────┼──────────┤
// │   name   │ 'deepak' │
// │ lastName │ 'malik'  │
// │   user   │ 'admin'  │
// │   call   │          │
// └──────────┴──────────┘
// */

// console.log(Object.keys(obj))
// // [ 'name', 'lastName', 'user', 'call' ]

// console.log(Object.values(obj))
// // [ 'deepak', 'malik', 'admin', [Function: call] ]


// let user = {
//     productName: 'Laptop',
//     prodID: '12345679',
//     prodValue: '2450$'
// }

// for (let values in user) {
//     console.log(`key is ${values} and value is ${user[values]}`)
// }

// /*
// key is productName and value is Laptop
// key is prodID and value is 12345679
// key is prodValue and value is 2450$
//  */



// // HOF


// // 1. callback function
// function callback(n) {
//     return 2 + n;
// }

// let newfun = (callback, x) => {
//     return callback(x) + x
// }

// console.log(newfun(callback, 3))

// // 8

// //  2. setTimeout(function,count)

// // eg1:
// function hello(){
//     console.log("Hello From javascript");
// }

// setTimeout(hello,3000)

// // After 3 second o/p 
// // Hello From javascript

// // eg 2: 

// setTimeout(()=>{
//     console.log("hello from setTimeout ")
// },3000)

// // After 3 second output
// // hello from setTimeout

// // 3. setInterval(function,count)

// //eg 1: 
// function bye() {
//     console.log("Bye from javascript")
// }

// setInterval(bye, 3000)

// // IN evrery 3 second 
// // Bye from javascript
// // Bye from javascript


// // eg 2:

// setInterval(() => {
//     console.log("bye from setInterval")
// }, 3000);

// // after every 3 second

// // bye from setInterval
// // bye from setInterval

// // 4. map(function)

// const arr1 = [1, 2, 3, 4, 5]

// arr.map((x) => {
//     console.log(x ** 2)
// })
// /*
//  1
// 4
// 9
// 16
// 25
// */

// let myarr = ['deepak', 'anita', 'god']

// let result = myarr.map((x) => {
//     return x.toUpperCase()
// })

// console.log(result)
// // [ 'DEEPAK', 'ANITA', 'GOD' ]

// // 5. every()

// let arr = [2, 4, 6, 8]

// let isEven = ele => {
//     return ele % 2 == 0
// }
// let res = arr.every(isEven)
// console.log(res)

// // true

// // 6. forEach()

// let arrss = [2,4,6,8,10]

// arrss.forEach((x)=>{
//     console.log(x);
// })
// /*
// 2
// 4
// 6
// 8
// 10
// */


// // 7. filter()

// let data = [1,2,3,'deepak','malik',true]

// data.filter((value)=>{
   
//     console.log(value.length==5)
// })
// /*
// false
// false
// false
// false
// true
// false
// */

// 8. reduce()

let sumarr =[0,1,2,3,4,5,6]

let sums= sumarr.reduce((acc,cur)=>
    acc+cur,2)
console.log(sums)
// 23 = 2+0+1+2+3+4+5+6


// String to number 
let a = "2"
console.log(typeof a)

// string


let numb = Number(a);
console.log(numb)
// 2
console.log(typeof numb)
// number


// number to string

let numbb = 10

console.log(typeof numbb)
// number
let str = String(numbb)
console.log(str)
10
console.log(typeof str)
// string


// OTHER MEthod For string
let nu = 100

let stri=nu.toString()
console.log(typeof stri)
// string



// Destructuring

let arrss =[1, 2, 3, 4, 5]

let [p, q, r, s, t]=arrss
console.log(p)
console.log(q)
console.log(r)
console.log(s)
console.log(t)
/* 
1
2
3
4
5
*/


// want to remove vslue

let datavalue =[1,2,3,4]

let [c, , v, ,] =datavalue

console.log(c)
// 1
console.log(v)
// 3



// When we don't know the length of array

let unknown = [1, 2, 3, 4, 5, 6,7,8, 9,10]

let [val1, val2, val3, ...rest]= unknown

console.log(val1)
// 1
console.log(val2)
// 2
console.log(val3)
// 3
console.log(rest)
/* [
  4, 5,  6, 7,
  8, 9, 10
]
*/