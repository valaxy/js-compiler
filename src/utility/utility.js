define(function (require, exports) {

	exports.extend = function (a, b) {
		for (var key in b) {
			a[key] = b
		}
		return a
	}
})