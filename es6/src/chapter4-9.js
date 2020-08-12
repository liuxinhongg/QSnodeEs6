{
	// 获取dom元素
	const inputobj=document.getElementById("oInput");
	const txtobj=document.getElementById("txt");
	// 初始化代理对象
	const obj={};
	// 配置代理选项
	const handle={
		get:function(target,key){
			return Reflect.get(target,key)
		},
		set:function(target,key,value){
			if(key==="text"){
				// 数据的双向绑定
				inputobj.value=inputobj.value === value ? inputobj.value : value;
				txtobj.innerHTML=value
			}
			return Reflect.set(target,key,value)
		}
	}
	let objProxy=new Proxy(obj,handle);
	inputobj.addEventListener("keyup",function(e){
		objProxy.text=e.target.value;
		console.log(objProxy);
	})
	objProxy.text=1123111;  
}