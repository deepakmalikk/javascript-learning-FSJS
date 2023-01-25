// Array methods 

const arr = [1, 2 , 'deepak', 'malik', true];

console.log(arr.length)
// 5

// to get last element of array

console.log(arr[arr.length-1])
//  true

console.log(arr.push(5))
// 6 it is the total elements in the array i.e array size
console.log(arr)
// [ 1, 2, 'deepak', 'malik', true, 5 ]

console.log(arr.pop())
// 5 array size 
console.log(arr)
// [ 1, 2, 'deepak', 'malik', true ]





let arr2 =[false, 9, 8, 7, 6]
let arr3 =[5, 4, 3, 2, 1]

console.log(arr.concat(arr2))
// [ 1, 2, 'deepak', 'malik', true, false, 9, 8, 7, 6 ]
console.log(arr)
// [ 1, 2, 'deepak', 'malik', true ]
console.log(arr.concat(arr2,arr3))   //multiple array concatenation
/*[
  1,       2,    'deepak',
  'malik', true, false,
  9,       8,    7,
  6,       5,    4,
  3,       2,    1
]*/


console.log(arr.slice(3,5))
// [ 'malik', true ]


console.log(arr.splice(2,'deepu','singh'))
// []
console.log(arr)
// [ 1, 2, 'singh', 'deepak', 'malik', true ]
console.log(arr.splice(2,2,'deepu','singh'))
// [ 'singh', 'deepak' ]
console.log(arr)
//[ 1, 2, 'deepu', 'singh', 'malik', true ]