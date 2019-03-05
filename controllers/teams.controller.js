const Team = require("../models/team.model")
const League = require("../models/league.model")


module.exports = app => {
    
    // CREATE
    app.post('/teams', (req, res) => {
        console.log(req.body)
        League.findOne({name: req.body.leagueName}).then(league => {
            if(league)  {
                const team = new Team({
                    name: req.body.name,
                    manager: req.body.manager,
                    location: req.body.location,
                    stadium: req.body.stadium,
                    leagueId: league._id
                })
                team.save((error, team) => {
                    if(error){
                        console.log("team saving")
                        res.send(error.message)
                    } else {
                        console.log(league, team)
                        // league.teams.push(team._id)
                        League.findOneAndUpdate({_id: league._id}, {$push: { teams: team._id }})
                        .then((league) => {
                            res.send(team)
                        })
                    }    
                    
                })

            } else {
            
                res.send("Invalid league name")
            }
            
        })

    })
 
    // QUERY ALL LEAGUES AVAILABLE
    app.get("/api/teams", (req, res) => {
        Team.find()
            .then(team => {
                res.json(team)
                // console.log(team)
            }).catch(error => {
                console.log(error.message);
            });
    });

    // QUERY TEAMS IN A SPECIFIC LEAGUE
    app.get('/api/leagues/:leagueId/teams', (req, res) => {
        League.findById(req.params.leagueId).populate("teams")
            .then(league => {
                const teams = league.teams
                res.json(teams)
            })
            .catch(err => {
                res.status(400).send(err);
            })
    })

    // QUERY SINGLE TEAM
    app.get("/api/leagues/:leagueId/teams/:teamId", (req, res) => {
        Team.findById(req.params.teamId)
            .then(team => {
                res.status(200).json(team)
                console.log(team)
            }).catch(error => {
                res.status(400).send(error)
                console.log(error.message);
            });
    });
}
