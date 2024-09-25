//array search methods

// array indexOf()
//array lastIndexOf()
//array includes()

//array find()
//array findIndex()
//array findLast()
//array findLastIndex()


//array indexOf()
//this method searches an array for an element value and returns its position.
const fruits = ["apple", "orange", "kiwi", "mango"]
console.log(fruits.indexOf("kiwi"));


//array LastIndexOf()
const day = ["sun", "mon","tue", "wed", "thu", "fri", "sat"];
const days = day.lastIndexOf("wed");
console.log("your element found in;", days);


//array includes()
const day1 = ["sun", "mon","tue", "wed", "thu", "fri", "sat"];
const days1 = day1.includes("sat");
console.log("your element found:", days1);




//array find()
const num = [12, 34, 43, 52, 46, 32, 28, 39]
let num1 = num.find(myFunction);
 function myFunction(value) {
    return value > 30;
 }
 console.log(num1);




 //array findIndex()
 //method returns  the index of the first array element that passes a test function
 const num2 = [12, 34, 43, 52, 46, 32, 28, 39]
let num3 = num2.findIndex(myFunction);
 function myFunction(value) {
    return value > 40;
 }
 console.log(num3);





 //array findLast()
 const temp = [27, 47, 40, 42, 45, 47];
 let high = temp.findLast(x => x > 27);
 console.log(high);



 //array findLastIndex()
 const temp1 = [27, 47, 40, 42, 45, 47];
 let high1 = temp1.findLastIndex(x => x > 40);
 console.log(high1);