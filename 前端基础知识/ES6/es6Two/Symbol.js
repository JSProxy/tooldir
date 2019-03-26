{
  // 声明 独一无二的值
  let a1=Symbol();
  let a2=Symbol();

  console.log(a1===a2); false

  // 第二种声明
  let a3=Symbol.for('a3'); //a3 为key值 如果存在  就会取出 不存在就会创建
  let a4=Symbol.for('a3');
  console.log(a3===a4); true
}

{
  // 使用场景 重写属性 保证不覆盖属性
  let a1=Symbol.for('abc');
  let obj={
    [a1]:'123',
    'abc':345,
    'c':456
  };
  console.log('obj',obj); //Symbol(abc):'123'

// 通过Symbol 处理过的对象 let of  for in是取不到的
  for(let [key,value] of Object.entries(obj)){
    console.log('let of',key,value);
  }

// 只取Symbol 属性de值 对象
  Object.getOwnPropertySymbols(obj).forEach(function(item){
    console.log(obj[item]);
  })

// 取Symbol 和非Symbol 属性 和值 

  Reflect.ownKeys(obj).forEach(function(item){
    console.log('ownkeys',item,obj[item]);
  })
}
