define(function (require, exports) {
	var Type = require('./type')

	exports.Number = Type.create('Number')
	exports.Boolean = Type.create('Boolean')
	exports.Null = Type.create('Null')
	exports.String = Type.create('String')
	exports.Undefined = Type.create('Undefined')
	exports.Date = Type.create('Date')
	exports.RegExp = Type.create('RegExp')
	exports.Error = Type.create('Error')
	exports.Array = Type.create('Array')
	exports.Object = Type.create('Object')
})