//clouser
//clouser in js is a function that has access to variables in its parent scope, even after the parent function has returned
// its an inner function that has access to outer function variable

// function x(){
// var a = 7;
//     function y(){
//     console.log(a);
//     }
//     a=100;
//     y();
// }
// x();





// function x1(){
//     var a1 = 7;
//         function y1(){
//             var b = 8;
//             function z1(){
//                 console.log(a1,b);
//             }
//             z1();
//         }
//         y1();
//     }
//     x1();






//2 tables
    // function x4(){
        
    //     for(let i=1; i<=10; i++){
    //         setTimeout(function() {
    //             console.log(`2 * ${i} = ${2*i}`);
    //         },i * 1000);
    //     }
    // }
    // x4();






     //print 1,2 3,4 5 after 1 sec
    //  function x3(){
    //     for(let i=1; i<=5; i++){
    //         setTimeout(function() {
    //             console.log(i);
    //         },);
    //     }
    // }
    // x3();






    // function x4(){
    //     for(var i=1; i<=5; i++){
    //         setTimeout(function() {
    //             console.log(i);
    //         },);
    //     }
    // }
    // x4();





    //  //print 1,2 3,4 5 after 1 sec
    //  function x5(){
    //     for(var i=1; i<=5; i++){
    //         function none(i){
    //             setTimeout(function() {
    //                 console.log(i);
    //             },);
    //         }
    //         none(i)
    //     }
    // }
    // x5();





    // function createFun(){
    //     const great = [];
    //     for (let i =10; i<=13; i++){
    //       great[i] = function(){
    //             console.log(i);
    //         };
    //     }
    //     return great;
    // }
    // const fun = createFun();
    // fun[10]();
    // fun[11]();






    // function counter(){
    //     let count =20;
    //     return {
    //         increment: function(){
    //             count++;
    //             return count;
    //         },
    //         decrement: function(){
    //             count--;
    //             return count;
    //         },
    //         getCount: function(){
    //             return count;
    //         }
    //     };
    // }
    // const myCounter = counter();
    // console.log(myCounter.increment());
    // console.log(myCounter.increment());
    // console.log(myCounter.increment()); 
    // console.log(myCounter.getCount());   
    // console.log(myCounter.decrement());
    // console.log(myCounter.decrement());
    // console.log(myCounter.decrement());




function outest(){
    let c =77;
    function outer(b){
       
        function inner(){
        console.log(a, b, c);
        }
        let a = 70;
        return inner;
    }
    return outer;
}
// let a = 100;
let close = outest()("hii");
     close();






     function counter(){
        let count = 0;
       return function increment(){
            count++;
            console.log(count);
        }

     }
     let coun1 = counter();
   coun1();
   coun1();
   coun1();
