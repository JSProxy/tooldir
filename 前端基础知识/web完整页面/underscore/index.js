var _ = require('underscore/underscore-min')

var arr = [2, 2, 3, 5, 6, 4, 8]
var obj = {
  name: 'bob',
  school: 'No.1 middle school',
  address: 'xueyuan road'
}

var mapArr1 = _.map(arr, function (obj) {
  return obj * obj
})
var mapObj1 = _.map(obj, function (value, key) {

  return [key, value]
})
console.log(mapArr1)
console.log(mapObj1)

var e1 = _.every(arr, (x) => {
  return x > 1
})
var e2 = _.every(obj, (value, key) =>
  value == "ab"
)
console.log(e1, 'every')
console.log(e2, 'every')

var s1 = _.some(arr, (x) => {
  return x > 88
})
var s2 = _.some(obj, (value, key) => {
  return value == "bob"
})
console.log(s1, 'some')
console.log(s2, 'some')

var max = _.max(arr)
var min = _.min(arr)
console.log("最大值", max)
console.log("最小值", min)

// 集合归类   

var scores = [20, 81, 98, 35, 76, 24, 34, 56, 76, 67, 56, 88, 99]
var groups = _.groupBy(scores, (x) => {
  if (x < 60) return 'C'
  else if (x < 80) return 'B'
  else return 'A'
})
console.log(groups)

// 随机打乱集合
var radomArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var currentRadomArr = _.shuffle(radomArr)

//随机选则
var currentRadom1 = _.sample(radomArr)
var currentRadom3 = _.sample(radomArr, 3)
console.log("随机打乱集合", currentRadomArr)
console.log("随机选中1个", currentRadom1)
console.log("随机选中3个", currentRadom3)

var arr = [2, 4, 6, 8];
_.first(arr); // 2
_.last(arr); // 8

_.flatten([1, [2],
  [3, [
    [4],
    [5]
  ]]
]); // [1, 2, 3, 4, 5]

// 元素对其
var names = ['Adam', 'Lisa', 'Bart'];
var scores = [85, 92, 59];
_.zip(names, scores);
// [['Adam', 85], ['Lisa', 92], ['Bart', 59]]

// 反过来
var namesAndScores = [
  ['Adam', 85],
  ['Lisa', 92],
  ['Bart', 59]
];
_.unzip(namesAndScores);
// [['Adam', 'Lisa', 'Bart'], [85, 92, 59]]

// 
var names = ['Adam', 'Lisa', 'Bart'];
var scores = [85, 92, 59];
_.object(names, scores);
// {Adam: 85, Lisa: 92, Bart: 59}


// 从0开始小于10:
_.range(10); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// 从1开始小于11：
_.range(1, 11); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 从0开始小于30，步长5:
_.range(0, 30, 5); // [0, 5, 10, 15, 20, 25]

// 从0开始大于-10，步长-1:
_.range(0, -10, -1); // [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]

// 去重复
var reArr = ['Apple', 'orange', 'banana', 'ORANGE', 'apple', 'PEAR'];
// 不区分大小写 去重复
console.log(_.uniq(reArr.toString().toLowerCase().split(',')))