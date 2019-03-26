require: node 和 es6 都支持的引入
export / import : 只有es6 支持的导出引入
module.exports / exports: 只有 node 支持的导出

Node里面的模块系统遵循的是CommonJS规范。
那问题又来了，什么是CommonJS规范呢？
由于js以前比较混乱，各写各的代码，没有一个模块的概念，而这个规范出来其实就是对模块的一个定义。
CommonJS定义的模块分为: 模块标识(module)、模块定义(exports) 、模块引用(require)
