
var express = require('express');
var app = express();

console.log("First log");
console.log("Hello World");

const PORT  = process.env.PORT || 4444;

app.listen(PORT, () => {
    console.log("Connected to the server!");
    console.log("Hello World");
})