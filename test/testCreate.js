var vows = require('vows');
var assert = require('assert');
var fs = require('fs');
var exec = require('child_process').exec;

var testSuite = vows.describe('Create Project');

testSuite.addBatch({
	'create an empty project': {
		topic: function() {
			if (fs.existSync('./testMimosaSDKProj')){
				fs.rmdirSync('./testMimosaSDKProj');
			}
			exec('node ./bin/mimosa.js create testMimosaSDKProj', this.callback);
		},
		
		'test project existance': function(error, stdout, stderr) {
			console.log('stdout:' + stdout);
			console.log('stderr:' + stderr);
			if (error !== null) {
				console.log('exec error: ' + error);
			}
			var exist = fs.existsSync('./testMimosaSDKProj');
			assert.isTrue(exist);
		},
		'test script folder existance': function(error, stdout, stderr) {
			var exist = fs.existsSync('./testMimosaSDKProj/script');
			assert.isTrue(exist);
		},
		'test lib folder existance': function(error, stdout, stderr) {
			var exist = fs.existsSync('./testMimosaSDKProj/lib');
			assert.isTrue(exist);
		},
		'test resource folder existance': function(error, stdout, stderr) {
			var exist = fs.existsSync('./testMimosaSDKProj/resource');
			assert.isTrue(exist);
		},
		'test target folder existance': function(error, stdout, stderr) {
			var exist = fs.existsSync('./testMimosaSDKProj/target');
			assert.isTrue(exist);
		}
	},
	
	'create with override (-o) option': {
		topic: function() {
			if (!fs.existSync('./testMimosaSDKProj')){
				fs.mkdirSync('./testMimosaSDKProj');
			}
			
			if (!fs.existSync('./testMimosaSDKProj/uselessFolder')){
				fs.mkdirSync('./testMimosaSDKProj/uselessFolder');
			}
			
			exec('node ./bin/mimosa.js create testMimosaSDKProj -o', this.callback);
		},
		'should create an empty project': function(error, stdout, stderr) {
			assert.isTrue(fs.existsSync('./testMimosaSDKProj'));
			assert.isFalse(fs.existsSync('./testMimosaSDKProj/uselessFolder'));
		}
	},

}).export(module);