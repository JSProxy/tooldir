### eslint 配置项
- root 限定配置文件的使用范围
- parser 指定eslint的解析器
- parserOptions 设置解析器选项
- extends 指定eslint规范 可以不写rules
  官方推荐:
  extends: 'eslint:recommended',
  extends: 'eslint:all',
  可以使用第三方的
  npm install --save-dev eslint-config-airbnb // bnb
  npm install --save-dev eslint-config-standard // standard
  extends: 'eslint:google',
  or
  extends: 'eslint:standard',
- plugins 引用第三方的插件
- env 指定代码运行的宿主环境
- rules 启用额外的规则或覆盖默认的规则
- globals 声明在代码中的自定义全局变量


// 插件
eslint
babel-eslint
eslint-loader
eslint-plugin-vue
eslint-friendly-formatter

// 继承别人的化需要配置下面的插件 standard
//Standard标准，它是一些前端工程师自定的标准。
  eslint
  eslint-config-standard
  eslint-plugin-standard
  eslint-plugin-promise
  eslint-plugin-import
  eslint-plugin-node -D
  vue 项目需要用 eslint-plugin-html 解析 解析script 下面的代码
  {
  "extends": "standard",
  "plugins": [
    "html"
  ]
}
//Airbnb   
查看依赖包
npm info "eslint-config-airbnb@latest" peerDependencies
eslint
eslint-config-airbnb-base
eslint-plugin-import
eslint-plugin-vue

extends: [ 'plugin:vue/essential', 'airbnb-base' ],
rules: {
    'no-console': 'off',
  }
};


script:
"lint": "eslint --ext .js --ext .jsx --ext .vue src/"
"lint-fix": "eslint --fix --ext .js --ext .jsx --ext .vue src/"



下面的代码会关闭所有规则
/* eslint-disable */

alert('foo');

/* eslint-enable */
下面的代码会关闭某一行的所有规则

alert('foo'); // eslint-disable-line

// eslint-disable-next-line
alert('foo');

下面的代码在某一行关闭指定的规则
alert('foo'); // eslint-disable-line no-alert

// eslint-disable-next-line no-alert
alert('foo');
