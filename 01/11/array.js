//array is a collection od values 
// eg array of numbers 

// aray collecton of numbers 

var numbers = [10, 20, 30, 40, 50, 60, 70];

//array of strings 
var names =["Jake", "Khushbho", "Osborne", "Robbie", "Simon"];

//Array of values of different data  types 
var mixedArray = [10, 20, "Jake", true, undefined, false, (x)=>(x+x)];

//hOw to read /access values from Array 
//using index positions 
 //console.log(mixedArray(1));




//how to add new element in Array.(at the end of array)
numbers.push(80);
console.log(numbers);

//how to remove an emelmt from array ,end of array
numbers.pop();
console.log(numbers);

//how to  add element from start of e array
numbers.unshift(80);
console.log(numbers);

//how to remove elemt from start of the array 
numbers.shift();
console.log(numbers);

//how to add an elemrnt at index 3
numbers.splice(3, 0, 100);
console.log(numbers);

//how to delete an element from imdex 2 
numbers.splice(2, 2, -30, - 100);
console.log(numbers);


//how to find an elemt in array

// fucntion findHelper(num){
//     return num==40
// }

//takes fucntion as parameter. calls that fucntion for each element in array
const result = numbers.find(num=>num==40);
console.log(result);

//how to find multiple elements.

const filterResult = numbers.filter(num=> num>50);
console.log(filterResult);



const filterNameResult = names.filter((name)=> {return name.includes('b')});

console.log(filterNameResult);

const namesResult = names.filter((username)=>{
    for(let i= 0; i<username. length; i++){
        if(username)
    }
}

)

