define(function () {

	var FunctionType = function () {
		this.name = ''
		this.input = []
		this.output = null
	}

	FunctionType.create = function (name, input, output) {
		var t = new FunctionType
		t.name = name
		t.input = input
		t.output = output
		return t
	}

	return FunctionType
})