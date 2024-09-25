//bigint
//bigint is use to store big integer values

let x = 9999999999999999;
let x1 = BigInt("9999999999999999999");
console.log(x + " "+ x1);


let y = BigInt("89827574457475647673486");
console.log(typeof y);


let x2 = 9007199254740995n;
let y2 = 9007199254740995n;
let z = x2 * y2;
console.log(z);


let w = Number.MAX_SAFE_INTEGER;
console.log(w);

//max_safe integer and minsafe integer

//number.isInteger()
//number.