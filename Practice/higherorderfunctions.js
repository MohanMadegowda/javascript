//higher order functions
// take other functions as arguements
//return their functions as result


function greet(name, callback){
    console.log(`hello, ${name}`);
    callback();
}
function bye(){
    console.log('Good bye');
}
greet("mohan", bye);






////using map()
const number = [1, 2, 3, 4, 5, 6];
const doubled = number.map(function(num) {
    return num*2
});
console.log(doubled);



//using filter()
//even numbers
const number1 =[1, 2, 4, 5, 6, 7, 8, 9];
const evenNumbers = number1.filter(function(num) {
    return num% 2==0;
})
console.log(evenNumbers);




//odd numbers
const number2 =[1, 2, 4, 5, 6, 7, 8, 9];
const oddNumbers = number2.filter(function(num) {
    return num% 2 !==0;
})
console.log(oddNumbers);



// using reduce()
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(function(total, current){
    return total+current;
});
console.log(sum);