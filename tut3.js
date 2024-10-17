// Synchronous or Blocking
// - line by line execution

// Asynchronous or non-blocking
// - line by line execution not guaranteed
// - callbacks will fire

const fs = require("fs"); 
fs.readFile("file.txt", "utf-8", (err, data)=>{
    console.log(data);
});
console.log("Ths is a new message");
