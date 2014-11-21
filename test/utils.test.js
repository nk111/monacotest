var assert = require('assert');
var utils = require('../utils');
 
describe('Utils', function() {
	describe('#shuffleArray()', function() {
		it('should shuffle an array', function() {
			var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			var result = utils.shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
 
			assert.notDeepEqual(array, result);
		});
	});
});