var fs = require('fs')

var readStream = fs.createReadStream('1.mp3')
var writeStream = fs.createWriteStream('1-stream.mp3')

readStream.on('data', function(chunk){
   if (writeStream.write(chunk)=== false)
   {
       console.log('still cached')
    readStream.pause()
   }
})
.on('end', function()
{
    writeStream.end()
})

writeStream.on('drain', function()
{   console.log('data drains')

    readStream.resume()
})


//使用pipe   一行代码搞定
// fs.createReadStream('1.pm3').pipe(fs.createWriteStream('1-pipe.mp3'))