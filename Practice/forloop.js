//javascript loops

//loops can execute a block of code a number of times

// for loop
// for in loop
//for of loop
//while loop
//while do loop




//for loop
//for loop through a block of code a number of times

//syntax
//for(initialisation; condition; increment operatir){}


for(let i=0; i<10; i++){
    console.log("mohan", i);
}



for(let i=10; i>0; i--){
    console.log("mohan", i);
}


const num = [1, 3, 4, 6, 7, 8, 9, 2, 22, 33, 44, 55, 66, 77];
for(let i =0; i<num.length; i++){
    if(num[i] % 2 == 0){
        console.log("even:", num[i]);
    }
    else if(num[i] % 2 !== 2){
        console.log("odd:", num[i]);
}
}




const cars = ["bmw", "audi", "volvo"];
let i =2;
let len = cars.length;
let text = "";
for(; i<len; i++){
    text += cars[i] + "<br>";
}
console.log(text);




