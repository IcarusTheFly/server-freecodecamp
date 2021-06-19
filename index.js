
const { response } = require('express');
var express = require('express');
var app = express();

const PORT  = process.env.PORT || 4444;

app.get('/', (req, res) => {
    console.log("Hello World");
    res.send("Hello world");
});

app.use((req, res) => {
    res.status(404).json({
        error: "Not found!"
    })
});

app.listen(PORT, () => {
    console.log("Connected to the server!");
});