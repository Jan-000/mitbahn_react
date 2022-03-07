const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const groupSchema = new Schema({
	title: String,
	startStation: String,
	endStation: String,
	date: String
});

const Group = mongoose.model('Groups', groupSchema);
module.exports = Group;
