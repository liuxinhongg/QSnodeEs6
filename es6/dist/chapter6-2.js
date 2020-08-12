"use strict";

// 解决回调地狱[event Loop] Promise
{}
/*
function ajax(cb){
	setTimeout(()=>{
		cb && cb();
	},1000)
}
ajax(()=>{
	console.log("任务1");
})
*/
/* function ajax(cb){
	setTimeout(()=>{
		cb && cb(()=>{
			console.log("任务2");
		})
	},1000)
}
ajax((cb2)=>{
	console.log("任务1");
	setTimeout(()=>{
		cb2 && cb2();
	},1000)
}) */

// promise 改造一下回调地狱
// this.axiso(url,参数).then((res)=>{console.log()}).catch(res=>{})
/* {
	function ajax(){
		return new Promise((reslove,reject)=>{
			setTimeout(()=>reslove(),1000);
		})
	}
	// 链式回调
	ajax().then(()=>{
		console.log("任务1");
	})
} */
// event loop
/* {
	function ajax(){
		return new Promise((reslove,reject)=>{
			setTimeout(()=>reslove(),1000);
		})
	}
	ajax().then(()=>{
		console.log("任务1");
		return new Promise(reslove=>{
			setTimeout(()=>reslove(),1000);
		})
	}).then(()=>{
		console.log("任务2");
	})
} */
// catch 捕获异常
/* {
	function judgeNumber(num){
		return new Promise((reslove,reject)=>{
			if(typeof(num)==="number"){
				reslove(num);
			}else{
				const err =new Error("请输入数字");
				reject(err);
			}
		})
	}
	judgeNumber("3")
	   .then((num)=>{console.log(num)})
	   .catch(err=>console.log(err))
} */
// promise.all
{
	// let arr=[];
	var getImage = function getImage(url) {
		return new Promise(function (reslove, reject) {
			var img = document.createElement("img");
			img.src = url;
			// arr.push(img)
			img.onload = function () {
				return reslove(img);
			};
			img.onerror = function (err) {
				return reject(err);
			};
		});
	};

	var showImage = function showImage(imgs) {
		console.log(imgs);
		imgs.forEach(function (item) {
			document.body.appendChild(item);
		});
	};
	// Promise.all([getImage(imgUrl1),getImage(imgUrl2),getImage(imgUrl3)]).then(showImage) 
	/**/


	var showFristImage = function showFristImage(img) {
		document.body.appendChild(img);
	};

	/* let img=document.createElement("img");
 img.src="./images/cat1.jpg"
 
 document.body.appendChild(img); */
	var imgUrl1 = "./images/cat1.jpg";
	var imgUrl2 = "./images/cat2.jpg";
	var imgUrl3 = "./images/cat3.jpg";
	Promise.race([getImage(imgUrl1), getImage(imgUrl2), getImage(imgUrl3)]).then(showFristImage);
}