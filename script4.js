
// loop

// for loop

for(let i=0; i<=5; i++){
    console.log(i)
}
/*
0
1
2
3
4
5
*/


// for (let i=0; ; i++){
//     console.log(i)
// }

// infinty b/c there is no condition where to stop

for(let i=0; i<=3; i++){
    for(let j=1; j<2; j++){
        console.log(`first for loop ${i} and second for loop ${j}`)
    }
}
// first for loop 0 and second for loop 1
// first for loop 1 and second for loop 1
// first for loop 2 and second for loop 1
// first for loop 3 and second for loop 1


let arr=['hello','bye','namste','ram ram']

let newarr=[]

for(let i=0; i<arr.length; i++){
    newarr[i] = arr[i]
}
console.log(newarr)
// [ 'hello', 'bye', 'namste', 'ram ram' ]

// Using push method for above program

let arr1=['hello','bye','namste','ram ram']

let newarr1=[]
for(let i=0; i<arr1.length; i++){
    newarr1.push(arr[i]);
}
console.log(newarr1)
// [ 'hello', 'bye', 'namste', 'ram ram' ]

// Todo program:-  add in empty array from other array doing there square root

var firstarr = [4,9,16,18]
 
var secondarr = [ ]

for(let i=0; i<=firstarr.length-1; i++){
    secondarr[i]= Math.sqrt(firstarr[i])
}
console.log(secondarr)
// [ 2, 3, 4, 4.242640687119285 ]


// while loop

let i = 0;

while(i<=5){
    console.log(i);
    i++;
}
/*0
1
2
3
4
5
*/

// Do while

let j=0;

do{
    console.log(`value is ${j}`)
     j++;
}while(j<=3)

// value is 0
// value is 1
// value is 2
// value is 3

// for of loop for an array

let arrs =['deepak','malik','hello','bye']
let newarrs =[]

for(let value of arrs){
    newarrs.push(value)
}
console.log(newarrs)
// [ 'deepak', 'malik', 'hello', 'bye' ]


// switch statment 

let element = 'admin'

switch(element){
    case 'superadmin': 
        console.log('superadmin is here ');
        break;
    case 'admin': 
        console.log('admin is here ');
        break;
    case 'student': 
        console.log('student is here')
        break;
    default: 
        console.log('no user ')
}

// admin is here


// break and continue 

for(let value=0; value<=10; value++)
{
    if(value==2){
        continue;
    }

    if(value==8){
        break;
    }

    
    console.log(value)

}
/* 0
1
3
4
5
6
7
*/

// Function in javascript

function greet()    //function defination
{
    console.log('hello from function')
}

greet();     //function calling

// hello from function


// function with parameter

function add(x){
    let y= x+5;
    console.log(y);
}
add(4)

// 9

// function returning some value 

function message(){
   
    return `Every seed can be a tree`

}
console.log(message())

// Every seed can be a tree

// spread operator (...)  when you don't know how many parameter will come

function manipulation(...args){
    let sum =0;
    for(let value of args){
     sum = sum + value;
    }
    console.log(sum)
}
manipulation(1,2,3,4,5,6,7,8,9,10)

// 55

// arrow function 

let fun = ()=>console.log("hey!! arrow function this side")

fun()

// hey!! arrow function this side

let funs =(x,y)=>{
    let z =x+y;
    return z;

}
console.log(funs(4,4))
// 8

// Date Object 

let date = new Date()

console.log(date.getDate())
// 28
console.log(date.getDay())
//6
console.log(date.getFullYear())
// 2023
console.log(date)
// 2023-01-28T08:47:50.940Z

console.log(date.toDateString())
// Sat Jan 28 2023



// truthy and falsy value 

if(0 == true){
    console.log('0 is truethy value')
}
else{
    console.log('0 is not truthy value ')
}
// 0 is not truthy value 

if(NaN== true){
    console.log('NaN is truethy value')
}
else{
    console.log('NaN is not truthy value ')
}
// NaN is not truthy value 

if(''== true){
    console.log('empty string is truethy value')
}
else{
    console.log('empty string  is not truthy value ')
}
// empty string  is not truthy value

if([]== true){
    console.log('empty array is truethy value')
}
else{
    console.log('empty array is not truthy value ')
}
// empty array is not truthy value


if(undefined== true){
    console.log('undefined is truethy value')
}
else{
    console.log('undefined is not truthy value ')
}

// undefined is not truthy value 