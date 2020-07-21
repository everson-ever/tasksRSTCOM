const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
	task: {
		type: String,
		required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
	user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('Todo', TodoSchema);