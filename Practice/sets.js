//javascript sets
//javascrupt set is a collection of unique values
//each value can only occur once in a set



//how to create set
// passing an array to new set()
//create an empty set and adda() to the values


//new set() method
const letters1 = new Set(["a", "b", "c", "d", "e"]);
console.log("the set has " + letters1.size + " values");



//create a set and add values
const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");
console.log("the set has " + letters.size + " values");


//create a set and add variables
const letters2 = new Set();
//create variable
const a ="a";
const b ="b";
const c = "c";

//add vaariables to set
letters2.add(a);
letters2.add(b);
letters2.add(c);
console.log("letters size " + letters.size);




//add method
const letters3 = new Set(["a", "b", "c", "d"]);
letters3.add("e");
letters3.add("f");
console.log(" the size is " + letters3.size);



//add same elements
const elements = new Set();
elements.add("a");
elements.add("b");
elements.add("c");
elements.add("c");
elements.add("c"); 
elements.add("c");
elements.add("c");
elements.add("c");

console.log(elements.size);