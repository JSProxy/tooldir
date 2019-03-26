// 反向映射
enum Enum1{
    A
}
let a = Enum1.A;
let nameOfA = Enum1[a]; // "A"

//常量枚举
// 常量枚举不允许包含计算成员。
const enum Directions {
    Up,
    Down,
    Left,
    Right
}
// 外部枚举
declare enum Enum2 {
    A = 1,
    B,
    C = 2
}
//计算的和常量成员
enum FileAccess {
    // constant members
    None,
    Read    = 1 << 1,
    Write   = 1 << 2,
    ReadWrite  = Read | Write,
    // computed member
    G = "123".length
}