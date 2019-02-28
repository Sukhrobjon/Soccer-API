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
    // app.post("/leagues", (req, res) => {
    //     League.create(req.body)
    //         .then(leagues => {
    //             req.send(leagues)
    //             console.log(leagues)
    //         }).catch(error => {
    //             console.log(error.message);
    //         });
    // });

    

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