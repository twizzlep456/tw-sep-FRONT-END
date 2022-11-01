
//how to create variables//

var fname="twilight";  //fname is identifier
let lname="matsikenyiri"
//what are key words in js//

// keywords are predefined words in programming
//.var,console.function,if , for ,while e.t.c

//what are identifiers?
 //words used to identify.

 function add(a,b){
    return a+b;
 }
 add(2,4)

 //parameters =>what functions expects from a caller 
 //arguments => what caller passes to functiond while calling them.


 function print(greeting, message){
   console.log(greeting+message);
 }
 print("Hello","How are you ?")

 //a,b identifier
 //function and return are keywwords
 //add identifier

 //what are datatypes?
 // strings,numbers, boolean ,undefined 

 //indicates type of data

 //Dynamically typed =>JS , python
 var x =10;
 var isTrue= true

 //to find out data types of a variable

 console.log(typeof x);
 var isTrue= true;
 console.log(typeof isTrue);

 //objects
 //stores data in key:value pair

 var employee= {id:1,name:"John Doe", age:35}
 console.log(employee);
 console.log(typeof employee)

 //undefined
 var z=undefined;

 console.log(z)
 console.log(typeof z)

//Data types
//numbers,boolean, string ,function,object, and undefined

// boolean

var isEven = 5%2==0;
console.log(isEven)

//create a function to multiple first 2 nukmbers and devide result by 3rd number 

function calexpression(num1, num2,num3){
   
   const firstREsult= num1*num2
   const secondResult=firstREsult/num3
   console.log(secondResult);

}
  calexpression(4,5,2)

  
