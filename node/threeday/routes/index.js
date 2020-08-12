var express = require('express');
var router = express.Router();
var db=require("../config/db.js")
var User=require("../controller/user/user.js")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.all("*",function(req,res,next){
	res.header("Access-Control-Allow-Origin","*")
	res.header("Content-type","text/html;charset=utf-8")
	res.header("Access-Control-Allow-Methods","*");
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next()
})
let userinfo=[
	{username:"张三",age:18,hobby:"playing"},
	{username:"李四",age:18,hobby:"eating"}, 
	{username:"小明",age:20,hobby:"swimming"},
	{username:"小智",age:18,hobby:"dancing"},
	{username:"小花",age:16,hobby:"drawing"},
]
router.post("/register",User.user_register)
/* router.post('/register',function(req,res,next){
	console.log(req.body);
	var user=req.body.username
	var password=req.body.password;
	var phone=req.body.phone;
	var email=req.body.email;
	if((user==''||user==undefined)&&(password==''||password==undefined)){
		res.send({"msg":"用户名或密码格式错误","code":-1});
		return;
	}
	 var searchSql="select * from user_insert where username=?"
	 db.query(searchSql,[user],function(result,faildes){
		 if(result.length){
			 res.send({"msg":"用户已存在","code":1})
		 }else{
			 var addSql="insert into user_insert(username,password,phone,email) values(?,?,?,?)";
			var addSqlParams=[user,password,phone,email];
			db.query(addSql,addSqlParams,function(result,faileds){
				if(faileds){
					throw faileds;
					return;
				}
				res.send({"msg":"注册成功~","code":0})
			})
		 }
	 })
}) */
//登录
router.post("/login",function(req,res,next){
	var user=req.body.username;
	var pass=req.body.password;
	if(user==''&&pass==''){
		res.send({"msg":"用户名或密码不能为空","code":-1});
		return;
	}
	db.query("select * from user_insert where username=?",[user],function(result,faileds){
		console.log(result);
		if(result.length){
			if(result[0].password==pass){
				res.send({"msg":"登录成功~"})
			}else{
				res.send({"msg":"密码错误","code":2})
			}
		}else{
			res.send({"msg":"用户名不存在","code":1})
		}
	})
})
// 获取用户信息
router.get("/userinfo",function(req,res,next){
	var user=req.query.username;
	if(user==''||user==undefined){
		res.send({"msg":"用户名不能为空","code":-1});
		return;
	}
	db.query("select * from user_insert where username=?",[user],function(result,failes){
		if(result.length){
			res.send({"msg":"获取成功","code":0,"data":result[0]})
		}else{
			res.send({"msg":"用户名不存在，请输入正确的用户名","code":1});
			return;
		}
	})
})
/* router.get('/register',function(req,res,next){
	console.log(req.query)
	var user=req.query.username
	var password=req.query.password;
	var phone=req.query.phone;
	var email=req.query.email;
	var addSql="insert into user_insert(username,password,phone,email) values(?,?,?,?)";
	var addSqlParams=[user,password,phone,email];
	db.query(addSql,addSqlParams,function(result,faileds){
		if(faileds){
			throw faileds;
			return;
		}
		res.send({"msg":"注册成功~",code:0})
	})
}) */

module.exports = router;
