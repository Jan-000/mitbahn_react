const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const projectSchema = new Schema({
	title: String,
	startStation: String,
	endStation: String,
	date: String
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
