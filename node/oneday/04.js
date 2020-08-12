const http=require("http");
// files fs
const fs=require("fs");
const server=http.createServer(function(req,res){
	res.setHeader("Content-type","text/html;charset=utf-8");
	/* fs.readFile('./text.txt',function(err,data){
		if(err){
			console.log("读取文件失败");
			return;
		}
		res.end(data);
	}) */
	res.setHeader("Access-Control-Allow-Origin","*");//解决跨域
	fs.readFile("sqy.json",function(err,data){
		if(err){
			console.log("读取文件失败");
			return;
		}
		res.end(data)
	})
})
server.listen(3030);
console.log("服务已启动~")