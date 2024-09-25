setTimeout(() => {
    console.log("my name is manvi");
} ,1);

setTimeout(() => {
    console.log("my name is manvi 2");
} ,0);

console.log("hi...");



function addNumbers(a, b) {
    return sum = a + b;
}
console.log(addNumbers(2, 3));







const numbers1 = [ 1, 2, 3, 4, 5];
const multiply1 = numbers1.map(function(num){
    return num*2;
});
console.log(multiply1);




const number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumber = number1.filter(function(num){
    return num % 2 == 0;0000000000000000000

})
console.log(evenNumber);




const number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddNumber = number2.filter(function(num){
    return num % 2 !== 0;
})
console.log(oddNumber);



let num = [1, 2, 3, 4, 5, 6,7,];
for(let i=0; i<num.length; i++){
    console.log(num[i]*2);
}

//reduce
const number5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum2 = number5.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum2);


//multiline
const multiline = `this is first line.
this is second line.
this is third line.`
console.log(multiline);


//default
function calculate(a=5, b=3){
    return a*b;

}
console.log(calculate());
console.log(calculate(3, 4));
console.log(calculate(7, 8));


//destructive assignmets
const fruits = [ "mango", "apple", "kiwi"];

let [a, b, c] = fruits;
console.log(a, c);

function getMobile(manufacturer, model, year){
    return {
        manufacturer,
        model,
        year
    }
}

console.log(getMobile("samsung", "galaxy", 2024));



function greet(name){
    return `hello ${name}`;
}
console.log(greet("MG"));



const greet1 = function(name){
    return `hi ${name}`;
}
console.log(greet1("mohan"));



const number3 = [ 22, 44, 55, 2, 4,77, 55,9];
const maxNum = Math.max(...number3);
console.log(maxNum);



const number4 = [ 22, 44, 55, 2, 4,77, 55, 999];
let max = number4[0]
for(let i=0; i<number4.length; i++){
    if(number4[i]> max){
        max= number4[i];
    }
}
console.log(max);




const number8 = [ 22, 44, 55, 2, 4,77, 55, 999];
const maxi = number8.reduce((maxi, current) => current > maxi ? current : maxi, number8[0]);
console.log(maxi)



const number9 = [ 22, 44, 55, 2, 4,77, 55, 999];
const even = Math.min(...number9);
console.log(even);



function add(a, b, c){
    return c = a+b;
}
console.log(add(2, 1));



//iife
const counter = 10;
(function() {
const counter= 0;
    console.log(counter )
})();
console.log(counter);



function* generete(){
    let num=5;
    while(num<=10){
        yield num;
        num++
    }
}
const gen = generete();
for(const number of gen){
    console.log(number);
}


//using filter
const num5 = [ -1, 2, -4, 5, 6, 7, -8, -9, -2, 8];
const negNum = num5.filter(num => num<0);
console.log("negetive:",negNum);


const num6 = [ -1, 2, -4, 5, 6, 7, -8, -9, -2, 8];
const posNum = num5.filter(num => num>0);
console.log("Positive:",posNum);






function greetings(name, callback){
    console.log(`hello, ${name}!`);
    callback();
}
function call(){
    console.log("how are you.?");
}
greetings("manvi", call);



const numb = [10, 23, 35, 47, 58, 68];
const double = numb.map(num=> num*2);
console.log(double);


const numb1 = [10, 20, 30, 40, 50, 60];
const newnum = numb1.map((num, index)=> num +index);
console.log(newnum);
