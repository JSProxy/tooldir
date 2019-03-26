var fs = require('fs')

// 简单流
// var source = fs.readFileSync('logo.png')
// fs.writeFileSync('steam_copy_logon.png', source)



var readStream = fs.createReadStream('stram_copy_logo.js')
var n = 0
readStream
    .on('data', function(chunk){
        n++
        console.log(Buffer.isBuffer(chunk))
        // onsole.log(chunk.renderToString('utf8'))
        readStream.pause()
        console.log('data pause')
        setTimeout(() => {
            readStream.resume()
        }, 3000);
    })
    .on('readable', function(){
        console.log('data readable')
    })
    .on('end', function(){
        console.log('data end')
    })
    .on('close', function(){
        console.log('data close')
    })
    .on('error', function(e){
        console.log('data read error:'+e)
    })