const express = require('express')
const moment=require('moment')
const app = express()
const port = 3000



//Run node as a web server for hosting static files (html)
app.use(express.static(__dirname+"/public"))

var log=function(message){
    var time=moment().format()
    console.log('[Server]@' +time+' '+message)
}
var adder=function(num1,num2){
    var result=num1+num2
    return result
}
app.get('/addresult',function(req,res){
    console.log("sum")
    var num1=parseInt(req.query.num1)
    var num2=parseInt(req.query.num2)
    var result= adder(num1,num2)
    res.send(String(result))
   });

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
