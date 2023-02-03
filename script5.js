// object :-

let obj ={
    name: 'deepak',
    lastName: 'malik',
    user: 'admin',
    // methods on object
    call: function (){
        return `let's call ${this.name}`
    }
}

console.log(obj)
/* {
  name: 'deepak',
  lastName: 'malik',
  user: 'admin',
  call: [Function: call]
}*/

console.log(obj['lastName'])
// malik

console.table(obj)
/*
┌──────────┬──────────┐
│ (index)  │  Values  │
├──────────┼──────────┤
│   name   │ 'deepak' │
│ lastName │ 'malik'  │
│   user   │ 'admin'  │
│   call   │          │
└──────────┴──────────┘
*/

console.log(Object.keys(obj))
// [ 'name', 'lastName', 'user', 'call' ]

console.log(Object.values(obj))
// [ 'deepak', 'malik', 'admin', [Function: call] ]


let user= {
    productName: 'Laptop',
    prodID: '12345679',
    prodValue: '2450$'
}

for(let values in user){
    console.log(`key is ${values} and value is ${user[values]}`)
}

/*
key is productName and value is Laptop
key is prodID and value is 12345679
key is prodValue and value is 2450$
 */



// HOF


// callback function
function callback (n){
    return 2+n;
}

let newfun =(callback,x)=>{
  return callback(x)+x
}

console.log(newfun(callback,3))

// 8