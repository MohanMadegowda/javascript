//template literals
//template literals enclosed with backtics ` `



const name = "john";
const age = 30;

const invite = `hello, my name is ${name}, and im ${age} years old.`;
console.log(invite);



const a = 10;
const b = 20;
const result = `the sum of ${a} and ${b} is ${a+b}.`;
console.log(result);


function getFullName (firstName, lastName){
    return `${firstName} ${lastName}`;
}
const firstName ='john';
const lastName ='doe';
console.log();
