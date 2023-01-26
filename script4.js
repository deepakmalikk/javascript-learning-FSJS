
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