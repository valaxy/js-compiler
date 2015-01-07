define(function () {

	var Type = function () {
		this.name = ''
	}

	Type.create = function (name) {
		var t = new Type
		t.name = name
		return t
	}

	return Type

})