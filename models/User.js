// Require Mongoose
const { Schema, model } = require('mongoose');

const UsersSchema = new Schema(
    {
    username: {
        type: String,
        unique: true,
        required: "Name is Required",
        trim: true
    },
    email: {
        type: String,
        required: "Email is required",
        unique: true,
        // use REGEX to validate correct email
        match: [/.+@.+\..+/],
    },
    thoughts: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
        },
    ],
    friends: [
        {
        type: Schema.Types.ObjectId,
        ref: 'User'
        },
    ],
    },
    {
    toJSON: {
        virtuals: true,
    },
    id: false,
    }
);

// get total count of friends
UsersSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

// create the Users model using the Users Schema
const User = model('User', UsersSchema);

// Export Users module
module.exports = User;