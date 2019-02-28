const League = require('../models/league.model.js');

module.exports = (app) => {

    app.get('/', (req, res) => {
        League.find()
            .then(leagues => {
                res.render("leagues-index", {
                    leagues: leagues
                })
            console.log("Index")
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
        League.create(req.body).then((leagues) => {
            console.log(leagues);
            // res.redirect(`/charities/${charity._id}`);
            res.redirect("/")
        }).catch((err) => {
            console.log(err.message);
        })
    })
    app.get("/leagues", (req, res) => {
        League.find()
            .then(leagues => {
                res.json(leagues)
                console.log(leagues)
            }).catch(error => {
                console.log(error.message);
            });
    });

    

    // app.get('/leagues/:leagueId', (req, res) => {
    //     League.findById(req.params.id)
    //         .then(leagues => {
    //             res.json(leagues)
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // })

}