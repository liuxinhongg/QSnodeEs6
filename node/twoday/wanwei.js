//兼容较老版本nodejs, 如果你的项目不支持ES6可以选用该版本
//推荐使用npm安装使用sdk: npm install --save showapi-sdk
'use strict';

var showapiSdk = require('./showapi-sdk');
var showapilist={};
let http=require("http");

const server=http.createServer(function(req,res){
	res.setHeader("Content-type","text/html;charset=utf-8");
	console.log(showapilist);
	res.end(JSON.stringify(showapilist))
})
server.listen(3000);
console.log("服务已启动~")
getshowapi()
function getshowapi(){
	var appId='46452';
	var secret='c3bc2247155b4219bffb60cac4fd315c';
	//开启debug
	//showapiSdk.debug(true);
	if(!(appId&&secret)){
	  console.error('请先设置appId等测试参数,详见样例代码内注释!')
	  return;
	}
	//全局默认设置
	showapiSdk.setting({
	  url:"http://route.showapi.com/1211-1",//你要调用的API对应接入点的地址,注意需要先订购了相关套餐才能调
	  appId:appId,//你的应用id
	  secret:secret,//你的密钥
	  timeout:5000,//http超时设置
	  options:{//默认请求参数,极少用到
		testParam:'test'
	  }
	})
	var request=showapiSdk.request();
	request.appendText('count','5');
	request.post(function(data){
	  // console.info(data)
	  showapilist=data
	})
}
