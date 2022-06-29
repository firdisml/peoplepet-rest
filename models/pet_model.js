const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetSchema = mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        required: false,
        default: "undefined",
        ref:"Peoples"
    }
})

module.exports = mongoose.model("Pets", PetSchema)