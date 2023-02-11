// // 24. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
// import countries from "./countries"

// console.log(country)


/**
 25. In the following shopping cart add, remove, edit items
    => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    - add 'Meat' in the beginning of your shopping cart if it has not been already added
    - add Sugar at the end of you shopping cart if it has not been already added
    - remove 'Honey' if you are allergic to honey
    - modify Tea to 'Green Tea'

 */
    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    shoppingCart.unshift('Meat')
    console.log(shoppingCart)
    // [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey' ]

    shoppingCart.push('sugar')
    console.log(shoppingCart)
    // [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'sugar' ]
    let newarr =[]
    for(let i of shoppingCart){
        if(i== 'Honey'){
            continue;
        }
     
       newarr.push(i)
      
    }
    console.log(newarr)
    // [ 'Meat', 'Milk', 'Coffee', 'Tea', 'sugar' ]

    let  newarr1 =[]
    for(let i of shoppingCart){
        if(i== 'Tea'){
            newarr1.push('green Tea')
            continue;
        }
        newarr1.push(i)
    }
console.log(newarr1)

// [ 'Meat', 'Milk', 'Coffee', 'green Tea', 'Honey', 'sugar' ]




/*
27. The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method

*/


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];


let sorted =ages.sort()
console.log(sorted)
// [19, 19, 20, 22, 24, 24, 24, 25, 25, 26]
let min = sorted[0];
console.log(`the minimum age is ${min}`)
// the minimum age is 19
let i = sorted.length-1
let max = sorted[i];
console.log(`the max age is ${max}`)
//the max age is 26



let j = sorted.length-1;
 
let indexx = (j+1)/2
 
let firstValue = sorted[indexx]
console.log(`first Value for median is ${firstValue}`)
// first Value for median is 24
let secondValue = sorted[indexx+1]
console.log(`second Value for median is ${secondValue}`)
// second Value for median is 24
let median = (firstValue+secondValue)/2;
console.log(`the median of ages is ${median}`)
// the median of ages is 24
console.log('-----------')
 let sum =0;

for (let x of sorted){
   
    let newx =x;
    sum =sum+newx;
    
   
}
let avgAge =Math.floor(sum/(j+1));
console.log(` the avarage age is ${avgAge}`)
// the avarage age is 22

let range = max-min
console.log(`range of the ages is ${range}`)
// range of the ages is 7
 


let comapre1= Math.abs(min-avgAge);
console.log(`comparing min-average ages and getting this answer using abs() method ${comapre1}`)
// comparing min-average ages and getting this answer using abs() method 3


let comapre2 =Math.abs(max-avgAge);
console.log(`comparing max-average ages and getting this answer using abs() method ${comapre2}`)
// comparing max-average ages and getting this answer using abs() method 4