
var Mongoose = require('mongoose');


var ProjectSchema = new Mongoose.Schema({
	"title": {type:String},
	"date": Date,
	"summary": String,
	"image": String
});

exports.Project = Mongoose.model('Project', ProjectSchema);


