define(function (require, exports) {

	var Node = require('../tree/node')

	var RuntimeNode = function () {
		Node()
		this._name = ''
		this._type = '' // 'scope' or 'var'
	}

	RuntimeNode.prototype = new Node

	RuntimeNode.prototype.findScope = function (name) {
		return null
	}

	RuntimeNode.prototype.findVar = function (name) {
		return null
	}

	RuntimeNode.prototype.findVarAccordly = function (name) {
		// return no exist or a node
	}
})