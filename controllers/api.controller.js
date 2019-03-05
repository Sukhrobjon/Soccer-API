module.exports = app => {
    // SENDING ALL RESOURCES
    app.get("/api", (req, res) => {
        var resources = {
            "leagues": "soccer-api-sg.herokuapp.com/api/leagues",
            "teams": "soccer-api-sg.herokuapp.com/api/teams",
            "players": "soccer-api-sg.herokuapp.com/api/players"
        }
        res.json(resources);
    })

}


