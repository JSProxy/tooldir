
babel-polyfill 的原理是当运行环境中并没有实现的一些方法，babel-polyfill会做兼容。
babel-runtime 它是将es6编译成es5去执行。我们使用es6的语法来编写，最终会通过babel-runtime编译成es5.也就是说，不管浏览器是否支持ES6，只要是ES6的语法，它都会进行转码成ES5.所以就有很多冗余的代码。
babel-polyfill 它是通过向全局对象和内置对象的prototype上添加方法来实现的。比如运行环境中不支持Array.prototype.find 方法，引入polyfill, 我们就可以使用es6方法来编写了，但是缺点就是会造成全局空间污染。
babel-runtime: 它不会污染全局对象和内置对象的原型，比如说我们需要Promise，我们只需要import Promise from 'babel-runtime/core-js/promise'即可，这样不仅避免污染全局对象，而且可以减少不必要的代码。
虽然 babel-runtime 可以解决 babel-polyfill中的避免污染全局对象，但是它自己也有缺点的，比如上，如果我现在有100个文件甚至更多的话，难道我们需要一个个文件加import Promise from 'babel-runtime/core-js/promise' 吗？那这样肯定是不行的，因此这个时候出来一个 叫 babel-plugin-transform-runtime，
它就可以帮助我们去避免手动引入 import的痛苦，并且它还做了公用方法的抽离。比如说我们有100个模块都使用promise，但是promise的polyfill仅仅存在1份。
这就是 babel-plugin-transform-runtime 插件的作用。

```
{
　　"presets": [
　　　　[
　　　　　　'@babel/preset-env',
　　　　　　{
              //描述您为项目配置的 支持定位的环境
　　　　　　　　'target':{
　　　　　　　　　　"browser":["ie>=8","chrome>=62"],
　　　　　　　　　　"node":"8.9.0",
　　　　　　　　　　"safari":"tp"
　　　　　　　　},
              //启用将 es6 转为其他模块
　　　　　　　　"modules":false,
              //是否启用 console.log
　　　　　　　　"debug":true,
　　　　　　　　"uglify":true
　　　　　　　　"useBuiltIns":true
//false ： 引用所有的 babel-polyfill  在 webpack 中添加 babel-polyfill 入口处：entry:[ 'babel-polyfill' , 'index.js' ] , 引用所有的 polyfill，体积变大
true ： 引用部分，根据配置的 preset-env 环境，引用 polyfill 在入口文件中要引用 babel-polyfill
　　　　　　}
　　　　]
　　],
"plugins":[
　　　　"pluginName",
　　　　[
  "@babel/plugin-transform-runtime",
      {
        "corejs": false,
        "helpers": false,
        "polyfill": false,
        "regenerator": true,
        "moduleName": "@babel/runtime"
      }]
　　],
　　"ignore":["path",'file'],
　　"miniied":boolean,
　　"comments":boolean,
　　"env":{

　　　　"test":{

　　　　　　"presets":[],

　　　　　　"plugins":[]

　　　　}

　　}
}
}
```
helpers ： 是否使用 @babel-runtime/helpers 来代替内部的 
coresjs ： 是否用 @babel-runtime/corejs 中的辅助方法来替换 Map / Set 等方法
polyfill : 是否用 @babel-runtime 的辅助函数来代替 polyfill
regenerator ： 是否用 辅助函数来代替 async / generator 函数
moduleName ： 引用时候名字

presets ： 预设，插件的集合，倒序执行
plugins ： 插件，先执行插件，在执行预设，顺序执行
ignore ： 忽略的文件
minify ： 压缩代码
common : 是否需要注释
env ： 设置不同的环境，应用不同的配置，配置取值：BABEL_ENV，如若没有取 NODE_ENV 的值，默认为 development.