define(function (require) {
	var Rule = require('./rule')

	var Function = function () {
		this._fullName = ''
		this._rules = null   // Array<Rule>
	}


	Function.create = function (fullName, rules) {
		var f = new Function
		f._fullName = fullName
		f._rules = rules
		return f
	}


	Function.prototype.call = function (inputTypes) {
		for (var i = 0; i < this._rules.length; i++) {
			var output = this._rules[i].check(inputTypes)
			if (output !== null) {
				return output
			}
		}

		return null
	}

	if (typeof QUnit != 'undefined') {
		var basicType = require('../type/basic-type')

		QUnit.module('Function')

		QUnit.test('call', function (assert) {
			var f = Function.create('+', [
				Rule.create([basicType.Number, basicType.Number], basicType.Number),
				Rule.create([basicType.String, basicType.String], basicType.String)
			])
			assert.equal(f.call([basicType.Number, basicType.Number]), basicType.Number)
			assert.equal(f.call([basicType.String, basicType.String]), basicType.String)
			assert.ok(f.call([basicType.String, basicType.Number]) === null)
		})
	}


	return Function
})