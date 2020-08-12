// 封装数据的数据库
var mysql=require("mysql");
var pool=mysql.createPool({
	host:"localhost",
	port:"3306",
	user:"root",
	password:"root",
	database:"web18"
})
exports.query=function(sql,arr,callback){
	pool.getConnection(function(err,connection){
		if(err){
			throw err;
			return;
		}
		connection.query(sql,arr,function(error,results,fileds){
			connection.release();
			if(error) throw error
			callback && callback(results,fileds)
		})
	})
}