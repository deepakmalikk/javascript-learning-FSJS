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
let newarr = []
for (let i of shoppingCart) {
    if (i == 'Honey') {
        continue;
    }

    newarr.push(i)

}
console.log(newarr)
// [ 'Meat', 'Milk', 'Coffee', 'Tea', 'sugar' ]

let newarr1 = []
for (let i of shoppingCart) {
    if (i == 'Tea') {
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


let sorted = ages.sort()
console.log(sorted)
// [19, 19, 20, 22, 24, 24, 24, 25, 25, 26]
let min = sorted[0];
console.log(`the minimum age is ${min}`)
// the minimum age is 19
let i = sorted.length - 1
let max = sorted[i];
console.log(`the max age is ${max}`)
//the max age is 26



let j = sorted.length - 1;

let indexx = (j + 1) / 2

let firstValue = sorted[indexx]
console.log(`first Value for median is ${firstValue}`)
// first Value for median is 24
let secondValue = sorted[indexx + 1]
console.log(`second Value for median is ${secondValue}`)
// second Value for median is 24
let median = (firstValue + secondValue) / 2;
console.log(`the median of ages is ${median}`)
// the median of ages is 24
console.log('-----------')
let sum = 0;

for (let x of sorted) {

    let newx = x;
    sum = sum + newx;


}
let avgAge = Math.floor(sum / (j + 1));
console.log(` the avarage age is ${avgAge}`)
// the avarage age is 22

let range = max - min
console.log(`range of the ages is ${range}`)
// range of the ages is 7



let comapre1 = Math.abs(min - avgAge);
console.log(`comparing min-average ages and getting this answer using abs() method ${comapre1}`)
// comparing min-average ages and getting this answer using abs() method 3


let comapre2 = Math.abs(max - avgAge);
console.log(`comparing max-average ages and getting this answer using abs() method ${comapre2}`)
// comparing max-average ages and getting this answer using abs() method 4




// 28. Use for loop to iterate from 0 to 100 and print only prime numbers
let count = 0
let x, y
let primearr = []
for (y = 2; y <= 100; y++) {
    for (x = 1; x <= y; x++) {
        if (y % x == 0)
            count++

    }

    if (count == 2)

        primearr.push(y)
    count = 0



}
console.log(primearr)

/*
[
   2,  3,  5,  7, 11, 13, 17, 19,
  23, 29, 31, 37, 41, 43, 47, 53,
  59, 61, 67, 71, 73, 79, 83, 89,
  97
]
*/




// 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let p;
let evensum = 0
let oddsum = 0

for (p = 0; p <= 100; p++) {
    if (p % 2 == 0) {

        evensum = evensum + p;

    }
    else {
        oddsum = oddsum + p;
    }
}
console.log(`the sum of even numbers from 0-100 is ${evensum}`);
console.log(`the sum of odd numbers from 0-100 is ${oddsum}`)

// the sum of even numbers from 0-100 is 2550
// the sum of odd numbers from 0-100 is 2500




// 30. Write a script which generates a random hexadecimal number.

const getRanHex = size => {
    let result = [];
    let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

    for (let n = 0; n < size; n++) {
        result.push(hexRef[Math.floor(Math.random() * 16)]);
    }
    return result.join('');
}

console.log(getRanHex(1));
// e




// 31. Sort the webTechs array and mernStack array
// countries Array : https://gist.github.com/incredimike/1469814

let webTech = ['html', 'css', 'javascript', 'react', 'tailwind', 'mongodb', 'redux', 'express'];
let mernStack = ['mongodb', 'express', 'redux', 'react', 'nodejs']
console.log(webTech.sort());

/*
[
  'css',
  'express',
  'html',
  'javascript',
  'mongodb',
  'react',
  'redux',
  'tailwind'
]
*/
console.log(mernStack.sort())

// [ 'express', 'mongodb', 'nodejs', 'react', 'redux' ]





// 32. Array Questions
// - Extract all the countries contain the word 'land' from the countries array and print it as array
// - Find the country containing the hightest number of characters in the countries array
// - Extract all the countries contain the word 'land' from the countries array and print it as array
// - Extract all the countries containing only four characters from the countries array and print it as array
// - Extract all the countries containing two or more words from the countries array and print it as array
// - Reverse the countries array and capitalize each country and stored it as an array


const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands"
];

let landcountry =[]
for(let i of countryList){
     if(i.includes('land')){
        landcountry.push(i);
     }

}
console.log(landcountry)
/*
[
  'Bouvet Island',
  'Cayman Islands (the)',
  'Christmas Island',
  'Cocos (Keeling) Islands (the)',
  'Cook Islands (the)',
  'Falkland Islands (the) [Malvinas]',
  'Faroe Islands (the)',
  'Finland',
  'Greenland',
  'Heard Island and McDonald Islands',
  'Iceland',
  'Ireland',
  'Marshall Islands (the)',
  'Netherlands (the)',
  'New Zealand',
  'Norfolk Island',
  'Northern Mariana Islands (the)',
  'Poland',
  'Solomon Islands',
  'South Georgia and the South Sandwich Islands',
  'Switzerland',
  'Thailand',
  'Turks and Caicos Islands (the)',
  'United Kingdom of Great Britain and Northern Ireland (the)',
  'United States Minor Outlying Islands (the)',
  'Virgin Islands (British)',
  'Virgin Islands (U.S.)',
  'Åland Islands'
]
*/

// - Find the country containing the hightest number of characters in the countries array
let longest = countryList.sort((a,b) => b.length - a.length)[0];
console.log(longest)
// United Kingdom of Great Britain and Northern Ireland (the)

// - Extract all the countries containing only four characters from the countries array and print it as array
for(let i of countryList){
    if(i.length==4){
        fourarr.push(i)
    }
}console.log(fourarr)

/*
[
  'Chad', 'Cuba',
  'Fiji', 'Guam',
  'Iraq', 'Mali',
  'Niue', 'Oman',
  'Peru', 'Togo'
]
 */


// - Extract all the countries containing two or more words from the countries array and print it as array
// - Reverse the countries array and capitalize each country and stored it as an array
