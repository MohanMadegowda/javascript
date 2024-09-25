//numbers
//numbers can be write with or without decimals

// let x = 3.14;
// let y = 3;
// console.log(x + " " + y);


// let x1 = 123e5;
// let y1 = 123e-5;
// console.log(x1+ "  " + y1);

//integer precision
// //15 digit

// let x3 = 999999999999999;
// let y3 = 9999999999999999;
// console.log(x3+ "  " + y3);


// //floting precision
// //floting poiny arthametic is not always 100% accurate
// let x4 = 0.2 + 0.3;
// console.log(x4);


//adding numbers and strings

//adding numbers

let num1 =" 2";
let num2= "3";
let num3 = num1 + num2;
console.log(num3);

//NaN not a number
let r = 100/ 'apple';
console.log(isNaN(r));



//hexa decimal
let t = 0xFF;
console.log(t)

//object numbers

let u = 123;
let u2 = new Number(123);
console.log(typeof u +" " + typeof u2);
