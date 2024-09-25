// //await
// //await makes a function wait for the promises
// //await is only used inside the async functions

// //await keyword makes the function pause the execution and await for a resolved promises before it continues

// const display = async() => {
//     let myPromise = new Promise((resolve, reject)=>{
//         resolve("its cleared");
//     });
//     console.log(await myPromise);
// }
// display();





// //settimeout
// const greet = async() =>{
//     let none = new Promise((resolve) => {
//         setTimeout(() =>{
//             resolve("i will be back");
//         }, 5000);
//     });
//     console.log(await none);
// }
// greet();





// // const p = new Promise((resolve, reject) =>{
// //     resolve("printed");
// // });
// // p.then((resolve)=>{console.log(resolve);});




// const pro = new Promise ((resolve, reject) =>{
//     resolve("i will be back soon");
// });
// const handlePromise = async() =>{
//     // const none = await pro;
//     console.log(await pro);
// }
// handlePromise();


const pro = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve('1.i want to learn 5s');
    }, 5000);
})

// const pro1 = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         resolve('2.i want to change 10s');
//     }, 10000);
// });

const handle = async() =>{
    console.log("3.hiiiiiiiiiiiii");
    const none = await pro;
    console.log("4.namaste");
    console.log(none);

    const none1 = await pro;
    console.log("5.namaste javascript");
    console.log(none1);
}
handle();





// function getData(){
//    p.then((res)=> console.log(res));
//     console.log("namaste javascript");
// }
// getData();

