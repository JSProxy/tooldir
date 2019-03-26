interface SquareConfig {
	//可选属性
  color?: string;
  width?: number;
  //任意属性
  [propName: string]: any;

}
function createSquare(config: SquareConfig): {color: string; area: number} 
{
  let newSquare = {color: "white", area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
//如果怕参数有误可以用断言
//{ color: "black", opacity: 0.5 } as SquareConfig
//
let mySquare = createSquare({color: "black"});

//只读属性
interface Point {
    readonly x: number;
    readonly y: number;
}

//只读数组
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!
a = ro as number[];//ok


//函数类型
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
//函数的参数名不需要与接口里定义的名字相匹配
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}

//接口可以继承
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}
interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

//接口继承类
class Control {
    private state: any;
}
interface SelectableControl extends Control {
    select(): void;
}


class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

// 错误：“Image”类型缺少“state”属性。
class Image implements SelectableControl {
    select() { }
}
class Location {

}
//一个对象可以同时做为函数和对象使用，并带有额外的属性。
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}
function getCounter(): Counter 
{
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;



