{
  console.log('a', `\u0061`);
  console.log('s', `\u20BB7`); //>0xFFFF

  console.log('s', `\u{20BB7}`);


}


{
  // 每两个字节为一个 长度
  let s = '𠮷';
  console.log('length', s.length);
  //取字符
  console.log('0', s.charAt(0));
  console.log('1', s.charAt(1));
  //取unicode 编码值
  console.log('at0', s.charCodeAt(0));
  console.log('at1', s.charCodeAt(1));

  let s1 = '𠮷a';
  console.log('length', s1.length);
  // 取unicode  e6
  console.log('code0', s1.codePointAt(0));
  console.log('code0', s1.codePointAt(0).toString(16));
  console.log('code1', s1.codePointAt(1));
  console.log('code2', s1.codePointAt(2));
}

{
  console.log(String.fromCharCode("0x20bb7"));
  console.log(String.fromCodePoint("0x20bb7"));
}

{
  let str = '\u{20bb7}abc';
  for (let i = 0; i < str.length; i++) {
    console.log('es5', str[i]);
  }
  for (let code of str) {
    //打印每一个字符的 unicode
    console.log('es6', code);
  }
}

{
  let str = "string";
  console.log('includes', str.includes("c"));
  console.log('start', str.startsWith('str'));
  console.log('end', str.endsWith('ng'));
}

{
  let str = "abc";
  // 重复两次 ‘abcabc’
  console.log(str.repeat(2));
}

{
  let name = "list";
  let info = "hello world";
  let m = `i am ${name},${info}`;
  console.log(m);
}

{
  //补白第一个参数的长度为2
  //01
  console.log('1'.padStart(2, '0'));
  console.log('1'.padEnd(2, '0'));
  //10
}

{
  let user = {
    name: 'list',
    info: 'hello world'
  };
  // 标签模版
  // 适用场景多语言
  // 防止xss 攻击
  console.log(abc `i am ${user.name},${user.info}`);

  function abc(s, v1, v2) {
    console.log(s, v1, v2);
    return s + v1 + v2
  }
}


{
  // 忽略\n
  console.log(String.raw `Hi\n${1+2}`);
  console.log(`Hi\n${1+2}`);
}
