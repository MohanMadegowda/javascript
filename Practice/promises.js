//promises
//promises are used for Asynchronous execution
//we can use with arrow functions

//A promise is created using the "promise" constructor.
//two arguements
// 1. resolve (value) is called when the asynchronous tast is successful
// 2. reject (error) is called when the asynchronous task fails


// const myPromise = new Promise((resolve, reject) => {
//     let success = false;

//     if(success) {
//         resolve("operation was successful");
//     } else {
//         reject("operation failed");
//     }
// });

// myPromise
// .then((message) => {
//     console.log("Fulfilled:", message);
// })
// .catch((error) => {
//     console.log("rejected:", error);
// });




// console.log("1: start");

// setTimeout(() => {
//     console.log("2: my name is mohan");
// },1000);

// Promise.resolve().then(() => {
//     console.log("3: working in deevia")
// }, 2000);

// Promise.resolve().then(() => {
//     console.log("4: joined in may 2024");
// }, 3000);

// console.log("5: end");



// const myPromise = new Promise((resolve, reject) => {
//     let success = false;
//     if(success){
//     resolve("operation was successful");
//     } else {
//         reject("operation failed");
//     }
// });
// myPromise
// .then((message) =>{
//     console.log("fullfilled:", message);
// })
// .catch((error) =>{
//     console.log("rejected:", error);
// });


const fetchdata = (shouldSucceed) => {
return new Promise((resolve, reject) =>{
    setTimeout(() => {
        if(shouldSucceed){
            resolve("data fetched successfully");
    }else {
        reject("failed to fetch data");
        }
    }, 3000);
});
};

fetchdata(false)
.then((message) =>{
    console.log("success:", message);
})
.catch((error) =>{
    console.log("error:", error);
});



//handling asynchronous operations sequently
function getUser(id){
    return new Promise((resolve) =>{
        setTimeout(()=> resolve({id:id, name:"mohan"}), 3000);
    });
}
function getOrders(orderId) {
    return new Promise((resolve)=>{
        setTimeout(()=> resolve(["order1", "order2", "order3"]),3000);
    })
}

getUser(1)
.then(user => {
    console.log("user:", user);
    return getOrders(user.id);
})
.then (orders =>{
    console.log("order:", orders);
})
.catch(error =>{
    console.log("error:", error)
})







setTimeout(() =>{
    console.log("My nam eis Manvi");
})