define(function (require) {
	var Rule = function () {
		this._inputTypes = null // Array<Type>
		this._outputType = null // Type
	}

	Rule.create = function (inputTypes, outputType) {
		var r = new Rule
		r._inputTypes = inputTypes
		r._outputType = outputType
		return r
	}

	Rule.prototype.check = function (actualInputTypes) {
		if (actualInputTypes.length != this._inputTypes.length) {
			return null
		}

		for (var i = 0; i < actualInputTypes.length; i++) {
			if (actualInputTypes[i] != this._inputTypes[i]) {
				return null
			}
		}

		return this._outputType
	}


	if (typeof QUnit != 'undefined') {
		var basicType = require('../type/basic-type')

		QUnit.module('Rule')

		QUnit.test('check()', function (assert) {
			var rule = Rule.create([basicType.Number, basicType.String], basicType.String)
			assert.equal(rule.check([basicType.Number, basicType.String]), basicType.String)
			assert.ok(rule.check([basicType.String, basicType.String]) === null)
		})
	}

	return Rule
})