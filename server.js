const dotenv = require('dotenv').config();
var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const expressValidator = require('express-validator')
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


// LINKING CONTROLLER
const leagues = require("./controllers/leagues.controller")
const teams = require("./controllers/teams.controller")
const players = require("./controllers/players.controller")
const auth = require("./controllers/auth.controller")


// Set db
const database = require('./data/soccer-db.js');

// handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
// MIDDLE WARES
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


// Checking authentication if user is logged in
var checkAuth = (req, res, next) => {
    console.log("Checking authentication");
    if (typeof req.cookies.nToken === "undefined" || req.cookies.nToken === null) {
        req.user = null;
    } else {
        var token = req.cookies.nToken;
        var decodedToken = jwt.decode(token, {
            complete: true
        }) || {};
        req.user = decodedToken.payload;
    }

    next();
};
app.use(checkAuth);
app.use(expressValidator());





// CALLING ROUTES
leagues(app)
teams(app)
players(app)
auth(app)


app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});
module.exports = app;