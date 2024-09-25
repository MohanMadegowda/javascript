//array sort methods

//Alphabetic sort

//array sort()
//array reverse()
//array toSorted()
//array toReversed()
//sorting object



//numeric sort

//numeric sort
//random sort()
//Math.min()
//math.max()
//home made Min()
//home made max()




//sorting an array
//the sort method sorts an array alphabetically

//sort()
const fruits = ["Banana", "Orange", "Apple", "Mango", "Guava"];
console.log(fruits);
fruits.sort();
console.log(fruits);



//tosorted()
//change the original Array
const month = ["jan", "feb", "mar", "apr", "may"];
const sorted = month.toSorted();
console.log(sorted);




//reversing in array
//reverse method reverses the elements in an Array
const fruits1 = ["Banana", "Orange", "Apple", "Mango", "Guava"];
// console.log(fruits1);
fruits1.sort().reverse();
console.log(fruits1);


//toReversed()
//alters the original array
const month1 = ["jan", "feb", "mar", "apr", "may"];
console.log(month1)
const sort = month1.toReversed();
console.log(sort);






//numeric sort()
//by default sort  function sorts values as strings
const numbers = [40, 100, 1, 5, 25, 10];
console.log(numbers.sort(function(a, b){return a - b}));


const numbers1 = [40, 100, 1, 5, 25, 10];
console.log(numbers1.sort(function(a, b){return b - a}));



const points= [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points[4]);



//math min()
//you can use 'Math.min.apply' to find the lowest number in an array
const numb = [12, 34, 54, 67, 1, 87, 94,22, 4,];
function lowest(array) {
    return Math.min.apply(null, array);
}
console.log(lowest(numb));