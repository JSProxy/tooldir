import { footerModal } from './footer/index.js'
import { navModal } from './nav/index.js'


const common = function(){

  // let headFun = function (){
  //   var headdom= document.querySelector('head');
  //   var headtpl = new headModal();
  //   headdom.innerHTML = headtpl.tpl+headdom.innerHTML;
  //   // css 会先插入head 所以不能覆盖
  // }
  // new headFun();

  // 通过html-loader 插件实现模版引入
  let footerFun = function (){
    var fdiv = document.querySelector('#footer');
    var foot = new footerModal();
    fdiv.innerHTML = foot.tpl;
  }
  new footerFun();

  // 通过html-loader 插件实现模版引入 ejs
  let navFun = function (){
    var ndiv = document.querySelector('#nav');
    var nav = new navModal();
    // 渲染数据
    // ndiv.innerHTML = nav.tpl({
    //   name:'zf',
    //   list:["1","2"]
    // })
    //在内部赋值
    ndiv.innerHTML = nav.tpl;
  }
  new navFun();

  // console.log('ss')
}

// export const common = function(){};
//default  不能导出表达式

export default common;
