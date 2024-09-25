//array methods

//array length
//array toString()
//array at()
//array join()
//array pop()
//array Push()

//array shift()
//array unshift()
//array delete()

//array concat()
//array copywithin()
//array FloatArray()
//array splice()
//array tospliced()
//array slice()


//array length()

const fruits = ["banana", "orange", "apple", "mango"];
console.log(fruits.length);



//array toString()

const fruits1 = ["banana", "orange", "apple", "mango"];
console.log(fruits1.toString());


//array at()
const fruits3 = ["banana", "orange", "apple", "mango"];
console.log(fruits3.at(2));

const fruits4 = ["banana", "orange", "apple", "mango"];
console.log(fruits4[2]);


//array join()
const fruits5 = ["banana", "orange", "apple", "mango"];
console.log(fruits5.join(" * "));


//array pop() remove last element
const fruits6 = ["banana", "orange", "apple"];
console.log(fruits6.pop());


//array push 
const fruits7 = ["banana", "orange", "apple", "mango"];
console.log(fruits7);
fruits7.push("kiwi");
console.log(fruits7);



//Array shift()
const fruits8 = ["banana", "papaya", "orange", "apple", "mango"];
console.log(fruits8);
fruits8.shift();
console.log(fruits8);



//Array unshift()
const fruits9 = ["banana", "papaya", "orange", "apple", "mango"];
console.log(fruits9.unshift("neem"));
console.log(fruits9);



//changing elements
const fruit2 = ["banana", "papaya", "orange", "apple", "mango"];
console.log(fruit2);
fruit2[0] ="guava";
console.log(fruit2);

//add element
const fruit3 = ["banana", "papaya", "orange", "apple", "mango"];
fruit3[fruit3.length-1] = "pomo";
console.log(fruit3);

//delete element
const fruit4 = ["banana", "papaya", "orange", "apple", "mango"];
console.log(fruit4);
delete fruit4[1];
console.log(fruit4);

//array concat()
const car1 = ["audi", "bmw"];
const car2 = ["benz", "volvo"];
const car3 = car1.concat(car2)
console.log(car3);



const car4 = ["audi", "bmw"];
const car5 = ["benz", "volvo"];
const car6 = ["lambo", "bugati"];
const car7 = car4.concat(car5, car6);
console.log(car7);


const person = ["parvathi", "shiv"];
const person2 = ["subramanya"];
const son = person.concat(person2,"ganapa");
console.log(son);


//array copy within()
const name1 = ["manu", "vinu", "sonu", "banu"];
console.log(name1);
console.log(name1.copyWithin(1, 3));

const name2 = ["manu","meenu", "vinu", "kash", "sonu", "kanv", "banu"];
console.log(name2);
console.log(name2.copyWithin(2, 0, 2));




//flattning array
const num = [[1, 2], [3,4], [5, 6], [7,8]];
const newnum = num.flat();
console.log(newnum);


//flat map()
const num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newnum2 = num2.flatMap(x => [(x), (x*10),  (x*100)]);
console.log(newnum2);


//slicing and slice array()
//splice is used to add new item
//2 defines where we ad new element
// 0 defines how many elements should be removed

//array splice
const persons = ["abhi", "manvi", "vasanth"];
console.log(persons);
persons.splice(1, 0, "bbbb", "ggggg");
console.log(persons);


const person4 = ["abhi", "manvi", "vasanth", "dev", "shiv"];
console.log(person4)
person4.splice(1, 2,);
console.log(person4);


//array tosliced()
const month = ["jan", "feb", "mar", "apr", "may"];
console.log(month.toSpliced(2, 2));


//array slice()
//method slice out a piece of an array into a new array
const months = ["jan", "feb", "mar", "apr", "may"];
console.log(months.slice(1, 4));


