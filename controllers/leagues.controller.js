const League = require('../models/league.model.js');
const User = require("../models/user.model")

module.exports = (app) => {

    app.get('/', (req, res) => {
        var currentUser = req.user;
        // console.log(req.cookies);
        League.find()
            .then(league => {
                res.render("leagues-index", {
                    league: league
                })
            })
            .catch(err => {
                console.log(err);
            })
    })

    // NEW
    app.get('/leagues/new', (req, res) => {
        res.render('leagues-new', {});
    })


    // CREATE
    app.post('/leagues', (req, res) => {
        console.log(req.body)
        League.create(req.body).then((league) => {
            console.log(league);
            // res.redirect("/")
            res.send(league)
        }).catch((err) => {

            console.log(err.message);
            res.send(err.message)
        })
    });


    app.get("/leagues", (req, res) => {
        League.find()
            .then(league => {
                res.json(league)
                console.log(league)
            }).catch(error => {
                console.log(error.message);
            });
    });

    

    app.get('/leagues/:leagueId', (req, res) => {
        League.findById(req.params.leagueId)
            .then(league => {
                res.json(league)
            })
            .catch(err => {
                console.log(err);
            })
    })

}