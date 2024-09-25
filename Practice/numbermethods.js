//java script numbers methods
//1 toString()
//2 toExponential
//3 toFixed
//4 toPrecision
//5 valueOf()



// toString()
//tostring method returns as a string
let x= 123;
console.log(x.toString());



//toExponsntial()
//writens a number written in exponnential notation
let y = 9.5357;
console.log(y.toExponential() + " " + y.toExponential(2) +""+
y.toExponential(8));



//toFixed()
//returns a String, the number written with specified number of decimals
let x4 = 8.87;
console.log(x4.toFixed() + " " + x4.toFixed(2)+ " " + x4.toFixed(4)+ " " + x4.toFixed(5) + " " + x4.toFixed(6))



//valueOf()
//returns a number as a number
let t= 1234
console.log(t.valueOf()+ " " + 
(12+34).valueOf()+ " " + 
(123+4).valueOf()+ " " + 
(1234).valueOf());

let t1= 1234
console.log(t1.toString()+ " " + 
(1234).toString()+ " " + 
(12+34).toString()+ " " + 
(123+4).toString());





function printEvenNumbers(limit) {
    for (let i = 2; i <= limit; i += 2) {
        console.log(i);
    }
}

printEvenNumbers(20); 



//converting variables to numbers
// number() method
//parseFloat() method
//parseInt() method



//number method()
console.log(
    Number(true)+ " " +
    Number(false)+ " " +
    Number("10")+ " " +
    Number("    10")+ " " +
    Number("10    ")+ " " +
    Number("10.33")+ " " +
    Number("10  22")+ " " +
    Number("john")
);


let p = new Date("1960-01-01");
console.log(Number(p));



//parseInt() method
//convert strings into whole numbers
console.log(
    parseInt("-10") + " " +
    parseInt("-10.33") + " " +
    parseInt("10") + " " +
    parseInt("10.77") + " " +
    parseInt("9 7") + " " +
    parseInt("8 years") + " " +
    parseInt("4years"));


    // parseFloat()
    //returns number
    console.log(
        parseFloat("12") + " " +
        parseFloat("11.13") + " " +
        parseFloat("12 6") + " " +
        parseFloat("12 years") + " " +
        parseFloat("years 12")
    )



    //number object methods

    //Number.isInteger()
    //Number.isSafeInteger()
    //number.parseInt()
    //Number.parseFloat()



    //Number.isInteger()
    console.log(Number.isInteger(10) + " " + Number.isInteger(10.22));
