var express = require('express')

//App setup 
var app = express()
var server = app.listen(4000,function(){
  console.log('listener to require on port 4000')

})

//static files
app.use(express.static('public'))

