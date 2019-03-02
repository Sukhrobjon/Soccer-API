const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Populate = require("../utils/autopopulate");


const PlayerSchema = new Schema({
    
    name: { type: String, required: true },
    age: { type: Number, required: true },
    nationality: { type: String },
    // height: { type: String, required: true },
    teamId: { type: Schema.Types.ObjectId, ref: "Team", required: true }
    
});

module.exports = mongoose.model("Player", PlayerSchema);