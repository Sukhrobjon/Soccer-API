const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const Populate = require("../utils/autopopulate");


const LeagueSchema = new Schema({
    
    name: { type: String, required: true },
    country: { type: String, required: true },
    numberOfTeams: { type: Number, required: true},
    teams: [{ type: String, required: true }]

});

module.exports = mongoose.model("League", LeagueSchema);