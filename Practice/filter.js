//filter method
//filter method create a new array with all the elements that pass a test or condition
//it does not modify the original array, it returns a new filtered array


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = numbers.filter(num => num % 2==0);
console.log(evenNumbers);





const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddNumbers = number.filter(num => num % 2 !==0);
console.log(oddNumbers);