const League = require('../models/league.model.js');
const User = require("../models/user.model")


module.exports = (app) => {

    // Index route
    app.get('/', (req, res) => {
        var currentUser = req.user;
        League.find()
            .then(league => {
                res.render("about", {
                    league, currentUser
                })
            })
            .catch(err => {
                console.log(err);
            })
    })

    app.get("/about", (req, res) => {
        var currentUser = req.user;
        res.render("about", { currentUser });
    });

    app.get("/documentation", (req, res) => {
        var currentUser = req.user;
        res.render("documentation", { currentUser });
    });
    // NEW
    app.get('/leagues/new', (req, res) => {
        var currentUser = req.user;
        res.render('leagues-new', { currentUser });
    })


    // CREATE
    app.post('/leagues', (req, res) => {
        if (req.user && req.user.username == "Sukhrobjon"){
            console.log(req.body)
            League.create(req.body).then((league) => {
                console.log(league);
                res.redirect("/")
                res.send(league)
            }).catch((err) => {

                console.log(err.message);
                res.send(err.message)
            })
        } else {
            res.redirect('/')
        }
    });


    // QUERY ALL LEAGUES AVAILABLE
    app.get("/api/leagues", (req, res) => {
        League.find()
            .then(league => {
                res.json(league)
                console.log(league)
            }).catch(error => {
                console.log(error.message);
            });
    });

    
    // get single league
    app.get('/api/leagues/:leagueId', (req, res) => {
        League.findById(req.params.leagueId)
            .then(league => {
                res.json(league)
            })
            .catch(err => {
                console.log(err);
            })
    })

}