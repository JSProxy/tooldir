var http = require('http')
var fs = require('fs')
var request = require('request')
http
.createServer(function(req,res){

    // fs.readFile('logo.png', function(err, data){
    //     if(err){
    //         console.log('file no exist!')
    //     }else{
    //         res.writeHeader(200,{'Context-Type' : 'text/html'})
    //         res.end(data)
    //     }
    // })

    //本地
    // fs.createReadStream('logo.png').pipe(res)
    //网络
    request('https://img2.mukewang.com/59a4d6910001984701000100-140-140.jpg').pipe(res)
})
.listen(5900)