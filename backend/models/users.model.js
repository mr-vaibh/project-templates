const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true, trim: true, minlength: 3 },
    name: { type: String, required: true },
    age: { type: Number, required: true, min: 18, index: true },
    dob: { type: Date },
    bio: { type: String, match: /[a-zA-Z]/ },
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;