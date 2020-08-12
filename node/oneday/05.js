const http=require("http");
let url=require("url");
const server=http.createServer(function(req,res){
	console.log(req.url);
	if(req.url==="/favicon.ico"){
		return;
	}
	//url.parse() local pro path 参数
	var pathname=url.parse(req.url).pathname;
	console.log(pathname);
	console.log(url.parse(req.url,true));
	var query=url.parse(req.url,true).query;
	console.log(query.name);
	res.end("你好！");
})
server.listen(3030);
console.log("服务已启动~")