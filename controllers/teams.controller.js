const Team = require("../models/team.model")
module.exports = app => {
    // CREATE
    app.post('/leagues/:leagueId/teams/:teamId', (req, res) => {
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