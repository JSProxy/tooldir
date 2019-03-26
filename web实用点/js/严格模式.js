"use strict"
// 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
// 消除代码运行的一些不安全之处，保证代码运行的安全；
// 提高编译器效率，增加运行速度；
// 为未来新版本的Javascript做好铺垫。
// "严格模式"体现了Javascript更合理、更安全、更严谨的发展方向，包括IE 10在内的主流浏览器，都已经支持它，许多大项目已经开始全面拥抱它。
// 另一方面，同样的代码，在"严格模式"中，可能会有不一样的运行结果；一些在"正常模式"下可以运行的语句，在"严格模式"下将不能运行。掌握这些内容，有助于更细致深入地理解Javascript，让你变成一个更好的程序员。
// 
{
    x = 3.14 //未定义报错
    // 不允许删除变量或对象。不允许删除函数。
    var a = 3.14;
    delete a;

    function b() {};
    delete b;
    // 不允许变量名重名
    // 不允许使用八进制  
    var c = \010;
    // 不能使用转义字符
    var obj = {};
    Object.defineProperty(obj, "x", { value: 0, writable: false });

    obj.x = 3.14; // 报错 

    // 不允许对一个使用getter方法读取的属性进行赋值
    var obj = { get x() { return 0 } };

    obj.x = 3.14;


    function f() {
        return !this;
    }
    // 返回false，因为"this"指向全局对象，"!this"就是false

    function f() {
        "use strict";
        return !this;
    }
    // 返回true，因为严格模式下，this的值为undefined，所以"!this"为true。

    function f() {
        "use strict";
        this.a = 1;
    };
    f(); // 报错，this未定义
    // 因此，使用构造函数时，如果忘了加new，this不再指向全局对象，而是报错。
}