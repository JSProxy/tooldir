{
  集合
  let list = new Set();
  list.add(5);
  list.add(7);

  console.log('size',list.size);
}

{
  let arr = [1,2,3,4,5];
  let list = new Set(arr);

  console.log('size',list.size);
}

{
  let list = new Set();
  list.add(1);
  list.add(2);
  list.add(1);

  console.log('list',list);

  let arr=[1,2,3,1,'2']; // 1被过滤了一个
  let list2=new Set(arr);

  console.log('unique',list2);
}

{
  let arr=['add','delete','clear','has'];
  let list=new Set(arr);

  console.log('has',list.has('add'));
  console.log('delete',list.delete('add'),list);
  list.clear();
  console.log('list',list);
}

{
  let arr=['add','delete','clear','has'];
  let list=new Set(arr);

  // key 和value 相同
  for(let key of list.keys()){
    console.log('keys',key); // 'add','delete','clear','has'
  }
  for(let value of list.values()){
    console.log('value',value); // 'add','delete','clear','has'
  }
  for(let [key,value] of list.entries()){
    console.log('entries',key,value);
  }

  list.forEach(function(item){console.log(item);})
}


{
  // 支持数据原属不一样  只能是对象  不会检测对象是否会用 弱引用 地址引用 不检测是否被回收
  let weakList=new WeakSet();

  let arg={};

  weakList.add(arg);
// 没有size
  // weakList.add(2);
  console.log('weakList',weakList);
}

{
  let map = new Map();
  let arr=['123'];

// arr 作为key  456 作为value
  map.set(arr,456);

  console.log('map',map,map.get(arr));
}

{
  let map = new Map([['a',123],['b',456]]);
  console.log('map args',map);
  console.log('size',map.size);
  console.log('delete',map.delete('a'),map);
  console.log('clear',map.clear(),map);
}

{
  let weakmap=new WeakMap();
 // 对象作为 key
  let o={};
  weakmap.set(o,123);
  console.log(weakmap.get(o));
}


// 数据结构的选者能 优先map  具有唯一性用set  放弃arr obj‘’  这样的选者性能会更好
