
const express = require('express');
const path = require('path');
const app = express();

const PORT  = process.env.PORT || 4444;

app.get('/', (req, res) => {
    // res.send("Hello world");
    res.sendFile('index.html', {root: path.join(__dirname)});
});

app.use((req, res) => {
    res.status(404).json({
        error: "Not found!"
    });
});

app.listen(PORT, () => {
    console.log("Connected to the server!");
});