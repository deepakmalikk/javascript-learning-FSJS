// object :-

// let obj ={
//     name: 'deepak',
//     lastName: 'malik',
//     user: 'admin',
//     // methods on object
//     call: function (){
//         return `let's call ${this.name}`
//     }
// }

// console.log(obj)

// console.log(obj['lastName'])
// console.table(obj)
// console.log(Object.keys(obj))
// console.log(Object.values(obj))


let user= {
    productName: 'Laptop',
    prodID: '12345679',
    prodValue: '2450$'
}

for(let values in user){
    console.log(`key is ${values} and value is ${user[values]}`)
}

// HOF

function callback (n){
    return 2+n;
}

let newfun =(callback,x)=>{
  return callback(x)+x
}

console.log(newfun(callback,3))