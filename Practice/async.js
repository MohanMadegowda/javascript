//async
// async makes a function return a promise

//syntax

async function myFunction(){
    return "hello";
}
console.log(myFunction());



function greet(){
return Promise.resolve("hello mohan");
}
console.log(greet());



//normal function
function myDisplayer1(someone) {
    console.log(someone);
  }
  
  async function greeting1() {return "Hello";}
  
  greeting1().then(
    function(value) {myDisplayer1(value);},
    function(error) {myDisplayer1(error);}    

  );


//using arrow function
const myDisplayer =(some) => {
    console.log(some);
};
const greeting = async()=>"helloooooo";
greeting().then(
    (value)=> { myDisplayer(value)},
    (error)=> {myDisplayer(error)}
);





//promise
const stand = new Promise((resolve, reject)=> {
    let x=0;
    if(x==0){
        resolve('ok')
    }else{
        reject('No');
    }
});
stand
.then((message)=>{
    console.log("fullfilled:", message);
},
(error)=>{
    console.log("fail:", error );
});
// .catch((error)=>{
// console.log("failed:", error)
// });



//using callback
setTimeout(()=>{
    greet4("im okay");
},5000);

const greet4=(value)=>{
    console.log(value);
};



// //file
// const getfile = (myCallback)=>{
//     let req = new XMLHttpRequest();
//     req.open('get', "mycar.html");
//     req.onload=()=>{
// if(req.status ==200){
//     myCallback(req.responseText);
// }else{
//     myCallback("erroe:", + req.status);
// }
//     }
//     req.send()
// }




const grind = async () => "hi MG";
grind().then((value)=>{console.log(value);});