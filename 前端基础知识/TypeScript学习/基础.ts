
// 模版字符串 它可以定义多行文本和内嵌表达式（`）(${})
let age: number = 37;
let sentence: string = `Hello, my name is ${ name }.
I'll be ${ age + 1 } years old next month.`;

//数组定义
let list1: number[] = [1, 2, 3];
//数组范型
let list2: Array<number> = [1, 2, 3];

//元组
//类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
//
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error
x[3] = 'world'; 
// OK, 字符串可以赋值给(string | number)类型
x[4] = true; // Error, 布尔不是(string | number)类型

//枚举
//默认 重0开始元素编号
//可以手动赋值
enum Color {Red, Green, Blue=9}
let c: Color = Color.Green;
let colorName: string = Color[2];

//我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 Any类型来标记这些变量：
let list: any[] = [1, true, "free"];
list[1] = 100;


//never  不存在。永远不存在的类型
// 返回never的函数必须存在无法达到的终点
function error(message: string): never 
{
    throw new Error(message);
}

// 类型断言
let someValue: any = "this is a string";
//告诉编译器该类型 已经被程序员检查
let strLength1: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;


