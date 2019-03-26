{
  console.log('B', 0B111110111); // 十进制写成二进制0b开头 0b 0B
  console.log(0o767); /// 八进制 0o

}

{
  //isFinite  是不是有尽数
  console.log('15', Number.isFinite(15));
  console.log('NaN', Number.isFinite(NaN));
  console.log('1/0', Number.isFinite('true' / 0));
  //是不是数字
  console.log('NaN', Number.isNaN(NaN));
  console.log('0', Number.isNaN(0));

}

{

  console.log('25', Number.isInteger(25));true
  console.log('25.0', Number.isInteger(25.0));true
  console.log('25.1', Number.isInteger(25.1));false
  console.log('25.1', Number.isInteger('25'));false
}

{
  // 最大上线 最小下限
  console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
  // 该数是不是在范围内的
  console.log('10', Number.isSafeInteger(10));true
  console.log('a', Number.isSafeInteger('a'));false
}

{
  // 返回一个小数的整数部分
  //
  console.log(4.1, Math.trunc(4.1));
  console.log(4.9, Math.trunc(4.9));
}

{
  // 判断数 是正数 负数 0 返回-1 0 1 NaN
  console.log('-5', Math.sign(-5))-1
  console.log('0', Math.sign(0)); 0
  console.log('5', Math.sign(5)); 1
  console.log('50', Math.sign('50')); 1
  console.log('foo', Math.sign('foo')); NaN 非数字
}

// 立方根     3次方
{
  console.log('-1', Math.cbrt(-1)); -1
  console.log('8', Math.cbrt(8)); 2*2*2
}
