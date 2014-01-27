#!/usr/bin/env node

var mimosa = require("../lib/mimosaSDK");

var args = process.argv.slice(2);

var help = [
	"Mimosa SDK, version 0.1",
	"",
	"usage: mimisa create|compile|run|debug|deploy [options]",
	"",
	"create			create a new mimosa project.", 
	"			Example: 'mimosa create exampleProj'",
	"",
	"compile			compile the current project.",
	"			Example: 'mimosa compile'",
	"",
	"run			run the current project.",
	"",
	"debug			debug the current project.",
	"",
	"deploy			deploy the current project to target platform.",
	"			Example: 'mimosa deploy iOS|android|desktop|sim'",
	"",
	"options:",
	"-o			override the project if existed"
];

// print the help 
function printHelp() {
	for (var i in help) {
  	console.log(help[i]);
	}
}

if (args.length == 0) {
	printHelp();
	process.exit();
}

switch(args[0]) {
	case "create":
		args.shift();
		if (args[0] == null) {
			console.log('Invalide project name! Please specify a name for your project');
			console.log('');
			printHelp();
			break;
		}
		
		var name = args[0];
		args.shift();
		mimosa.create(name, args);
		break;
	case "build":
		break;
	case "run":
		break;
	case "debug":
		break;
	case "deploy":
		break;
	default:
		printHelp();
		break;
}




