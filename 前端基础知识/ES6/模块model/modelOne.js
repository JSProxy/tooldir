// export var webName = "麻辣个鸡";
// export let url = "www.yuanku.com";
// export const year = 2018;

 var webName = "麻辣个鸡";
 let url = "www.yuanku.com";
 const year = 2018;
// export 这是属性 可以理解为 导出 有这个属性 外部才能访问使用

export{
	//导出也可以这里写别名
	// webName as wb
	webName,
	url,
	year
};
//也可以导出一个方法
export function add(a,b){

	return a+b;
}
//也可以导出一个类
export class Student{

	constructor(){
		console.log("Student被创建了");
	}
}
//默认导出 需要这么写了
//import User,* as uu from"./modelOne.js";
export default class User{

	constructor(){
		console.log("Student被创建了");
	}
}