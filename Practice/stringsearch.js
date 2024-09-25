//string search methods

//string indexOf()
//string lastIndexOf()
//string search()

//string match()
//string matchAll()
//string includes()
//string startsWith()
//string endsWith()

//string indexOf()
//the indexOf() method returns the position of the first occurrence of a string

// let text4 = "Please locate where 'locate' occurs";
// let txt  = text4.indexOf("where");
// console.log(txt);

// let text6 = "Please locate where 'locate' occurs";
// let txt1  = text6.indexOf("loyal");
// console.log(txt1);


//string lastIndexOf()
//the lastindexOf() method returns the index of (position) last occurnce of text ina string
// let text7 = "swiggy delivers food only not 'delivers' things";
// let text8 = text7.lastIndexOf("delivers");
// console.log(text8);


//string search()
// the search() method returns the position of the first occurrence of a string in a string

// let txt = "please show the location where location disabled";
// let txt3 = txt.search("location");
// console.log(txt3);

// let txt7 = "please show the location where location disabled";
// let txt5 = txt.search("local");
// console.log(txt5);

//string match
//match( mwthod returns an array containing the resukts of matching a string againest string )

// let txt4 = "The rain in SPAIN stays mainly in the plain";
// const myArr = txt4.match("ain");
// console.log(myArr.length + " " + myArr);


// let txt4 = "The rain in SPAIN stays mainly in the plain";
// const myArr = txt4.match(/ain/);
// console.log(myArr.length + " " + myArr);


// let txt4 = "The rain in SPAIN stays mainly in the plain";
// const myArr = txt4.match(/ain/gi);
// console.log(myArr.length + " " + myArr);


// //matchAll()
// let txtt = "I love cats. Cats are very easy to love. Cats are very popular.";
// const iterator = txtt.matchAll(/Cats/g);
// console.log(Array.from(iterator));




//string includes
//method returns true if the specified value contains in the string

// let text = "hello welcome to the universe";
// let text2 = text.includes("world");
// console.log(text2);

// let text = "hello welcome to the universe";
// let text2 = text.includes("welcome", 12);
// console.log(text2);



//string startsWith()

// let text = "hello welcome to the universe";
// let text2 = text.startsWith("welcome");
// console.log(text2);



//endWith()


let text = "hello welcome to the universe";
let text2 = text.endsWith("universe");
console.log(text2);

