//return function
//return statement ends the execution of a function and returns control to the calling function


//returning the return fundtion
function Function(){
    return function(){
        return "Deevia";
    }
}
console.log(Function() ());



//returning the return object
function object (name, founded, location) {
    let company = {
        name: name,
        founded: founded,
        location: location
    }
    return company;
}
const companyObject = object ("deevia", 2013, "hsr layout");
console.log(companyObject);



//returning the return type
function Value(){
    return "mohan";
}

function Number() {
    return 20000;
}
function array(){
    return [1, 2, 3, 4, 5];
}
console.log(`The value is ${Value()}`);
console.log(`The value is ${Number()}`);
console.log(`The value is ${array()}`);