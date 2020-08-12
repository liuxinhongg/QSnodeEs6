// 引入内置模块http,require引用
const http=require("http");
// 创建服务器
var server=http.createServer(function(req,res){
	res.setHeader("Content-type","text/html;charset=utf-8");
	res.end("哈哈哈哈~");
})
server.listen(3030);
console.log("服务器已启动~")
