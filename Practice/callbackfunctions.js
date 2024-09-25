//callback functions
//a callback is a function passed as an arguement to another function
//this technique allows a function to call another function
// a callback function can run after another function has finished


function myDisplay(some) {
    console.log(some);
}
function myFirst(){
    myDisplay("hello");
}
function mySecond() {
    myDisplay("Manvi");
}

myFirst();
mySecond();





//sequence control
 function myDisplayer(something) {
    console.log(something);
 }

 function myCalculator(num1, num2) {
    let sum = num1 +num2;
    return sum;
 }

 let result = myCalculator(5, 5);
 myDisplayer(result);



//another way
 function myDisplayer1(something) {
    console.log(something);
 }

 function myCalculator1(num3, num4) {
    let sum1 = num3 +num4;
    myDisplayer1 (sum1);
 }

 myCalculator1(5, 10);





 //callback function
 function mydisplayer2(something1){
    console.log(something1);
 }
 function myCalculator2(num5, num6, myCallback) {
    let sum3 = num5 +num6;
    myCallback(sum3);
 }
 myCalculator2(100, 100, mydisplayer2);




 //remove negitive numbers
 const myNumbers = [4, 1, -20, -7, 5, 9, -6];
 const posNumbers = removeNeg(myNumbers, (x) => x >=0);
 console.log(posNumbers);

 function removeNeg(numbers, callback) {
    const myArray = [];
    for(const x of numbers){
        if(callback(x)) {
            myArray.push(x);
        }
    }
    return myArray;
 }




 //remove positive numbers
 const myNumber = [1, -2, 3, -4, 5, -6, 7, -8, 9];
 const negNumbers = removePos(myNumber, (x) =>x <=0);
 console.log(negNumbers);

 function removePos(numbers, callback){
 const myArray = [];
 for(const x of numbers) {
    if(callback (x)) {
        myArray.push(x);
    }
 }
 return myArray;
}




const greet = (name) => {
    return `Hello, ${name}!`;
};
console.log(greet("Charlie")); 




const counter = 10;

(function() {
    const counter = 5; 
    console.log(counter); 
})();

console.log(counter); 





function* simpleGenerator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const generator = simpleGenerator();

console.log(generator.next()); 
console.log(generator.next()); 
console.log(generator.next()); 
console.log(generator.next()); 



//higher order functions
function greet2(name, callback) {
    console.log(`hello, ${name}`);
   callback();
}
function goodBye() {
    console.log("Goodbye");
}
greet2("mohan", goodBye);