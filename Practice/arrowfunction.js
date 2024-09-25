//arrow functions
//arrow functions were introduced in es6
//arrow functions allow us to write shorter function syntax

const greeting = function(){
    return"hello mohan...!";
}
console.log(greeting());


 const greet= () => {
    return"hello mohangowda";
}
console.log(greet());


function add(a,b) {
    return a+b;
}
console.log(add(3,4));



const add1 = (m,n) => m + n;
console.log(add1(7,5));



const multiply = (v,u) => v * u;
console.log(multiply(3,4));



const numbers = () => {
    let a1= 23,
    b1 = 12,
    c1= 55;
    const result = a1*b1;
    const result1 = a1+c1;
    const result2 = a1+b1+c1;
    const result3 = a1/b1;
    const result4 = a1/c1;
    const result5= a1*b1*c1;

    return [result, result1, result2, result3, result4, result5];
}

const data = numbers()

// console.log('value: ', data[0])
// console.log('value: ', data[1])
// console.log('value: ', data[2])
// console.log('value: ', data[3])
// console.log('value: ', data[4])
// console.log('value: ', data[5])


for(let i = 0; i < data.length; i++){
    console.log('value: ', data[i])
}


// function Person() {
//     this.age = 0;
  
//     setInterval(() => {
//       this.age++; 
//       console.log(this.age);
//     }, 1000);
//   }
  
//   const person = new Person();
  


const come = (val) => "hello Kashvi " + val;
console.log(come("gowda"));




//multiline string
const multilineString = 
`this is first line.
this is second line.
 this is third line.`
console.log(multilineString);



const d =5,
e =6;
const result = `the sum of ${d} and ${e} is of ${d+e}.
the product of ${d} and ${e} is of ${d*e}`;
console.log(result);



//default value
function calculateArea(width = 10, height = 5) {
    return width * height;
  }
  console.log(calculateArea());          
  console.log(calculateArea(7));         
//   console.log(calculateArea(7, 3));


function man(name = 10, age = 10) {
    return name * age;
  }
  console.log(calculateArea());
  console.log(calculateArea(6, 50));          
  console.log(calculateArea(8, 60));  
  



  function getRandomNumber() {
  return Math.random() * 100;
}

function generateId(id = getRandomNumber()) {
  return `ID: ${id}`;
}

console.log(generateId());  
console.log(generateId(42)); 


const gree = name => {
  const results = "hello manvi";
   const result7 = "hello mohan";
   const result8 = "hello vasu";

return[results, result7, result8];
}
console.log(gree());