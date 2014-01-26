var fs = require('fs');

var sdk = exports;

// create a new mimosa project with given name
// name: name of the project
sdk.create = function (name) {
	console.log("creating project '" + name + "'...");
	
	fs.mkdirSync('./'+name);
	
	console.log("done!");
}
