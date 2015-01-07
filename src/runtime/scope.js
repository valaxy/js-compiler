define(function (require) {
	var RuntimeNode = require('./runtime-node')
	var utility = require('../utility/utility')

	var Scope = function () {
		RuntimeNode()
	}


	utility.extend(Scope.prototype, RuntimeNode.prototype)


	Scope.prototype.findScope = function (name) {
		return null
	}


	Scope.prototype.findVar = function (name) {
		return null
	}

	return Scope
})