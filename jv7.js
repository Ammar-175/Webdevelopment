console.log("This is a tutorial");

function greet(name1, greetText="Greetings from JavaScript"){
    // let name1 =  "Name1";   // This is wrong.
    console.log(greetText, " ", name1);
    console.log(name1 + " is a good boy");
}

function sum(a,b,c,d){
    let e = a + b + c + d ;
    return e;
}

let name1 = "Ammar";
let name2 = "Ali";
let name3 = "Rohan";
let name4 = "Ahmed";
let name5 = "Raja";
// This is simple and easy.
let greetText = "Good Morning";
greet(name1, greetText);
greet(name2, greetText);
greet(name3, greetText);
greet(name4, greetText);
greet(name5);

let returnval = sum(4,2,3,4); //The point to be noted.Important.
console.log(returnval);


// let returnval = greet(name5);
// console.log(returnval);   //This is undefined.

// console.log(name1 + " is a good boy ");
// console.log(name2 + " is a good boy ");
// console.log(name3 + " is a good boy ");
// console.log(name4 + " is a good boy ");
// console.log(name5 + " is a good boy ");
