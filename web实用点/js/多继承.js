    var obj = new Object();
    // 为对象定义新的属性
    Object.defineProperty(obj,'a',{
      // 数据描述类型 默认
      configurable:false, // 是否可以delete delete obj.a
      writable:true, //是否可写
      value:2, //值
      enumerable:true //是否可以枚举 for in 或者Object.keys
    })
    var aValue;
    var b;
    Object.defineProperty(obj,'name',{
      // 存取描述类型 默认
      configurable:true, // 是否可以delete
      enumerable:true, //是否可以枚举 for in 或者Object.keys
      get: function(){
          return aValue
      },
      set: function(newValue){
        aValue = newValue 
        b = newValue + 1
      }
    })
    //定义多个属性描述
    // Object.defineProperties(obj,{
    //   a:{},
    //   b:{}
    // })
    // 获取属性描述
    Object.getOwnPropertyDescriptor(obj,'name')
    //获取目标全部属性
    var desc =  Object.getOwnPropertyDescriptors(obj)
    console.log(desc);

      // 拷贝属性描述
    const copyClass = function(target,source){
      var allkey  = Reflect.ownKeys(source);
      for (let key of allkey){
        if(key !== 'construct' && key !== 'prototype' && key !=='name'){
          var desc = Object.getOwnPropertyDescriptor(source,key);
          Object.defineProperty(target,key,desc)
        }
      }
    }
    const mix = function(...mixins){
      class Mix{};

      for (let mixin of mixins){
        copyClass(Mix,mixin);
        copyClass(Mix.prototype,mixin.prototype);
      }
      
      return Mix;
    }

    class aa {
      getA(){
        console.log('AClass')
      }
    }
    // 方法 不是类 类中有construct
    class bb {
      getB(){
        console.log('BClass')
      }
    }

    class test extends mix(aa,bb){

    }

    var objtest = new test();
    objtest.getA();