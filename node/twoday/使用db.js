let db=require("./db.js");
// 查询
/* db.query("select * from user_insert",[],function(err,result){
	console.log(result)
}) */
db.query("insert into user_insert(username,password,phone,email) values(?,?,?,?)",["罗碧云","1111110","12324324","124235@email"],function(result,fileds){
	if(fileds){
		console.log("插入失败");
		return;
	}
	console.log(result);
})