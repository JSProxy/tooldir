const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const tagh = x => {
  x=x.replace(/1/g,"b")
  x=x.replace(/2/g,"m")
  x=x.replace(/3/g,"s")
  x=x.replace(/4/g,"l")
  return x+":"+x.length+". "+typeof(x)
}
const tagpic=p=>{
  x = x.replace("img", "image")
  return x
}
module.exports = {
  formatTime: formatTime,
  tagh: tagh,
  tagpic:tagpic
}
