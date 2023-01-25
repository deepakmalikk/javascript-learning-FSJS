// Array methods 

const arr = [1, 2, 'deepak', 'malik', true];

console.log(arr.length)
// 5

// to get last element of array

console.log(arr[arr.length - 1])
//  true

console.log(arr.push(5))
// 6 it is the total elements in the array i.e array size
console.log(arr)
// [ 1, 2, 'deepak', 'malik', true, 5 ]

console.log(arr.pop())
// 5 array size 
console.log(arr)
// [ 1, 2, 'deepak', 'malik', true ]





let arr2 = [false, 9, 8, 7, 6]
let arr3 = [5, 4, 3, 2, 1]

console.log(arr.concat(arr2))
// [ 1, 2, 'deepak', 'malik', true, false, 9, 8, 7, 6 ]
console.log(arr)
// [ 1, 2, 'deepak', 'malik', true ]
console.log(arr.concat(arr2, arr3))   //multiple array concatenation
/*[
  1,       2,    'deepak',
  'malik', true, false,
  9,       8,    7,
  6,       5,    4,
  3,       2,    1
]*/


console.log(arr.slice(3, 5))
// [ 'malik', true ]


console.log(arr.splice(2, 'deepu', 'singh'))
// []  removed elements
console.log(arr)
// [ 1, 2, 'singh', 'deepak', 'malik', true ]  new array
console.log(arr.splice(2, 2, 'hello', 'bye'))
// [ 'singh', 'deepak' ]  removed elements
console.log(arr)
// [ 1, 2, 'hello', 'bye', 'malik', true ]     new array
console.log(arr.splice(2))
// [ 'hello', 'bye', 'malik', true ]  removed elements
console.log(arr)
// [ 1, 2 ]   new array


console.log('----------------------------------- \n')

const newarr = [0, 1, 2, 3, 4, 5, 6]

console.log(newarr.shift())
// 0  first element removed from array
console.log(newarr)
// [ 1, 2, 3, 4, 5, 6 ]


console.log(newarr.unshift(-1))
//  7   new arrray size
console.log(newarr)
/*[
  -1, 1, 2, 3,
   4, 5, 6
] new array  */


console.log(newarr.includes('3'))
// false   case senstivie
console.log(newarr.includes(3))
//  true

console.log(newarr.copyWithin(2, 4, 6))
/* [
  -1, 1, 4, 5,
   4, 5, 6
]*/

console.log(newarr.indexOf(4))
// 2
console.log(newarr.lastIndexOf(4))
// 4

console.log(newarr.toString())
// -1,1,4,5,4,5,6

console.log(newarr.sort())
/* [
  -1, 1, 4, 4,
   5, 5, 6
] */

console.log(newarr.reverse())
/* [
  6, 5,  5, 4,
  4, 1, -1
]
*/

console.log(newarr.map(Math.sqrt))
// [ 2.449489742783178, 2.23606797749979, 2.23606797749979, 2, 2, 1, NaN ]

console.log(newarr)
/* [
  6, 5,  5, 4,
  4, 1, -1
]
*/

