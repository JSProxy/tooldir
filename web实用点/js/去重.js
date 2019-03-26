// 去重 使用reduce 累积函数
var arr = [{id:'1'},{id:'2'},{Id:'3'},{id:'1'}];
var hash = [];
var okarr = arr.reduce(function(preval,val,index,array){
hash[val.id] ? '' :hash[val.id]=true && preval.push(val);
return preval
},[]);
console.log(okarr);
//for去重操作原对象
var arr = [{id:'1'},{id:'2'},{Id:'3'},{id:'1'}];
function removeRepeat(arr,key){

  for(let i = 0;i<arr.length;i++){

    for(let j = i+1;j<arr.length;j++){

      if(arr[i][key] === arr[j][key]){
        arr.splice(j,1);
        j = j-1; //删除一个元素后会缩短长度
      }
    }
  }
}
removeRepeat(arr,'id');