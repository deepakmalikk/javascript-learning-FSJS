**What is Programming ?**

- When th program start taking decision based on the condition.

**Basic Of any Programming language**

1. Value
2. variable
3. operation
4. Decision
5. function
6. Loop

**1. Value**

**It** is the representation of some entity that can be manipulated by a program.

eg: 80 , 'deepak' ansd so on...

**2. variable**

**It** is used to store the value.

eg: a = 80, name = 'deepak'

\*there are three keywords that are used to declare a variable that are **VAR LET CONST.\***

**3. operation/ Operator**

**It** is used to perform different mathamtical and logical actions.

_There are three type of operation **arithmetic, logical, and relational**_

eg: +,-,\*,/,%,++,-- and so on ...

**4. Decision**

**It** allows the program to make a Choice.

**\_**if, else, else if**\_** are used to execute a specified block of code if the condition is true.

    if(condition){
        statment;
    }

`
`

    if(condition1){
        statment1;
    }
    else if (condition2) {
        statment2;
    }
    else{
        statment3;
    }

**Ternary Operator**

    condition ? statment1 : statment2 ;

    If condition is true then statment1 will execute. Otherwise, statment2 will execute.

**Switch statment**

> It is used to choose one option from multiple cases.

> switch used to select one of many blocks of code to be executed.

    switch(expression){

     case 'one':
            statment1;
             break;
     case 'two':
            statment2;
             break;
     default:
            statment ..;
              break;
    }

**_break_** it is used to come out of switch case.

Differnce between if else and switch block:

If-else statment is used to choose between two options.

but switch case statment is used to choose between number of options.

**\_**Non-Primitive data Types**\_** used to store multiple values.

**Array** it is used to store muliple values of different data types.

    const arr = [1, 'deepak', true]

array works based on index and that index will start from 0.

**object** it is also used to store multiple values based on key value pair.

    let obj = {
    key: value,
    //example
    name: 'deepak',
    age: 22,
    phn: 8296374058,
    admin: true
    }

**Array Methods**

**1. length =** It is used to return the total length of array.

**2. push() =** it is used to push element into an array at the end.
**_push() method changes the length of the array._**

**3. pop() =** it is used to delete the last element of an array.
**_pop() method changes the original array._**
**_push() method returns the new length._**

**4. slice(starting index, end index+1) =** it is used to get array elements from given statring index upto end index. End index will be excuded.

**slice() method does not change the original array.**

**5. splice(starting index, how many values to modify, value1 ,value2, value n) =** it is used to modify an array with values and also used to delete the values based on the values to modify if it is 0 then value will not be deleted only added in array but if that same value is more than zero than based on that value will be deleted.

**splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.**

**_splice(start)_**

**_splice(start, deleteCount)_**

**_splice(start, deleteCount, item1)_**

**_splice(start, deleteCount, item1, item2, itemN)_**

**splice() method overwrites the original array.**

    const arr= [ 1, 2, 3, 5, 6]
    arr.splice(2, 0, 'deepak', 'malik')

    output:- [1, 2, 'deepak, 'malik', 3, 5, 6]

    arr.splice(2, 2, 'deepak', 'malik')

    output:- [1, 2, 'deepak, 'malik',6]

**6. concat() =** used to concatenate two different arrays.

        const arr1 = [1,2,3]
        const arr2 = [4,5,6]
        const arr3 = [7,8,9]

        const arr = arr1.concat(arr2,arr3)

        output:- [1,2,3,4,5,6,7,8,9]

**concat() method returns a new array, containing the joined arrays.**

**concat() method does not change the existing arrays.**

**7. sort() =** sorts the elements as strings in alphabetical and ascending order.

**_sort() overwrites the original array._**

**8. reverse() =** used to reverse the array values.

**reverse() method overwrites the original array.**

**9. map() =** map() creates a new array from calling a function for every array element. it also calls a function once for each element in an array.It does not execute the function for empty elements.

**map() does not change the original array.**

**10. shift() =** It is used to remove starting value of an array.

**shift() method changes the original array.**

**shift() method returns the shifted element.**

**11. unshift() =** it is used to adds new elements to the beginning of an array.

**unshift() method overwrites the original array.**

**12. split() =** it splits a string into an array of substrings.If (" ") is used as separator, the string is split between words.

**split() method returns the new array.**
**split() method does not change the original string.**

**toString() method does not change the original array.**

**13. indexOf() =** it returns the first index (position) of a specified value.it also returns -1 if the value is not found.it starts at a specified index and searches from left to right.

**14. copyWithin() =** it copies array elements to another position in the array.

**copyWithin() method overwrites the existing values**
**copyWithin() method does not add items to the array.**

**15. includes() =** it returns true if an array contains a specified value.
otherwise returns false if the value is not found.It is also case sensitive.

**16. toString() =** it convert array into string.

        let arr =['deepak', 'malik', 'maa'];

        console.log(arr.toString());

        output:- deepak, malik , maa

**\*Every object have it's own property and methods.**

**Math Object**

It allows to perfom mathmatical tasks on number.

Unlike other objects, the Math object has no constructor.

The Math object is static.

All methods and properties can be used without creating a Math object first.

**Math Property**

**_syntax for any Math property is :_** **Math.property.**

**1. PI =** used to perform pi operation.

    const pi= Math.PI
    console.log(pi)
    //3.1444

**Math Methods**

**_syntax for any Math method is :_** **Math.method(number)**

**1. round() =** It return nearest integer to a number.

eg:-

    console.log(Math.round(3.14))

    //3

**2. ceil() =** It return the smallest integer greater than or equal to number.

eg:-

    console.log(Math.ceil(3.14))

    //4

**3. floor() =** It return the largest integer less than or equal to number.

eg:-

    console.log(Math.floor(3.14))

    //3

**4. min() =** It return the smallest number among all the numbers.
eg:-

    console.log(Math.min(3,4,5))

    //3

**5. max() =** It return the largest number among all the numbers.

eg:-

    console.log(Math.max(3,4,5))

    //5

**6. sqrt() =** used to perform square root of numbers.

eg:-

    console.log(Math.sqrt(4))

    //2

**7. abs() =** it return the absloute positive value.

eg:-

    console.log(Math.abs(-4))

    //4

**8. pow() =** Returns base x to the exponent power y (that is, xy).

eg:-

    console.log(Math.pow(2,2))

    console.log(Math.pow(3,2))

    //4
    //9

**9. random() =** used to generate random number from 0 to 0.99999

    eg:-

    console.log(Math.random())
    //0.9845647
    //everytime output will be differnet

**10. sin() =** Returns the sign of the x, indicating whether x is positive, negative, or zero.

    eg:-

    console.log(Math.sin(0))
    //0

**5. Loop** It is used to ittrate/repeat block of code.

**\_**for loop :-**\_** It repeats until a specified condition evaluates to false.

**Syntax :-**

    for(initalization; condition; incr/decr){

        //code
    }

**\_**While loop :-**\_** while statement creates a loop that executes a specified statement **as long as** the test condition evaluates to true.

**Syntax :-**

    while(condition){

        //code
    }

**\_**Do While loop :-**\_** do...while statement creates a loop that executes a specified statement **until** the test condition evaluates to false.It will execute once even the condition is false.

**Syntax :-**

    do{

        //code
      }while(condition)

**\_**For of loop :-**\_** This loop is used for array itteration.it iterates and logs values that iterable , as an array.Instead of used normal for loop for an array we can use it. Everytime it will ittrate through an array one by one.

**Syntax :-**

    for(let variable_name of array_name){

        //code
    }

**6. functions** functions are used to make code reusable.It is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).
function code is clean and easy to read code.

**function keyword is used to create function.**

**Syntax :-**

    //function defination
    function name_of_function (){

        //code

    }
    //function call
    name_of_function();

function with parameters

    function name_of_function (parameters){

        //code

    }
    name_of_function(argumnets)

**when you don't know how many arguments we use ...(spread operator)**

    function name_of_function (...args){

        //code

    }
    name_of_function(argumnets1,arg2,arg3,arg N)

**_function returning something_**

**return is use to get value from function so that you can use that value and work further with the same**

    function name_of_function (){

        //code

        return x;

    }
    let hold_x = name_of_function()

**Arrow Function**
it Return Value by Default. Arrow functions cannot be used as constructors.

**Syntax :-**

    //function defination
     let fun = () => {

        //code

    }
    //arrow function call
    fun()

**Truthy value and falsy value**

**truthy value :-** A truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. That is, all values are truthy except false , 0 , -0 , 0n , "" , null , undefined , and NaN.

**falsy value :-**
A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.

**Date Object**
it is used to work with dates and times.

We have to use date consturctor to get acess to all methods of date object.

**Syntax :-**

    let date = new Date()

    console.log(date.getMinutes)

**Functional Programming**

**_HOF (High Order Function)_** :- When a function takes another function as an argument and return a function is know as High order function.

**1.) Callback()** :- when a function is passed as parameter then it is know as callback.

**_Ex:-_**

    let arr =[1,2,3,4]
    let isEven =(ele)=>{
        return ele % 2 == 0;
    }
    var result=  arr.every(isEven)
    <!-- here isEven is passed as parameter to every High order function -->

**2.) forEach()** :- It takes a function in it and will irttrate over an array.But it is not able to modify the array.
**_Ex:-_**

    let arr =[1,2,3,4]
    arr.forEach((element)=>{
        console.log(element)
    })
    <!-- It will print all the elements -->

Other syntax of forEach that also help in getting element value, index value as well as array at the same time

**_Ex:-_**

    let arr =[1,2]
    arr.forEach((elemnt,value,array)=>{
        console.log(elemnt,value,array)

    })
    <!-- o/p :-  1 , 0 , [1,2]
                 2 , 1 , [1,2]
    -->

**3.) setTimeout()** :- This function will take function and time as a parameter.It will execute specified block of code or function after counter time completes.THis function is used when we want an output after certain time.

**_Ex:-_**

    setTimeout(()=>{
        console.log("hello");
    },3000)

Another syntax example :-

    function test(){
        console.log("Hello from test")
    }

    setTimeout(test,3000);

**4.) setInterval()** :- This function is used when we want our output to come after certain time interval it will follow same pattern untill we clear the Interval time for that we use **clearInterval()** function.

**_Ex:-_**

    setInterval(()=>{
        console.log("hello");
    },3000)

Another syntax example :-

    function test(){
        console.log("Hello from test")
    }

    setInterval(test,3000);

**5.) map()** :- This function is used to itterate through an array and also it will __modify__ the array.


**_Ex:-_**

    let arr =[1, 2, 3]

    arr.map((x)=>{
    x=x-1;
     console.log(x)
    })

    <!-- 
    op:- 
    0
    1
    2 
    -->


**6.) filter()** :- This function is used to filter out particular values based on the function condition given to it.

**_Ex:-_**

   
    let data = [1,2,3,'deepak','malik',true]

    data.filter((value)=>{
   
     console.log(value.length==5)
    })

    <!-- o/p:- 
     false
     false
     false
     false
     true
     false -->

**7.)reduce()** :- This function runs a reducer which will ittrate over array values and return us a single value output. The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous step (this result is the running sum of all the previous steps) — until there are no more elements to add. 


***Synatx*** :-

    reduce((accumulator, currentValue) => { /* … */ })

    reduce((accumulator, currentValue, currentIndex) => { /* … */ })

    reduce((accumulator, currentValue, currentIndex, array) => { /* … */ })

**_Ex:-_**

    let sumarr =[0,1,2,3,4,5,6]

    let sums= sumarr.reduce((acc,cur)=>
        acc+cur,2)
    console.log(sums)

    // 23 = 2+0+1+2+3+4+5+6

   
**8.)every()** :- The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

**_Ex:-_**

    const isBelowThreshold = (currentValue) => {
    currentValue < 40;}

    const array1 = [1, 30, 39, 29, 10, 13];

    console.log(array1.every(isBelowThreshold));

    // Expected output: true




**Changing DATA TYPE**

When we convert value from one date type of to another data type that is called as type casting or data type conversion

**_Ex:-_**

    let a= "2";

    let num = number(a);  // string to number conversion


number to string conversion

    let b= 2;

    let str = string(b);

    OR
     
    let res= b.toString()

****



**DeStructuring** :- It is a process of unpacking the array and assigning each value to different/distnict variables.

**_Ex:-_**

    let arr =[1, 2, 3, 4]

    let [a, b, c, d] = arr

    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)

    <!-- 
    1
    2
    3
    4     -->



**When we want to remove some values**

    let arr =[1, 2, 3, 4]

    let [a, , c, ,] = arr
    console.log(a)
    console.log(c)

    <!-- 1
    3
     -->
     Here 2 and 4 will be removed b/c we haven't assigned any values to it.

**When we have different values in different arrays**

    let fullstack= [['html', 'css', 'js'] ['nodejs', 'mongodb', 'express']]

    let [frontend, backend] = fullstack;

    console.log(frontend)
    console.log(backend)

    <!-- 
    html , css, js 
    nodejs, mongodb, express
    -->


**When we don't know the length of array and we want speicifed values to b assigned rest we don't want**

    let arr =[1, 2, 3, 4, 5, 6]

    let [a,b, ...rest] = arr
    console.log(a)
    console.log(b)
    console.log(rest)

    <!-- 
    1
    2
    [3, 4, 5, 6]
     -->