// map()数据映射
{
	const json=[{title:'es6',status:0},{title:'vue',status:1},{title:'wechat',status:0}]
	let video=json.map(function(item){
		/* return {
			name:item.title,
			statusTxt:item.status?"已学习":"学习中"
		}
		item.statu=item.status?"已学习":"学习中";
		return item */
		// Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
		let obj={};
		Object.assign(obj,item);
		obj.statusTxt=item.status?"已学习":"学习中";
		return obj
	})
	console.log(video)
}
//reduce 
// reduce(function(返回值,curvalue,currindex,array){},[]/{})
{
	// ++a;a++
  const namelist="zkzkzkkzab";
  // console.log(namelist.split(''));
  let result=namelist.split('').reduce(function(acc,cur){
	  acc[cur] ? acc[cur]++ : acc[cur]=1
	  console.log(acc[cur],acc)
	  return acc;
  },{})//设置当前的acc为空的对象，并且初始值为空对象
  console.log(result);
}