// 箭头函数
{
	function aa(x) {
		// let x
	}
	// console.log(aa(12));
}
// 箭头函数必须是匿名函数
{
	/* const arrow=function(x){
		console.log(x)
	} */
	const arrow=(x)=>{
		console.log(x)
	}
	arrow(12);
}
// 箭头函数里面只有一个参数，可以省略小括号
{
	/* const arrow=x=>{
		return x+2;
	} */
	const arrow=x=>x+2
	console.log(arrow(2));//4
}
// 不绑定this
{
	const obj={
		name:"xiaoming",
		age:20,
		height:180,
		sum(){
			/* setTimeout(function(){
				console.log(this.name,this.age)
			},1000) */
			//
			setTimeout(()=>{
				// console.log(this)
				console.log(this.name,this.age);
			},1000) 
		}
	}
	obj.sum();
}