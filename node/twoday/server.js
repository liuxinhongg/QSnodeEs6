let db=require("./db.js");
let http=require("http");
const server=http.createServer(function(req,res){
	db.query("select * from user_insert",[],function(result,faileds){
		res.setHeader("Content-type","text/html;charset=utf-8")
		res.end(JSON.stringify(result))
	})
})
server.listen(3000);
console.log("服务已启动~")