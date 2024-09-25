//arrays
//an array is a special variable which can holds more than on value

// const cars = ["bmw", "audi", "volvo"];
// console.log(cars)

// const cars = [];
// cars[0] = "bmw";
// cars[1] = "audi";
// cars[2] = "Volvo";
// cars[3] = "swift";
// console.log(cars[0]+ " "+cars[2]);



//using javascript new method

// const cars = new Array("hyundai", " tata", "mahindra", "suzuki");
// console.log(cars[3]);




//changing an array element
// const cars = new Array("hyundai", " tata", "mahindra", "suzuki");
// cars[0] = "Thar";
// console.log(cars);



//converting array to string
// const cars = new Array("hyundai", " tata", " mahindra", " suzuki");
// console.log(cars.toString());



//arrays uses numbers to access elements
// const cars = new Array("hyundai", " tata", "mahindra", "suzuki");
// console.log(cars[1]);


//arrays uses numbers to access last array elements
// const cars = ["hyundai", " tata", "mahindra", "suzuki"];
// console.log(cars[cars.length-2]);

// const cars = ["hyundai", " tata", "mahindra", "suzuki"];
// console.log(cars.toString());


// const cars = ["hyundai", " tata", "mahindra", "suzuki"];
// cars[0] = "Thar";
// console.log(cars);



//loopingg array

// const cars = ["hyundai", " tata", "mahindra", "suzuki"];
// let car = cars.length;

// let text = "<ul>";
// cars.forEach(myfunction);
// text += "</ul>";

// function myfunction(value) {
//     text += "<li>" + value + "<li>";
// }
// document.getElementById("demo").innerHTML = text;



const fruit = ["apple","orange", "mango"];
fruit[4] = "papaya";
console.log(fruit);


const points = [10, 20, 30];
console.log(points[1]);


const points1 = new Array(10, 20, 30, 40);
console.log(points1[0]);



const points2 = new Array(10);
console.log(points2[0]);




const points3 = [19];
console.log(points3[0]);




// how do i know array..??
//javascript typeof operator always shows object instread od array

const fruits = ["apple","orange", "mango"];
console.log(typeof fruits);

const fruits1= ["apple","orange", "mango"];
console.log(Array.isArray(fruits1));



const fruits2= ("apple","orange", "mango");
console.log(Array.isArray(fruits2));



//Nested array
let x = "";
const myObj = {
    name: "john",
    age: 23,
    cars : [
        {name: "ford", models:["fiesta", "focus", "mustang"]},
        {name: "bmw", models:["320", "x5", "x7"]},
    ]
}
 
for (let i in myObj.cars) {
    x += "<h2>" + myObj.cars[i].name + "<h2>";

    for (let j in myObj.cars[i].models) {
        x += myObj.cars[i].models[j] + "<br>";
        
    }
}
console.log(x);

