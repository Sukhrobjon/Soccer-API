module.exports = app => {
    // SENDING ALL RESOURCES
    app.get("/api", (req, res) => {
        var resources = {
            "leagues": "football-api-sg.herokuapp.com/api/leagues",
            "teams": "football-api-sg.herokuapp.com/api/teams",
            "players": "football-api-sg.herokuapp.com/api/players"
        }
        res.json(resources);
    })

}


