const express = require('express');
const app = express();
const port = 3000 || process.env.PORT

app.get('/', function (req, res) {
    res.send('Soccer API');
});

app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});