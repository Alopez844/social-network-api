// Require Mongoos and Moment
const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const ReactionSchema = require("./Reaction");

// ThoughtsSchema
const ThoughtsSchema = new Schema(
    {
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // Moment
        get: (createdAtVal) => dateFormat(createdAtVal),
    },
    username: {
        type: String,
        required: true
    },
    // Use ReactionsSchema to validate data
    reactions: [ReactionSchema],
    },
    {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
    }
);

// get total count of reactions
ThoughtsSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// create the Thoughts model using the Thoughts Schema
const Thought = model('Thought', ThoughtSchema);

// Export Thoughts Module
module.exports = Thought;