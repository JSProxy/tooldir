# markdown

## markdown语法

标题语法

    1.# 标题 一共七级
    2.#标题 一共七级#
    3.只能控制两个标题= -不限
    h1
    ======
    h2
    ------
无需列表

    +1
    -2
    *3
    三种符号都可以表示
有序列表

    1.一
    2.二
    3.三

>引用

`单行代码`

```注释这里写 多行代码
alert(sss);
```

- **表格**
    |name|age|sex|
    |:----:|---:|:------|
    |tony|20|男|
    |lucy|18|女|
    |居中|右边|左边|

    表头1|表头2
    -----|-----
    aa|bb
    cc|dd
    (多个---和一个- 功能都一样)

- **链接**
    行内链接
    [百度](http://www.baidu.com)

    图片
    ![图片](http://img0.imgtn.bdimg.com/it/u=3268410945,2427581383&fm=26&gp=0.jpg)

    参数链接 换行

    [马云]:<http://www.baidu.com/> "www"

    [马云]是

- **语义**
    *斜体*_斜体_
    **粗体**__粗体__
    \~(转义字符)
    \!(转义字符)
    ~~删除线~~
- 分割线 （***） （---）三个以上

---
## markdownlint规则

- 两个 ` 之间的代码中不能有空格
- 列表缩进是2个空格 —
- 代码段必须加上类型
- 文中不能出现br这种html标号
- URL必须用< >扩起来
- MD001 航向增量/标头增量 - 航向级别一次只能增加一级
- MD002 first-heading-h1 / - first-header-h1 - 第一个标题应该是顶级标题
- MD003 标题式/标题式 - 标题样式
- MD004 ul-style - 无序列表样式
- MD005 list-indent - 同一级别的列表项的缩进不一致
- MD006 ul-start-left - 考虑在行的开头开始项目符号列表
- MD007 ul-indent - 无序列表缩进
- MD009 no-trailing-spaces - 尾随空格
- MD010 no-hard-tabs - 硬标签
- MD011 无反向链接 - 反向链接语法
- MD012 无多个空白 - 多个连续空白行
- MD013 线长度 -线长
- MD014 命令 - 显示 - 输出 - 在命令之前使用的美元符号，不显示输出
- MD018 no-missing-space-atx - 在atx样式标题上散列后没有空格
- MD019 no-multiple-space-atx - 在atx样式标题上散列后的多个空格
- MD020 no-missing-space-closed-atx - 在关闭的atx样式标题上没有内部空间的空间
- MD021 no-multiple-space-closed-atx - 封闭atx样式标题内的多个空格
- MD022 空白 - 标题/空白 - 标题 - 标题应该用空行包围
- MD023 heading-start-left / header-start-left - 标题必须从行的开头开始
- MD024 no-duplicate-heading / no-duplicate-header - 具有相同内容的多个标题
- MD025 single-h1 - 同一文档中的多个顶级标题
- MD026 no-trailing-punctuation - 标题中的尾随标点符号
- MD027 no-multiple-space-blockquote - blockquote符号后的多个空格
- MD028 no-blanks-blockquote - blockquote中的空行
- MD029 ol-prefix - 有序列表项前缀
- MD030 list-marker-space - 列表标记后的空格
- MD031 空白围栏 - 围栏代码块应该用空行包围
- MD032 空白列表 - 列表应该用空行包围
- MD033 no-inline-html - 内联HTML
- MD034 no-bare-urls - 使用裸URL
- MD035 hr-style - 水平规则样式
- MD036 无重点 - 标题/无重点 - 标题 - 强调使用而不是标题
- MD037 无空间重点 - 重点标记内的空间
- MD038 no-space-in-code - 代码范围内的空格元素
- MD039 无空间链接 - 链接文本中的空格
- MD040 fenced-code-language -受控代码块应具有指定的语言
- MD041 first-line-h1 - 文件中的第一行应该是顶级标题
- MD042 no-empty-links - 没有空链接
- MD043 required-headings / required-headers - 必需的标题结构
- MD044 专有名称 - 正确的名称应具有正确的大小写
- MD045 no-alt-text - 图像应具有替代文本（替代文字）
