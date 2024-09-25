//let and const



function num(){  
    var a = 10; 
    console.log(a);
}
num();


console.log(b);
var b = 20;


// let d = 2;
var b = 4;
var b = 22;
var b = 66;
// var b = 77;
console.log(b)



// const f = 89;
//  f =1000;
// console.log(f);


let n = 23;
n = 22;
console.log(n);


var i =8;
i = 99;
console.log(i);




//block scope
let v = 18;
{
var h= 12;
let v = 78;
const k = 99;
console.log(h);
console.log(v);
console.log(k);
}
console.log(v);
// console.log(v);
// console.log(k);


{let r1 = 23;
}
console.log(r1);



let r2 =2;
{
    var r1 =9;
}



{
    let  g2 = 33;
    var h1 = 22;
    const j = 66;
}
console.log(h1);




//shadow
// let w1 = 29;
// {
//     var w1 =7;
// }
// console.log(w1);


let w1 = 29;
{
    let w1 =7;
    console.log(w1);
}


var w2 = 29;
{
    let w2 =7;
}
console.log(w1);




const w3 = 299;
{
    let w3 =73;
}
console.log(w3);




const w4 = 2779;
{
    const w4 =723;
    console.log(w4);

}





let x2 = 3;
function getName(){
    console.log("Namaste");
}
console.log(x2);
getName();


//
//undefined
let x;
console.log(x);

//not defined
// console.log(x3);




//call function
let x4 = 44;
function number(num){
    console.log(num);
}
// number(x4);
number(66);
number(99);




//nested scope
function outer(){
    let outVariable = 111111;
   

    function inside(){
        let innVariable = 222222;

        console.log(outVariable);
        console.log(innVariable );
       

    }
    inside();
    // console.log(outVariable);  // exicutable
}
outer();




var fruit = "apple";
{
    var fruit = "orange";
    // console.log(fruit);
}
console.log(fruit);



let fruit1 = 'app'
{
    let fruit1 ="orra"
    console.log(fruit1);
}
console.log(fruit1);


// let w = 1;
// let w = 3;
// console.log(w);




// let z =3;
// let z ;
// console.log(z);



var u = 100;
{
    var u =-1;
}
{
    let u =v;
}
{
    let v = -200;
}
console.log(v);