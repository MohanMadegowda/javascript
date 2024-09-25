function add(a, b){
    return sum = a+b;
}
console.log(add(3, 4));



//local variables

function multiply(){
    let x= 8;
    console.log(x);
}
multiply();



//global
let n = 67;
function v(){
    console.log(n);//accessible
}
v();//output
console.log(n);//output


//function statement
function g(){
    console.log("hi manvi");
}
g();



//function expression
let game = function(){
    console.log("expression");
}



//anonymous function
const k = function l(){
    console.log(l);
}
k();



let j = 29;
function x(){
    let p = 99;
    // console.log(j);
    console.log(p);
}
x()
console.log(j);



let counter = 10;
(function(){
    let count= 5;
    console.log(count);
})();
console.log(counter);





//functions are objects
function non(x, y,z){
    return arguments.length;
}
console.log(non(4,5,9));2




function no(h,i){
    return h*i;
}
console.log(no.toString());




//arrow functions
add= (t, u) => t*u;
console.log(add(70, 10));



function Person(){
    this.age =0;
    setTimeout(()=>{
        this.age++;
        console.log(this.age);
    },1000);
}
const person= new Person();
const person2= new Person();



//generator function
function* generator(){
let i = 0;
while (true){
    yield i++;
}
}
const gen = generator();
console.log(gen.next().value);



//using loop
function* rangeGenerator(start, end){
    for(let i = start; i<= end; i++){
        yield i;
    }
}
const range = rangeGenerator(1, 5);
for(const num of range){
    console.log(num);
}




//higher order function
const radius = [3, 1, 2, 4];

const area = function (radius){
    return Math.PI*radius*radius;
};
const areas = radius.map(area);
console.log(areas);


//circumference
const circumference = function(radius){
    return 2 *Math.PI*radius;
};
const cir = radius.map(circumference);
console.log(cir);


//diameter
const diameter = function(radius){
    return 2 *radius;
};
const dia = radius.map(diameter);
console.log(dia);




const radiuss = [3, 1, 2, 4];

const area1 =  (radiuss)=> {
    return Math.PI*radiuss*radiuss;
};

//circumference
const circumference1 = function(radiuss){
    return 2 *Math.PI*radiuss;
};

//diameter
const diameter1 = function(radiuss){
    return 2 *radiuss;
};

const calculate1 = function(radiuss, logic){
    const output1 = [];
    for(let i=0; i<radiuss.length; i++){
        output1.push(logic(radiuss[i]));
    }
    return output1;
}
console.log(calculate1(radiuss, area1));
console.log(calculate1(radiuss, circumference1));
console.log(calculate1(radiuss, diameter1));





const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddNumbers = arr1.filter(num=> num% !2==0);
console.log(oddNumbers);