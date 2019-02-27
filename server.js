const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.get('/', function (req, res) {
    res.send('Soccer API');
});


// Set db
const database = require('./data/soccer-db.js');

app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});