const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const Populate = require("../utils/autopopulate");


const LeagueSchema = new Schema({
    
    name: { type: String, required: true },
    country: { type: String, required: true },
    // numberOfTeams: { type: Number, required: true},
    teams: [{ type: Schema.Types.ObjectId, ref: "Team"}]

});

module.exports = mongoose.model("League", LeagueSchema);