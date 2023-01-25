__What is Programming ?__
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

*there are three keywords that are used to declare a variable that are **VAR LET CONST.***


**3. operation/ Operator**

**It** is used to perform different mathamtical and logical actions.

*There are three type of operation  __arithmetic, logical, and relational__*

eg: +,-,*,/,%,++,-- and so on ...


**4. Decision**

**It** allows the program to make a Choice.


___**if, else, else if**___ are used to execute a specified block of code if the condition is true.
    
    
    if(condition){
        statment;
    }
``
`` 
       
       
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

>switch used to select one of many blocks of code to be executed.


   
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

___break___ it is used to come out of switch case.


Differnce between if else and switch block: 

If-else statment is used to choose between two options.

but switch case statment is used to choose between number of options.

___**Non-Primitive data Types**___  used to store multiple values.

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

__1. length =__  It is used to return the total length of array.

__2. push() =__  it is used to push element into an array at the end.
***push() method changes the length of the array.***


__3. pop() =__  it is used to delete the last element of an array.
***pop() method changes the original array.***
***push() method returns the new length.***

__4. slice(starting index, end index+1) =__ it is used to get array elements from given statring index upto end index. End index will be excuded.

__slice() method does not change the original array.__

__5. splice(starting index, how many values to modify, value1 ,value2, value n) =__ it is used to modify an array with values and also used to delete the values based on the values to modify if it is 0 then value will not be deleted only added in array but if that same value is more than zero than based on that value will be deleted.

**splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.**

***splice(start)***

***splice(start, deleteCount)***

***splice(start, deleteCount, item1)***

***splice(start, deleteCount, item1, item2, itemN)***


__splice() method overwrites the original array.__

    const arr= [ 1, 2, 3, 5, 6]
    arr.splice(2, 0, 'deepak', 'malik')

    output:- [1, 2, 'deepak, 'malik', 3, 5, 6]

    arr.splice(2, 2, 'deepak', 'malik')

    output:- [1, 2, 'deepak, 'malik',6]


__6. concat() =__ used to concatenate two different arrays.

        const arr1 = [1,2,3]
        const arr2 = [4,5,6]
        const arr3 = [7,8,9]

        const arr = arr1.concat(arr2,arr3)

        output:- [1,2,3,4,5,6,7,8,9]

__concat() method returns a new array, containing the joined arrays.__

__concat() method does not change the existing arrays.__

__7. sort() =__  sorts the elements as strings in alphabetical and ascending order.

***sort() overwrites the original array.***

__8. reverse() =__ used to reverse the array values. 

__reverse() method overwrites the original array.__

__9. map() =__  map() creates a new array from calling a function for every array element. it also calls a function once for each element in an array.It does not execute the function for empty elements.

__map() does not change the original array.__

__10. shift() =__ It is used to remove starting value of an array. 
 
 __shift() method changes the original array.__

__shift() method returns the shifted element.__


__11. unshift() =__ it is used to adds new elements to the beginning of an array.

**unshift() method overwrites the original array.**

__12. split() =__ it splits a string into an array of substrings.If (" ") is used as separator, the string is split between words.

**split() method returns the new array.**
**split() method does not change the original string.**

**toString() method does not change the original array.**

__13. indexOf() =__ it returns the first index (position) of a specified value.it also returns -1 if the value is not found.it starts at a specified index and searches from left to right.

__14. copyWithin() =__ it copies array elements to another position in the array.

**copyWithin() method overwrites the existing values**
__copyWithin() method does not add items to the array.__

__15. includes() =__ it returns true if an array contains a specified value.
otherwise returns false if the value is not found.It is also case sensitive.

__16. toString() =__ it convert array into string.

        let arr =['deepak', 'malik', 'maa'];

        console.log(arr.toString());

        output:- deepak, malik , maa

    
**Math Object methods** 

__*Every object have it's own property and methods.__



        