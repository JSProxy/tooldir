// 1条件判断
let arr = ['1','2','3'];
//多条件多使用includes
console.log("includes"+arr.includes('1'));

 let is3 = arr.every((t)=> t==="3");
 let is1 = arr.some((t)=> t==="1");
 console.log('every',is3);
 console.log('some',is1);
//map数据结构后 少使用 if else
const rules = {
	1:()=>{console.log("1")},
	2:()=>{console.log("2")}
};

let r= 0;
rules[r||2]();

const funcMap = new Map();
funcMap.set(1,()=>{console.log("mapfunc1")});
funcMap.get(1)();
let nextfunc = funcMap.keys().next().value;
console.log("key值",nextfunc);

// 2 Set 与去重
let sarr = ['1','2','2','3'];
let setArr = [...new Set(sarr)];
let fromArr = Array.from(new Set(sarr));
// 字符去重
let strArr = new Set("abacd");
console.log([...strArr].join(""));
//交集 并集 差集
let a = new Set(['1','2','3']);
let b = new Set(['1','2','3','4']);
let bj = Array.from(new Set([...a,...b]));
console.log("并集",bj);

let jj = [...new Set(b)].filter(function(x) {
	return a.has(x);
});
console.log("交集",jj);
let cj = [...new Set(b)].filter(function(x) {
	return !a.has(x);
});
console.log("差集",cj);
// 函数式编程
// 数组求和 fillter map reduce 点语法链式调用
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
let addArr = [1,2,3,4,5];
let addok = addArr.reduce((a,b) => a+b);
console.log(addok);


// compose 组合函数

let head = (arr) => arr[0];
// let reverse1 = (arr) => arr.reverse();
// 下面这样写 防止报错...
let reverse = (arr) => [].concat(arr).reverse();
let toUpperCase = (str) => str.toUpperCase();
let strReverse = (str) =>str.split("").reverse().join("");
// console.log(reverse1('123'));
// console.log(reverse2('11112222'));

//  从又向左执行
const comArr = ["love","you","fuck"];
let composetest = (f1,f2) => (arr) => f1(f2(arr));
const fun = composetest(toUpperCase,head)
console.log('组合函数',fun(comArr))
//es5 compose
// 可以很多方法
//arguments = {
    // 0: fn1,
    // 1: fn2,
    // 2: fn3,
    // length: 3
// }
// 
function compose (){

var funs = [].slice.call(arguments);

return function (arg){
 //因为arguments并不是真正的数组对象，只是与数组类似而已
 // 通过这样把他转成数组
 // 函数实际参数转换成数组的方法
 	var res = arg;
	for(var i=funs.length-1; i>-1;i--)
	{
		res = funs[i](res);
	}
	return res;
};

}

var func = compose(toUpperCase,strReverse,head);
console.log("多函数compose",func(comArr));


// let es6compose = (f,g)=>(x)=>f(g());
let es6compose = (...func)=>{


if(func.length===0){

	return arg=>arg
}
if (func.length===0) {
	return func[0];
}

// 第一次执行 a和b 的函数
// 第2次执行 a 式第一次执行后返回的函数  b 是第三个方法
return func.reduce((a,b)=>(...args)=>a(b(...args)))

}
var es6func = es6compose(toUpperCase,strReverse,head);
console.log("多函数compose",es6func(comArr));

