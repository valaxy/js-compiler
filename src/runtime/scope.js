define(function () {

	var Scope = function () {
		this._vars = {}
		this._scopes = {}
		this._parentScope = null
	}

	Scope.create = function () {
		return new Scope
	}

 
	Scope.prototype.addScope = function (name, scope) {
		this._scopes[name] = scope
		scope._parentScopre = this
	}

	Scope.prototype.getScope = function (name) {
		return this._scopes[name] || null
	}

	Scope.prototype.parentScope = function () {
		return this._parentScopre
	}


	Scope.prototype.addVar = function (name, localVar) {
		this._vars[name] = localVar
	}

	Scope.prototype.getVar = function (name) {
		if (name in this._vars) {
			return this._vars[name]
		} else {
			return null
		}
	}


	Scope.prototype.findLocalNameVar = function (localName) {
		var _var = this.getVar(localName)
		if (_var !== null) {
			return _var
		}
		if (this.parentScope()) {
			return this.parentScope().findLocalNameVar(localName)
		} else {
			return null
		}
	}


	Scope.prototype.findFullNameVar = function (fullName) {
		var dot = fullName.indexOf('.')
		if (dot < 0) {
			return this.getVar(fullName)
		}

		var subScope = this._scopes[fullName.slice(0, dot)]
		if (subScope) {
			return subScope.findFullNameVar(fullName.slice(dot + 1))
		} else {
			return null
		}
	}


	if (typeof QUnit != 'undefined') {
		QUnit.module('Scope')

		QUnit.test('addScope()/getScope()/parentScope()', function (assert) {
			var root = Scope.create()
			var s1 = Scope.create()
			var s2 = Scope.create()
			var s3 = Scope.create()
			root.addScope('s1', s1)
			root.addScope('s2', s2)
			s2.addScope('s3', s3)

			assert.equal(root.getScope('s2'), s2)
			assert.deepEqual(root.getScope('s3'), null)

			assert.equal(s1.parentScope(), root)
			assert.equal(s3.parentScope(), s2)
		})

		QUnit.test('addVar()/getVar()', function (assert) {
			var scope = Scope.create()
			var abc = {}
			var def = {}
			var abc2 = {}
			scope.addVar('abc', abc)
			scope.addVar('def', def)
			scope.addVar('abc', abc2)
			assert.equal(scope.getVar('abc'), abc2)
			assert.equal(scope.getVar('def'), def)
			assert.deepEqual(scope.getVar('ghi'), null)
		})

		QUnit.test('findLocalNameVar()', function (assert) {
			var root = Scope.create()
			var s1 = Scope.create()
			var s2 = Scope.create()
			root.addScope('s1', s1)
			s1.addScope('s2', s2)

			var abc = {}
			s1.addVar('abc', abc)

			assert.equal(s2.findLocalNameVar('abc'), abc)
			assert.equal(s1.findLocalNameVar('abc'), abc)
			assert.deepEqual(root.findLocalNameVar('abc'), null)
		})

		QUnit.test('findFullNameVar()', function (assert) {
			var root = Scope.create()
			var s1 = Scope.create()
			var s2 = Scope.create()
			root.addScope('s1', s1)
			s1.addScope('s2', s2)

			var abc = {}
			var abc1 = {}
			var abc2 = {}
			root.addVar('abc', abc)
			s1.addVar('abc', abc1)
			s2.addVar('abc', abc2)

			assert.equal(root.findFullNameVar('abc'), abc)
			assert.equal(root.findFullNameVar('s1.abc'), abc1)
			assert.equal(root.findFullNameVar('s1.s2.abc'), abc2)
			assert.equal(root.findFullNameVar('s1.s2.efg'), null)
			assert.equal(root.findFullNameVar('s1.s3.abc'), null)
		})
	}

	return Scope
})