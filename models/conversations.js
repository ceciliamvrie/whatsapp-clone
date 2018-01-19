const mongoose = require('mongoose')
const Shema = mongoose.Schema

const ConversationShema = new Schema({
  participants: [{type: Shema.Types.ObjectId, ref: 'User'}],
})

module.exports = mongoose.model('Conversation', ConversationShema)
