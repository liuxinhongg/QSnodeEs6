// ...复制数组
{
    let arr=[1,2,3,4];
    let arr1=[...arr];
    console.log(arr1);//[1,2,3,4]
    arr.push(5);//[1,2,3,4,5]
}
// 分割数组
{
    const list=[1,'a','b','c'];
    let [,...otherlist]=list;
    console.log(otherlist);
}
// 给函数传递参数
{
    function fun(x,y){
        return x+y;
    }
    let list=[2,3];
    console.log(fun(...list))
}
// fill()填充数组,替换数组【替换全部】
{
	const list=[1,2,3,4,5];
	let list2=[...list].fill(6);
	console.log(list2);
	let list3=[...list].fill(6,0,3);
	console.log(list3);//[1, 2, 6, 4, 5]
}
// find()
{
	const listf=[
		{"title":"es6"},
		{"title":"es7",id:2},
		{"title":"es6"},
		{"title":"es9"},
	]
	let list=listf.find(function(item){
		return item.title==="es6"
	})
	console.log(list);//{title: "es6"}
	let listindex=listf.findIndex(function(item){
		return item.title==="es9";
	})
	console.log(listindex);//3
}
{
	const list=[1,2,3,4,5];
	let result=list.includes(3);
	console.log(result);//true
}
//flat展开数组的操作
{
	const list=[1,2,3,['second',4,5]];
	//es5
	let result=[].concat(...list);
	console.log(result);
	let flatlist=list.flat();
	console.log(flatlist);
	let listf=[1,2,3,['second',4,5,["third",6,7]]];
	let flatrul=listf.flat(2);
	console.log(flatrul);
}