const http=require("http");
const server=http.createServer(function(req,res){
	res.setHeader("Content-type","text/html;charset=utf-8");
	var num=parseInt(Math.random()*999);
	var ips=req.connection.remoteAddress;
	console.log(ips);
	if(num===666){
		console.log(num+"恭喜！"+ ips);
		throw new Error("game over");
	}
	res.end(num.toString()+"【ip】"+ips);
})
server.listen(3030);