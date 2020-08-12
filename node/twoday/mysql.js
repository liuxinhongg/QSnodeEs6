var mysql=require("mysql");
var db=mysql.createConnection({
	host:"localhost",
	port:"3306",
	user:"root",
	password:"root",
	database:"web18"
})
db.connect()
//表达插入
/*
var addSql="insert into user_insert(username,password,phone,email) values(?,?,?,?)";
var addSqlParams=["风学名","123456","110","123456@qq.com"];
db.query(addSql,addSqlParams,function(err,result){
	if(err){
		console.log("数据新增失败~");
		return;
	}
	console.log(result);
})*/
// 查询所有
/*
// var addSql="select * from user_insert";
// 按id查询
// var addSql="select * from user_insert where id=?";
var addSql="select username,password from user_insert where id=?";
var addSqlParams=[2];
db.query(addSql,addSqlParams,function(err,result){
	if(err){
		console.log("数据查询失败~");
		return;
	}
	console.log(result);
})*/
/* var addSql="update user_insert set username=?,password=? where id=?";
var addSqlParams=["sunqiang","110",2];
db.query(addSql,addSqlParams,function(err,result){
	if(err){
		console.log("数据更新失败~");
		return;
	}
	console.log(result);
}) */
var addSql="delete from user_insert where username=?"
var addSqlParams=["坤坤"];
db.query(addSql,addSqlParams,(err,result)=>{
	if(err){
		console.log("数据删除失败~");
		return;
	}
	console.log(result);
})
db.end();