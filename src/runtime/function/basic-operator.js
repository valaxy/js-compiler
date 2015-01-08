define(function (require, exports) {
	var Function = require('./function')
	var Rule = require('./rule')
	var basicType = require('../type/basic-type')

	exports.add = Function.create('+', [
		Rule.create([basicType.Number, basicType.Number], basicType.Number),
		Rule.create([basicType.String, basicType.String], basicType.String)
	])

	exports.minus = Function.create('-', [
		Rule.create([basicType.Number, basicType.Number], basicType.Number)
	])

})