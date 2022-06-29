const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PeopleSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    friend: {
        type: [Schema.Types.ObjectId],
        default: [],
        required: false,
        ref:"Peoples"
    }
})

module.exports = mongoose.model("Peoples", PeopleSchema)