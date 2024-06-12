const mongoose = require('mongoose');

userSchema = new mongoose.Schema({
    email: String,
    senha: String,
    salto: String
});

module.exports = mongoose.model('Usuario', userSchema);