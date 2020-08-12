var db = require("../../config/db");
var userconfig=require("../../config/apisql.js")
class User{
	user_register(req,res,next){
		console.log(req.body);
		var user=req.body.username
		var password=req.body.password;
		var phone=req.body.phone;
		var email=req.body.email;
		if((user==''||user==undefined)&&(password==''||password==undefined)){
			res.send({"msg":"用户名或密码格式错误","code":-1});
			return;
		}
		 // var searchSql="select * from user_insert where username=?"
		 db.query(userconfig.user.userSearch,[user],function(result,faildes){
			 if(result.length){
				 res.send({"msg":"用户已存在","code":1})
			 }else{
				 var addSql="insert into user_insert(username,password,phone,email) values(?,?,?,?)";
				var addSqlParams=[user,password,phone,email];
				db.query(userconfig.user.userInsert,addSqlParams,function(result,faileds){
					if(faileds){
						throw faileds;
						return;
					}
					res.send({"msg":"注册成功~","code":0})
				})
			 }
		 })
	}
}
module.exports=new User()