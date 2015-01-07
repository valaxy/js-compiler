define(function (require) {
	var utility = require('../utility/utility')
	var RuntimeNode = require('./runtime-node')

	var Var = function () {
		RuntimeNode()
		this._name = ''     // the name of var
		this._operand1 = '' // left operand
		this._operator = '' // operator
		this._operand2 = '' // right operand
	}

	utility.extend(Var.prototype, RuntimeNode.prototype)


	Var.prototype.findVarAccordly = function (name) {
		// return no exist or a node
	}


	/** get the type, main function */
	Var.prototype.getType = function () {
		if (this._state == 'new') {
			return null
		} else {
			return this._operand1.getType()
		}
	}

	Var.prototype.getLabel = function () {

	}

	Var.triple = function (name, operand1, operator, operand2) {
		var v = new Var
		v._name = name
		return v
	}

	Var.single = function (name, operand1) {
		var v = new Var
		v._operand1 = operand1
	}

	return Var
})