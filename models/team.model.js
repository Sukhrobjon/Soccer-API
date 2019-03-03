const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Populate = require("../utils/autopopulate");


const TeamSchema = new Schema({
    
    name: { type: String, required: true },
    manager: { type: String, required: true },
    stadium: { type: String, required: true },
    location: { type: String, required: true },
    players: [{ type: Schema.Types.ObjectId, ref: "Player"}],
    leagueId : { type: Schema.Types.ObjectId, ref: "League", required: true }

});




module.exports = mongoose.model("Team", TeamSchema);

