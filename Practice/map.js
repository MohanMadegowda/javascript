//map
//creats a new array by applying function to each element of original array
//it does not modify a original array


const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num *2);
console.log(doubled);



const number =[4, 9, 16, 25, 36, 49];
const square = number.map(Math.sqrt);
console.log(square);



const number2 =[4, 9, 16, 25, 36, 49];
console.log(number2.map(Math.sqrt));



const num1 = [3, 4, 6, 7, 8, 9, 2];
const newArr = num1.map(myFunction);

console.log(newArr);
function myFunction(num) {
    return num *10;
}