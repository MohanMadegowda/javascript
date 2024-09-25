//find even numbers
const num = [12, 34, 43, 52, 46, 32, 28, 39, 69,78];
const evenNumbers = findEvenNumbers(num);

function findEvenNumbers(array) {
    return array.filter(num =>num % 2 == 0);
}
console.log(evenNumbers);



//find add numbers
const num1 = [12, 34, 43, 52, 46, 32, 28, 39, 69,78];
const oddNumbers = findOddNumbers(num1);

function findOddNumbers(array) {
    return array.filter(num =>num % 2 !== 0);
}
console.log(oddNumbers);