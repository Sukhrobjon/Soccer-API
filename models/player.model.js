const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Populate = require("../utils/autopopulate");


const PlayerSchema = new Schema({
    
    name: { type: String, required: true },
    age: { type: Number, required: true },
    height: { type: String, required: true },
    nationality: { type: String, required: true },
    team: { type: Schema.Types.ObjectId, ref: "Team", required: true },
    // league: { type: Schema.Types.ObjectId, ref: "League", required: true }
});

module.exports = mongoose.model("Player", PlayerSchema);