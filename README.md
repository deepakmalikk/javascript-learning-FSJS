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


