//for in loop
// this statement loops through the properties of an object


//syntax
//for(key in object){}


const person = { firstName: "john", lastName:"doe", age:100};
let text = "";
for(let x in person){
    text += person[x] + " ";
}
console.log(text);



const num = [ 45, 4, 9, 16, 25];
let tex = "";
for(let x in num){
    tex += num[x] + " ";
}
console.log(tex);



