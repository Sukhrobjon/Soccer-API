const Team = require("../models/team.model")
const League = require("../models/league.model")
module.exports = app => {
    
    // QUERY TEAMS IN A SPECIFIC LEAGUE
    app.get('/leagues/:leagueId/teams', (req, res) => {
        League.findById(req.params.leagueId).populate("teams")
            .then(league => {
                const teams = league.teams
                res.json(teams)
            })
            .catch(err => {
                res.status(400).send(error);
            })
    })

    // QUERY SINGLE TEAM
    app.get("/leagues/:leagueId/teams/:teamId", (req, res) => {
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
