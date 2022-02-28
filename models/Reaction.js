const { Schema, model, Types } = require("mongoose");
const { type } = require("os");
const dateFormat = require("../utils/dateFormat"); 

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
},
{
            toJSON: {
                getters: true
            },
            id: false
        }
);

const User = model("Reaction", ReactionSchema);