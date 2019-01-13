// 用node.js搭建一个web服务器
var http = require("http");//引入一个模块
var server = http.createServer(function(req,res){
  //每当有用户连接进来的时候都会触发这个函数
  res.end("hello");//所有事情处理完毕后发送给用户的内容
});//创建一个web服务器实例的方法
server.listen("3000");//服务器监听端口