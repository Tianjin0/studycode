var express = require("express");
var path = require("path");
var app = express();
app.set('views',path.join(__dirname,'views'));
app.set('view engine','jade');
app.get("/",function(req,res){
  res.send("hello");
})
app.get('/login',function(req,res){
  var user = "小龙";
  res.render()
})
app.get('/web',function(req,res){
  res.send("名为web的路由");
})
app.use(function(req,res){
  res.send("404");
})
app.listen(3002);