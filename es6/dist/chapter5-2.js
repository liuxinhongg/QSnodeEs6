"use strict";

// 箭头函数
{
	var aa = function aa(x) {}
	// let x

	// console.log(aa(12));
	;
}
// 箭头函数必须是匿名函数
{
	/* const arrow=function(x){
 	console.log(x)
 } */
	var arrow = function arrow(x) {
		console.log(x);
	};
	arrow(12);
}
// 箭头函数里面只有一个参数，可以省略小括号
{
	/* const arrow=x=>{
 	return x+2;
 } */
	var _arrow = function _arrow(x) {
		return x + 2;
	};
	console.log(_arrow(2)); //4
}
// 不绑定this
{
	var obj = {
		name: "xiaoming",
		age: 20,
		height: 180,
		sum: function sum() {
			var _this = this;

			/* setTimeout(function(){
   	console.log(this.name,this.age)
   },1000) */
			//
			setTimeout(function () {
				// console.log(this)
				console.log(_this.name, _this.age);
			}, 1000);
		}
	};
	obj.sum();
}