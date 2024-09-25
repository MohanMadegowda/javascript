//revision
//javsscript is synchronous single threaded language
// it means java script engine execute code line by line in order top to bottom thats called as synchronous singe threaded language


// var a= 2;
// function square(num) {
// var ans = num*num;
//     return ans;
// }
// console.log(square(a));
// console.log(square(3));
// console.log(square(4));



// const squa= (numb) => numb*numb;
// console.log(squa(5));
// console.log(squa(6));
// console.log(squa(7));




// //variable //functions
// var x = 7;
// function getName(){
//     console.log("Namaste js");
// }
// getName();
// console.log(x);// output namaste js and 7



// getName();
// console.log(x);//output: namaste js and undefined

// var x = 7;
// function getName(){
//     console.log("Namaste js");
// }



// // getName1();
// // console.log(x1);// output: namaste and x is not defined

// // // var x1 = 7;
// // function getName1(){
// //     console.log("Namaste");
// // }


// var x2 = 7;
// function getName2(){
//     console.log("Namaste bmg");
// }
// getName2();
// console.log(x2)
// console.log(getName2())





////how funvctions works in js and variable environment

var x = 1;
a();
b();
console.log(x);
function a() {
    var x = 10;
    console.log(x);
}

function b() {
    var x = 100;
    console.log(x);
}



//undefined
var d ;
console.log(d);

// console.log(g);





//scope chain
let b1 = 101;
function a1() {
    console.log(b1);   
}
a1();



//scope chain
let b2 = 111;
function a2(numn) {
    console.log(numn);   
}
a2(b2);


const a3 = (nummm) =>{
    console.log(nummm);
}
let b3 = 222;
a3(b3)




function a4(){
    let b4 =333;
     c();
    function c(){
        console.log(b4);
    }
   
}
a4();





function p6(){
    
  
    function y(){
        let r6 = 33;
        console.log(r6);
    }
   
    y();
}

p6();



//add 2 numbers 765 and 888

function add(a, b) {
    return sum = a +b;
}
console.log(add(765, 888));

// let s4 =765;
// let s5 = 888;
// let m =7;
// let m1 = 88;
function add3(m, m1){
   
    let sum8 = m+m1;
    console.log(sum8);
}
add3(66,44);

// add1(765,888);
// add1(6,7);



//using filter method odd num
const numbers2 = [1, 2, 3, 4,5 ,6, 7, 8, 9];
const oddNum = numbers2.filter(num => num % 2 !==0);
console.log(oddNum);



//using fuction
const numbers3 = [1,2, 3, 4,5 ,6, 7, 8, 9];
function separateOdd(){
    const oddNumber = numbers3.filter(num=>num %2!==0);
    return oddNumber;
}
console.log(separateOdd());



//using loop
const numbers4 = [1, 2, 3, 4,5 ,6, 7, 8, 9];
function findOdd(){
const oddNumb = [];
for(i=0; i<numbers4.length; i++){
   if(numbers4[i] % 2 !==0){
    oddNumb.push(numbers4[i]);
   }
}
return oddNumb;   
}
console.log(findOdd());


const numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const maximum = Math.max(...numbers5);
console.log(maximum);


const numbers6 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let max = [];
for(i=0; i<numbers5.length; i++){
    if(numbers6[i]>max){
        max =numbers5[i];
    }
}
console.log(max);


let j =1;
j=23;
console.log(j);


function x4(){
        
    for(let i=1; i<=10; i++){
        setTimeout(function() {
            console.log(`2 * ${i} = ${2*i}`);
        },i * 1000);
    }
}
x4();