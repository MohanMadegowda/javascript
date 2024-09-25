//enhanced object literals
//enhanced object literals which make it easy to quickly create objects with properties inside the curly BroadcastChannel


//before es6
let name = 'mohan';
let age = 100;

let person ={
    name: name,
    age: age
};
console.log(person);



//after es6
//property shorthned
let name1 = 'mohan';
let age1 = 100;

let person1 ={
    name1,
    age1
};
console.log(person1);






//method shorthand
let person2 = {
    greet() {
        console.log('hello');
    }
}
person2.greet();



//computed property name
let propName = "age";

let person4 ={
    [propName]: 100
}
console.log(person4);




//concise super call
let parent ={
    greet(){
        return 'hello from parent';
    }
};

let child = {
    greet() {
        return super.greet() + ', and hello from child';
    }
};
Object.setPrototypeOf(child, parent);
console.log(child.greet());