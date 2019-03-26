Airbnb

Airbnb 是其中一个最流行的 Java 代码规范，它差不多包含所有 Java 的角度。它也是我的个人项目所使用的代码规范。如果你的项目是基于 React 的，那么你可以选择安装 eslint-config-airbnb，或者你可以选择最基本的 eslint-config-airbnb-base。
eslint-config-airbnb 包含 ECMA 6 + 以及 React 的 ESLint 代码规范。在安装 eslint-config-airbnb 的时候，它会一同安装 eslint, eslint-plugin-import, eslint-plugin-react, and eslint-plugin-jsx-a11y。如果你的项目不是 React 的话，那么你可以选择eslint-config-airbnb-base。
npm install eslint-config-airbnb
eslint-config-airbnb-base 包含ECMA 6 + 的 ESLint 代码规范。安装它的时候，它会需要 eslint 和 eslint-plugin-import。

npm install eslint-config-airbnb-base

然后在你的 .eslintrc 加入 "extends": "airbnb-base" 就可以了。

Airbnb 的完整代码规范可以在 airbnb/java 上阅读。

Standard

除了 Airbnb 的代码规范之外，有很多高科技公司在用 Standard 的代码规范，包括但不限于 NPM, Github, mongoDB, ZenDesk。
这里是官网提到的一些 Standard 规范：

· 两个空白 － 当作缩排

· 字串用单引号 － 除非要避免跳脱字元

· 没有不必要的变数

· 不要加分号

· 绝对不要用 ( 、 [ 当开头

· 这是不用分号 唯一 可能遇到的问题 － 那就自动帮你检查吧！

· 关键字后加空白 if (condition) { ... }

· 函数名称后加空白 function name (arg) { ... }

· 统一用 === 取代 == － 但是 obj == null 可以用来检查 null || undefined。

· 一定要例外处理 node.js 中的 err 参数

· 一定要对浏览器中的全域变数加上 window 前綴 － 除了 document 和 navigator 可以不用

· 避免使用那些命名得很烂的全域变数，像是 open 、 length 、 event 和 name。

你可以透过 
eslint-config-standard 来自动校对，改善你的代码。

npm install eslint-config-standard

Standard 繁體中文文档Standard 简体中文文档

Idiomatic

它的思想是无论谁改进项目的代码，都应该像只有一个人写代码。

你可以透过 eslint-config-idiomatic 来自动校对，改善你的代码。

npm install eslint-config-idiomatic

Idiomatic - Github

Google

你都可以像 Google 工程师一样编写同样风格的代码。

你可以透过 eslint-config-google 来自动校对，改善你的代码。

npm install eslint eslint-config-google

我们可以在 Google - GitHub Pages 上阅读它的代码规范。

