
const { response } = require('express');
const express = require('express');
const app = express();

const PORT  = process.env.PORT || 4444;

app.get('/', (req, res) => {
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