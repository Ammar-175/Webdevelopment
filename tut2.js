const fs = require("fs"); 
let text = fs.readFileSync("file.txt", "utf-8");
text = text.replace("Name", "Age");

console.log(text);
console.log("My name is Muhammad Ammar");

console.log("Creating a new file...");
fs.writeFileSync("ammar.txt", text);
