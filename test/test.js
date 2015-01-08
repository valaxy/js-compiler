define(function (require, exports) {
	exports.init = function () {
		require('../src/runtime/function/rule')
		require('../src/runtime/function/function')
		require('../src/runtime/scope')
	}
})