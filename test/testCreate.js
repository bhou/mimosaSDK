var vows = require('vows');
var assert = require('assert');

var testSuite = vows.describe('Create Project');

testSuite.addBatch({
	'create an empty project': {
		topic: function() {
			return {};
		},
		'test project existance': function(result) {
			// this should fail, because of no impl yet
			assert.isTrue(false);
		},
		'test script folder existance': function(result) {
			// this should fail, because of no impl yet
			assert.isTrue(false);
		},
		'test lib folder existance': function(result) {
			// this should fail, because of no impl yet
			assert.isTrue(false);
		},
		'test resource folder existance': function(result) {
			// this should fail, because of no impl yet
			assert.isTrue(false);
		},
		'test target folder existance': function(result) {
			// this should fail, because of no impl yet
			assert.isTrue(false);
		}
	},
	
	'create with existing folder': {
		topic: function() {
			return {}
		},
		'should create an empty project': function(result) {
			// this should fail, because of no impl yet
			assert.isTrue(false);
		}
	}
}).export(module);