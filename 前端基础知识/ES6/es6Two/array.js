{
  let arr = Array.of(3,4,7,9,11);
  console.log('arr=',arr);

  let empty=Array.of();
  console.log('empty',empty);  //[]
}

{
  let p=document.querySelectorAll('p');// 集合
  let pArr=Array.from(p); //转成数组

  pArr.forEach(function(item){
    console.log(item.textContent);
  });

  // map 映射 把第一个参数 数组 用函数进行处理后返回数组
  console.log(Array.from([1,3,5],function(item){return item*2}));
}

{
  // 每一个元素都变成7了
  console.log('fill-7',[1,'a',undefined].fill(7));
  // 1开始 3是替换的长度
  console.log('fill,pos',['a','b','c'].fill(7,1,3)); // ['a','7','7']
}

{
  // 返回所有下标的集合
  for(let index of ['1','c','ks'].keys()){
    console.log('keys',index);
  }
  // 返回所有 值
  for(let value of ['1','c','ks'].values()){
    console.log('values',value);
  }
  // 返回下标表和值
  for(let [index,value] of ['1','c','ks'].entries()){
    console.log('values',index,value);
  }
}

{
  // 0 开始位子 3哪个位子开始读取数据  4哪个位子截止
  console.log([1,2,3,4,5].copyWithin(0,3,4)); //42345
}

{
  // 过滤器 取出第一个符合条件的
  console.log([1,2,3,4,5,6].find(function(item){return item>3}));
  // 过滤器 取出第一个符合条件的 下标
  console.log([1,2,3,4,5,6].findIndex(function(item){return item>3}));
}

{
  // true
  console.log('number',[1,2,NaN].includes(1));
  // true
  console.log('number',[1,2,NaN].includes(NaN));
}
