const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Populate = require("../utils/autopopulate");


const TeamSchema = new Schema({
    
    name: { type: String, required: true },
    players: [{ type: String, required: true}],
    leagueId : { type: Schema.Types.ObjectId, ref: "League", required: true },

});

module.exports = mongoose.model("Team", LeagueSchema);

