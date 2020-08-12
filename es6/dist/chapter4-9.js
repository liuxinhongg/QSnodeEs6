"use strict";

{
	// 获取dom元素
	var inputobj = document.getElementById("oInput");
	var txtobj = document.getElementById("txt");
	// 初始化代理对象
	var obj = {};
	// 配置代理选项
	var handle = {
		get: function get(target, key) {
			return Reflect.get(target, key);
		},
		set: function set(target, key, value) {
			if (key === "text") {
				// 数据的双向绑定
				inputobj.value = inputobj.value === value ? inputobj.value : value;
				txtobj.innerHTML = value;
			}
			return Reflect.set(target, key, value);
		}
	};
	var objProxy = new Proxy(obj, handle);
	inputobj.addEventListener("keyup", function (e) {
		objProxy.text = e.target.value;
		console.log(objProxy);
	});
	objProxy.text = 1123111;
}