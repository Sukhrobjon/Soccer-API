const Team = require("../models/team.model")
const Player = require("../models/player.model")
module.exports = app => {

    // CREATE
    app.post('/players', (req, res) => {
        console.log(req.body)
        Team.findOne({
            name: req.body.teamName
            }).then(team => {
                if (team) {
                const player = new Player({
                    name: req.body.name,
                    age: req.body.age,
                    nation: req.body.nation,
                    teamId: team._id
                })
                player.save((error, player) => {
                    if (error) {
                        console.log("player saving")
                        res.send(error.message)
                    } else {
                        console.log(team, player)
                        Team.findOneAndUpdate({
                                _id: team._id
                            }, {
                                $push: {
                                    players: player._id
                                }
                            })
                            .then((team) => {
                                res.send(player)
                            })
                    }

                })

            } else {

                res.send("Invalid Team Name")
            }

        })

    })


    // QUERY players from A SPECIFIC team
    app.get('/api/leagues/:leagueId/teams/:teamId/players', (req, res) => {
        Team.findById(req.params.teamId).populate("players")
            .then(team => {
                // console.log(team)
                const players = team.players
                res.json(players)
            })
            .catch(err => {
                res.status(400).send(err);
            })
    })

    // QUERY SINGLE TEAM
    app.get("/api/leagues/:leagueId/teams/:teamId/players/:playerId", (req, res) => {
        Player.findById(req.params.playerId)
            .then(player => {
                console.log("player: " + player)
                res.status(200).json(player)
                console.log(player)
            }).catch(error => {
                res.status(400).send(error)
                console.log(error.message);
            });
    });
}
