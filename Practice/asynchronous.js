//Asynchronous 
//functions running parallel with other functions called asynchronus functions
//ex: setTimeout()


setTimeout(mood, 5000);
function mood() {
    console.log("im exausted");
}//wait for 5 min to result
//myFunction is used as a callback.
//myFunction is passes to settimeout() as an arguement



setTimeout(function(){ myFunction("im tired");
},3000);
function myFunction(value){
    console.log(value);
}


// //time
// setInterval(myFunction, 1000);
// function myFunction(){
//     let d = new Date();
//     console.log(d.getHours() +":"+
// d.getMinutes() +":"+
// d.getSeconds());
// }

//using arrow functions
setTimeout(()=> {
    console.log("my name is mohan");
},2000);





//with promises
console.log("Start");
setTimeout(() => {
    console.log("Asynchrnous operation with promises");
},1000);
console.log("End")





//event loop
console.log("1: test- start")
setTimeout(() => {
    console.log("2: test settimeout 2sec");
},2000);

Promise.resolve().then(() => {
    console.log("3: test  promise");
});
console.log("2: test End");