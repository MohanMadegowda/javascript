//destructuring assignment
//object destructuring allows us to unpack properties from objects into separate variables

const person = {
    name: "mohan",
    age: 100,
    job: "intern"
};
const {name, job} = person;
console.log(name);
// console.log(age);
console.log(job);






const person1 = {
    name: "mohan",
    age: 100,
};
const {name: fullName, age: years} = person1;
console.log(fullName);
console.log(years);




const fruits = ["apple", "banana", "orange"];
const [first, second, third] = fruits;
console.log(first);
console.log(second);
console.log(third);






const user = {
    id: 43,
    details:{
        name: "manu",
        location: "bangalore"
    }
};
const{details: { name:names, location}} = user;
console.log(names);
console.log(location);