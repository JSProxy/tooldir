export let A= 123;

export function test(){
  console.log('sss');
}
export class Hello {

  test(){
    console.log('sss');
  }
}
//导入
import {A,test,Hello } from''
//导入所有内容
import * as allData from ''
as.A

// 模块复杂

// 也可以一起导出
export default {
  A,
  test,
  Hello
}
