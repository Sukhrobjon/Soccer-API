const dotenv = require('dotenv').config();
var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


// LINKING CONTROLLER
const leagues = require("./controllers/leagues.controller")
const teams = require("./controllers/teams.controller")
const players = require("./controllers/players.controller")
const auth = require("./controllers/auth.controller")

// MIDDLE WARES
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Set db
const database = require('./data/soccer-db.js');

// handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');




// CALLING ROUTES
leagues(app)
teams(app)
players(app)
auth(app)


app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});
module.exports = app;