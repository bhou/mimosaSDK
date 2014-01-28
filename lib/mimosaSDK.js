var fs = require('fs');
var fileUtils = require('./fileUtils');

var sdk = exports;

// create a new mimosa project with given name
// name: name of the project
sdk.create = function (name, args) {
	var override = false;
	
	while(args.length != 0){
		switch(args[0]){
			case '-o':
				override = true;
				break;
			default:
				break;
		}
		
		args.shift();
	}
	
	if (fs.existsSync('./'+name)){
		if (override == true){
			fileUtils.rmDir('./'+name);
		}else{
			console.log("Folder '"+ name +"' already exists. Try use -o option to override the folder");
			return;
		}
	}
	
	console.log("creating project '" + name + "'...");
	fs.mkdirSync('./'+name);
	
	console.log("creating script folder...");
	fs.mkdirSync('./'+name+'/script');
	
	console.log("creating resource folder...");
	fs.mkdirSync('./'+name+'/resource');
	
	console.log("creating lib folder...");
	fs.mkdirSync('./'+name+'/lib');
	
	console.log("creating target folder...");
	fs.mkdirSync('./'+name+'/target');
	
	console.log("done!");
}
