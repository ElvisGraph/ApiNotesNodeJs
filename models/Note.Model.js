const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    user_id: { type: String, required: true },
    create_at: { type: Date, default: Date.now }
    })

module.exports = mongoose.model("Note", NoteSchema)
    