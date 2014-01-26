#!/usr/bin/env node

var mimosa = require("../lib/mimosaSDK");

var args = process.argv.slice(2);

var help = [
	"Mimosa SDK, version 0.1",
	"",
	"usage: mimisa create|build|run|debug|deploy [options]",
	"",
	"create			create a new mimosa project.", 
	"			Example: 'mimosa create exampleProj'",
	"",
	"build			build the current project.",
	"			Example: 'mimosa build iOS|android|pc'",
	"",
	"run			run the current project.",
	"",
	"debug			debug the current project.",
	"",
	"deploy			deploy the current project to target platform.",
	"			Example: 'mimosa deploy iOS'",
	"",
	"options:"
];

// print the help 
function printHelp() {
	for (var i in help) {
  	console.log(help[i]);
	}
}

if (args.length == 0) {
	printHelp();
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
		
		mimosa.create(args[0]);
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




