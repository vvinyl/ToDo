const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    title: {type: String, required: true},
    date: {type: Date, required: true},
    details: {type: String},
    status: {type: Boolean, default: false},
}, {
    timestamps: true
});

module.export = mongoose.model("Task", TashSchema);