//break and continue


//break statement
//break statement jumps out of the loop

let text = "";
for(i=0; i<10; i++){
    if(i===6) {
    break;
}
text += "the number is " + i + ", ";
}
console.log(text);








//continue sATEMENT
//this statement breaks only the condition we needed afthe that execute the other code
let texts = "";
for(let i=0; i<10; i++){
   if(i===3){
    continue;
   }
   texts += "number is " + i + ", ";
}
console.log(texts);