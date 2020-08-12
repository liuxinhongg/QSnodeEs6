{
	function aa(x,y){
		y=y||'hello';
		console.log(x+" "+y);
	}
	aa("world");
	aa("world","");
	function es6aa(x,y="world"){
		console.log("es6",x+y)
	}
	es6aa("hello");//helloworld
	es6aa("hello","");//hello
}
// rest参数
{
	function add(...rest){
		let sum=0;
		for(let value of rest){
			sum+=value;
		}
		return sum;
	}
	console.log(add(1,2,34,4,5));
}
{
	console.log(...[1,2,3,4,45]);
}
// 尾调用
{
	function step2(x){
		console.log("尾调用",x);
	}
	function step1(x){
		return step2(x);
	}
	step1(12);
}