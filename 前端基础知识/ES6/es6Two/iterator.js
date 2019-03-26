{
  let arr=['hello','world'];
  // 调用内部方法
  let map=arr[Symbol.iterator]();
  console.log(map.next());
  console.log(map.next());
  console.log(map.next());    //done true 表示没有下一步操作le
}

{
  let obj={
    start:[1,3,2],
    end:[7,9,8],
    // 自定义obj 的接口
    [Symbol.iterator](){
      let self=this;
      let index=0;
      let arr=self.start.concat(self.end);
      let len=arr.length;
      return {
        next(){
          if(index<len){
            return {
              value:arr[index++],
              done:false
            }
          }else{
            return {
              value:arr[index++],
              done:true
            }
          }
        }
      }
    }
  }
 // 这样就可以使用  let of  for  of 循环le
  for(let key of obj){
    console.log(key);
  }
}

{
  let arr=['hello','world'];
  for(let value of arr){
    console.log('value',value);
  }
}
