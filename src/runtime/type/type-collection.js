define(function (require) {

	var TypeCollection = function () {
		this._types = []
	}

	TypeCollection.create = function (types) {
		var t = new TypeCollection
		t._types = types
		return t
	}

	TypeCollection.prototype.accept = function (type) {
		for (var i = 0; i < this._types.length; i++) {
			if (type == this._types[i]) {
				return true
			}
		}

		return false
	}

	if (typeof QUnit != 'undefined') {
		var basicType = require('./basic-type')

		QUnit.module('TypeCollection')

		QUnit.test('accept()', function (assert) {
			var types = TypeCollection.create([basicType.Number,
				basicType.String,
				basicType.Boolean
			])

			assert.ok(types.accept(basicType.String))
			assert.ok(!types.accept(basicType.Undefined))
		})
	}

	return TypeCollection
})