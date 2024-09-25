//conditions
//block of code executed based on the conditions

//"if" block is executed when the specified condition is true
//"else" block is executed when the condition is false
//"else if" block is used to specify alternative conditions
//"switch" block is used to perform different actions



//if condition
// "if" block is executed when the specified condition is true

let x = 85;
if(x>=80){
    console.log("distinction");
} 



//else statement
let hour = 9;
if(hour >=5 && hour<=10){
    console.log("good morning");
} 
else{
    console.log("good afternoon");
}




// else if statement

let hours = 21;
if(hours >=1 && hours<=12){
    console.log("good morning");
} else if(hours>12 && hours<=17){
console.log("good afternoon"); 
} else if(hours>17 && hours<=19){
    console.log("good evening"); 
} else{
    console.log("good night");
}