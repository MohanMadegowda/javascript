// const Person = {
//     firstName: "Mohan",
//     lastName: "Gowda",
//     age: 100,
//     id: 3245555
// };
// console.log(Person.lastName);

let text2 = "character  is. called backslash. hi yuh. yuj";
let text3 = text2.charAt(0).toUpperCase() + text2.slice(1)
.replace(/(^\w{1}|\.\s*\w{1})/g, (match) => match.toUpperCase());
console.log(text3);


function capitalizeSentence(str) {
    return str.toLowerCase().replace(/(^\w{1}|\.\s*\w{1})/g, (match) => match.toUpperCase());
}

const sentence = "the past is, very bad. and I came,out that.";
const result = capitalizeSentence(sentence);
console.log(result);










let j =0;
for(j=0; j,5; j++){
    setTimeout(()=>{
        console.log(j);
    },1000)
}



const radius = [3, 1, 2, 4];

const area = function (radius){
    return Math.PI*radius*radius;
};
const areas = radius.map(area);
console.log(areas);

//circumference
// const circumference = function(radius){
//     return 2 *Math.PI*radius;
// };
// const cir = radius.map(circumference);
// console.log(cir);

//diameter
// const diameter = function(radius){
//     return 2 *radius;
// };
// const dia = radius.map(diameter);
// console.log(dia);
// const calculate = function (radius, logic){
//     const output = [];
//     for(let i =0; i < radius.length; i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// };
// console.log(calculate(radius. area));
// console.log(calculate(radius. circumference))
// console.log(calculate(radius. diameter));