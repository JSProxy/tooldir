// 修改类的行为的函数
// 扩展类的行为

{



  // 修饰器函数 类对象  属性名  属性描述
  let readonly=function(target,name,descriptor){
    descriptor.writable=false;
    return descriptor
  };

  class Test{
    // 引用
    @readonly
    time() {
      return '2017-03-11'
    }
  }

  let test=new Test();

  // test.time=function(){   报错
  //   console.log('reset time');
  // };

  console.log(test.time());
}


{
  // 增加属性
  let typename=function(target,name,descriptor){
    target.myname='hello';
  }

  @typename
  class Test{

  }

  console.log('类修饰符',Test.myname);

  // 第三方库修饰器的js库：core-decorators; npm install core-decorators
}

{ // 传参数修饰器  实现 广告展示和点击的统计  日志系统
  let log=(type)=>{
    return function(target,name,descriptor){
      // 原始的函数体
      let src_method=descriptor.value;
      // 修改了原始的方法
      descriptor.value=(...arg)=>{

        // 继承父类并指定this 和 参数数组
        //调用原始方法
        src_method.apply(target,arg);

        // 广告监听 日志代码
        console.info(`log ${type}`);
      }
    }
  }

//广告类
  class AD{
    @log('show')
    show(){
      console.info('ad is show')
    }
    @log('click')
    click(){
      console.info('ad is click');
    }
  }

  let ad=new AD();
  ad.show();
  ad.click();
}
