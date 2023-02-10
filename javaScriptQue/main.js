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