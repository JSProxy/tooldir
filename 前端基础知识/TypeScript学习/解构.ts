
//解构
let input = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2

// 作用于函数参数：
function f([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
f(input);

let [, second, , fourth] = [1, 2, 3, 4];


// 对象解构
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = o;

let { a, ...passthrough } = o;
let total = passthrough.b + passthrough.c.length;

//指定类型
let {a, b}: {a: string, b: number} = o;

// 展开
let first = [1, 2];
let second = [3, 4];
// 展开操作创建了 first和second的一份浅拷贝。
let bothPlus = [0, ...first, ...second, 5];


//对象展开会丢失 方法
class C {
  p = 12;
  m() {
  }
}
let c = new C();
let clone = { ...c };
clone.p; // ok
clone.m(); // error!