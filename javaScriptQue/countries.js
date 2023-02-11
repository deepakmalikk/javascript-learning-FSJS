// 24. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

 let countries = ['India', 'china', 'pakistan', 'nepal', 'bangladash', 'australia', 'new zealand', 'america', 'UK']

// export default countries


// 26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.


for (let index of countries){
    if(index=="Ethiopia"){
     console.log('Ethiopia')
    }
    else{
        countries.push('Ethiopia')
        break;
    }
}
console.log(countries)

/*
[
  'India',       'china',
  'pakistan',    'nepal',
  'bangladash',  'australia',
  'new zealand', 'america',
  'UK',          'Ethiopia'
]
 */