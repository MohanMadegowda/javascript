//reduce 
//method executes a reducer fuction for array element
//method returns a single value
//method does not execute the function for empty array element
//method does not change the original array


const numbers = [ 101, 102, 103];
function myFunction(total, num) {
    return total + num;
}
console.log(numbers.reduce(myFunction));





const number =[ 15.5, 2.3, 1.1, 4.7];
console.log(number.reduce(getSum, 0));

function getSum(total, num) {
    return total + Math.round(num);
}







const number1 = [1, 2, 3, 4, 5, 6, 7, 8,9];
const sum = number1.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum);