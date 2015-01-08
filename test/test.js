define(function (require, exports) {
	exports.init = function () {
		require('../src/runtime/operator/rule')
		require('../src/runtime/operator/function')
	}
})