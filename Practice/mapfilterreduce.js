//map()
//map function creates a new array by applying function on each arra elements
//it doesnot channge original array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const double = arr.map(num => num*2);
console.log(double);


const tripple = arr.map((x)=> x*3);
console.log(tripple);


const user = [
    {firstName: "mohan", lastName: "gowda", age: 100},
    {firstName: "manvi", lastName: "shetty", age: 50},
    {firstName: "manvendra", lastName: "singh", age: 150},
    {firstName: "vasanth", lastName: "kuber", age: 90},
    {firstName: "zuber", lastName: "khan", age: 100}
]
// const result = user.map(user => user.firstName + " " + user.lastName);
// console.log(result)
const result = user.reduce((acc, cur)=>{
    if(acc[cur.age]){
        acc[cur.age]= ++acc[cur.age];
    } else{
        acc[cur.age]=1;
    }
    return acc;
}, {});
console.log(result);



const results = user.filter(user => user.age<=100);
console.log(results)


//below 100 years users name
const result1 = user.filter(user => user.age<100).map(user=> user.firstName);
console.log(result1);




//filter
//filter function creates new array with the elements passes the condition
//doesnot cnages the original array

const maxi = arr.filter(num => num>5);
console.log(maxi);


const oddNumbers = arr.filter(num => num %2 !==0);
console.log(oddNumbers);




//reduce method()
//reduce method is used to get single value by applying the function to ath earra ElementInternals
const sum = arr.reduce((accumullator, currentValue) => accumullator + currentValue);
console.log(sum);



function findSum(arr){
    let sum = 0;
    for(let i=0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
console.log(findSum(arr));



const result2 = user.reduce((accumulator, user) => {
    if (user.age < 100) {
        accumulator.push(user.firstName);
    }
    return accumulator;
}, []);

console.log(result2);
