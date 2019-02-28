const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


// LINKING CONTROLLER
const leagues = require("./controllers/leagues.controller")




// Set db
const database = require('./data/soccer-db.js');

// handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// MIDDLE WARES
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));


// CALLING ROUTES
leagues(app)


app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});
module.exports = app;