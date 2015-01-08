define(function (require) {
	var Scope = require('./scope')

	var Runtime = function () {
		this._globalScope = null
	}

	Runtime.create = function () {
		var r = new Runtime
		r._globalScope = Scope.create()
		return r
	}


	// fullName or localName
	Runtime.prototype.findVar = function (fullName) {
		return this._globalScope.findFullNameVar(fullName)
	}


	// var $dom = $('a')
	// $dom. // -> append/before/html/...


	if (typeof QUnit != 'undefined') {
		QUnit.module('Runtime')

		QUnit.test('findVar()', function (assert) {
			var runtime = Runtime.create()
		})

	}

})