const http=require("http");
const fs=require("fs");
let url=require("url");
const server=http.createServer(function(req,res){
	res.setHeader("Content-type","text/html;charset=utf-8");
	res.setHeader("Access-Control-Allow-Origin","*");//解决跨域
	if(req.url=='/favicon.icon'){
		return;
	}
	if(req.url==='/aa'){
		fs.readFile("./text.txt",(err,data)=>{
			if(err){
				console.log("文件读取错误~");
				return;
			}
			res.end(data);
		})
	}else if(req.url==='/bb'){
		fs.readFile("./sqy.json",(err,data)=>{
			if(err){
				console.log("文件读取错误~");
				return;
			}
			res.end(data);
		})
	}else{
		res.end("Not found 404")
	}
	
})
server.listen(3030);
console.log("服务已启动~")