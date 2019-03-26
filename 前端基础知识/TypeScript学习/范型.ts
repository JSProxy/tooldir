
//首先要在<中声明范型>
//才能使用
function identity1<T>(arg: T): T {
    return arg;
}
let result = identity1<string>("hellos");//指定类型 不指定的话便一起会制动推断


//范型类型的声明
function identity2<T>(arg: T): T {
    return arg;
}
//我们也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以。
let myIdentity1: <U>(arg: U) => U = identity2;
//页可以用对象字面量来定义
let myIdentity2: {<T>(arg: T): T} = identity2;

//我们可能想把泛型参数当作整个接口的一个参数
interface GenericIdentityFn<T> {
    (arg: T): T;
}
function identity<T>(arg: T): T {
    return arg;
}
let myIdentity: GenericIdentityFn<number> = identity;

//范型类
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

//范型内使用 
//（类的类型）
// {new(): T; } 引用构造函数的类型为 T类型
function create<T>(c: {new(): T; }): T 
{
    return new c();
}

// 一个更高级的例子，使用原型属性推断并约束构造函数与类实例的关系。
class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

//new() => A  构造函数的类型为 继承 Animal 类的类型）
function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}
createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!



