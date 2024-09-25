//switch statement it is used to perform different actions based on different conditions

let choice = 8;
let a = 5;
let b = 6;

switch (choice) {
    case 0:
        console.log("addition of two numbers is:", a+b);
        break;
    case 1:
        console.log("addition of two numbers is:", a-b);
        break;
    case 2:
        console.log("addition of two numbers is:", a*b);
        break;   
    case 0:
        console.log("addition of two numbers is:", a/b);
        break;     
    default:
        console.log("invalid choice");
        break;
}







let day;
switch (new Date().getDay()) {
    case 0:
        day = "sunday";
        break;
    case 1:
        day = "monday";
        break;
    case 2:
        day = "tueday";
        break;
    case 3:
        day = "wednesday";
        break;
    case 4:
        day = "thursday";
        break;
    case 5:
        day = "friday";
        break;
     case 6:
        day = "saturday";
        break;
}
console.log("today is " + day);







//using else if conditions
let button = 6;
if(button==1){
    console.log("beginner level");
} else if(button == 2){
    console.log("advanced level");
} else if(button ==3) {
    console.log("project level");
} else{
    console.log("invalid button");
}





//using switch
let button1 = 7;
switch (button1) {
    case 1:
        console.log("beginners");
        break;
    case 2:
        console.log("advanced");
        break;
    case 3:
        console.log("project level");
        break;

    default:
        console.log("invalid key");
        break;
}