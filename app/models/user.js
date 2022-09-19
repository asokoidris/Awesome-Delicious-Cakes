const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "User must have a username"],
        trim: true,
        unique: true,
    },

    email: {
        type: String,
        required: [true, "User must have a email"],
        unique: true,
        trim: true
    },

    firstName: {
        type: String,
        required: [true, "User must have a firstName"],
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, "User must have a lastName"],
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },


},
    { timestamps: true }
);

AdminSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("User", UserSchema);
