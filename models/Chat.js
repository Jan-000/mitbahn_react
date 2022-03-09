const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Group = require('./Group');

const chatSchema = new Schema(
    {
        messages : [{
            message: String,
            author: String,
        }], 
        groupID: {
            type: Schema.Types.ObjectId,
		    ref: Group,
        },
    }
)

const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;