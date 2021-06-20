
const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

const PORT  = process.env.PORT || 4444;

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname)});
});

app.get('/demo', (req, res) => {
    // console.log("Origin is: " + req.remoteAddress);
    console.log("Origin is: " + req.headers['X-Forwarded-For']);
    res.status(200).end("This is just a demo");
});

app.use((req, res) => {
    res.status(404).json({
        error: "Not found!"
    });
});

app.listen(PORT, () => {
    console.log("Connected to the server!");
});