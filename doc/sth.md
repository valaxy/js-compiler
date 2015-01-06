- 字符流 -> 词流 -> 语法树 -> 程序模型(三地址代码) -> 推理图
- API规则模型
- 推理机








- 代码不能从上到下一次性推导成功:
构建一个逻辑推理图来解决?


    var MyClass = function() {
        this.ary = []
    }
    MyClass.prototype = {
        get: function(i) {
            return this.ary[i] // 这里返回的也是字符串类型
        },
        push: function(x) {
            x = x + '' // 这里可以推出ary里的都是字符串
            this.ary.push(x)
        }
    }


- 信息