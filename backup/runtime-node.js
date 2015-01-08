define(function (require) {
	var utility = require('../src/utility/utility')
	var Node = require('../src/tree/node')

	var RuntimeNode = function () {
		this._beRefered = [] // be reference

		// default: no any info
		// judge: can judge from else node
		// new: be judged already
		this._state = 'default' // default, judge, new
	}

	utility.extend(RuntimeNode.prototype, Node.prototype)


	/** get the type, main function */
	RuntimeNode.prototype.getType = function () {
		throw 'no implemented'
	}


	return RuntimeNode
})