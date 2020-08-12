{
	const say=function *(){
		yield 'a';
		yield 'b';
		yield 'c';
		return 'd';
	}
	const fn=say();
	console.log(fn.next())
	console.log(fn.next())
	console.log(fn.next())
}
/*
{
	function* gen() {
	  yield  [12,23];
	}
	const fn=gen();
	console.log(fn.next());
	console.log(fn.next());
}*/
{
	function* demo() {
	  console.log('Hello' + (yield)); // SyntaxError
	  console.log('Hello' + (yield 123)); // SyntaxError
	
	  // console.log('Hello' + (yield)); // OK
	  // console.log('Hello' + (yield 123)); // OK
	}
	const de=demo();
	// console.log(de.next())
	// console.log(de.next())
	// console.log(de.next())
	// console.log(de.next())
}
{
	let obj={
		a:1,
		b:2,
		c:3,
	}
	obj[Symbol.iterator]=function*(){
		for(const key of Object.keys(obj)){
			yield obj[key]
		}
	}
	for(const value of obj){
		// console.log(value);
	}
}
{
	const state=function *(){
		while(1){
			yield 'success';
			yield 'fail';
			yield 'pending'
		}
	}
	const stateDate=state();
	// console.log(stateDate.next())
	// console.log(stateDate.next())
	// console.log(stateDate.next())
	// console.log(stateDate.next())
	// console.log(stateDate.next())
	// console.log(stateDate.next())
	// console.log(stateDate.next())
}
/* const aa=function(){},
const aa=()=>{} */
{
	function fn1(){
		return new Promise(resolve=>{
			setTimeout(()=>{
				console.log("订单查询中");
				resolve({code:0})
			},1000)
		})
	}
	const getState=function*(){
		yield fn1();
	}
	function autoGetState(){
		const gen=getState();//得到一个迭代器
		const status=gen.next();
		status.value.then(res=>{
			if(res.code==0){
				console.log("用户付款成功")
			}else{
				console.log("用户未付款");
				setTimeout(()=>autoGetState(),1000);
			}
		})
	}
	autoGetState();
}