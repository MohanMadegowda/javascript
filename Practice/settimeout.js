// //setTimeout()

// function x(){
//     let i = 8
//     setTimeout(function(){
//         console.log(i);
//     }, 500)
//     console.log("hii"); 
// }
// x();





// setTimeout(()=>{
//     console.log("good morning");
// }, 1000);




// function non(){
//     for(let i=1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, 1000);
//     }
// }
// non();




// //using var
// function no(){
//     for(var i=1; i<=5; i++){
//         function close(i){
//             setTimeout(function(){
//                 console.log(i);
//             }, i*2000);
//         }
//         close(i);    }
// }
// no();





// setTimeout(greet, 1000);
// function greet(){
//     console.log("mohan");
// }


// //passing parameters
// setTimeout(greets, 1000, "hiiiiiiiii");
// function greets(y){
//     console.log(y);
// }






// const timeout = setTimeout(greeting, 1000, "hi");
// if(true){
//     clearTimeout(timeout);
// }
// function greeting(x){
//     console.log(x);
// }







// //setinterval()
// // setInterval(()=>{
// //     console.log("hello");
// // }, 2000);



// // let counter = 0;
// // setInterval(count, 1000);
// // function count(){
// //     console.log(counter++);
// // }





// let counter1 = 0;
// const countInterval = setInterval(count, 3500);
// function count(){
//     console.log(counter1++);

//     if(counter1 >10){
//         clearInterval(countInterval);
//     }
// }






// // setInterval(getTime, 1000);
// // function getTime(){
// //     let d = new Date();
// //     console.log(new Date()
// //     );
// // }





// let j =0;
for(j=0; j<5; j++){
    setTimeout(()=>{
        console.log(j);
    },0)
}