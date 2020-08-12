const http=require("http");
var a=0;
var server=http.createServer(function(req,res){
	a++;
	res.end(a.toString());
})
server.listen(3030);
console.log("服务已启动");