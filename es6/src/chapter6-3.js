{
	function makeIte(array){
		let index=0;
		return {
			next(){
				return index<array.length ? 
				{ value:array[index++], done:false } :
				{ value:undefined,done:true }
			}
		}
	}
	let it=makeIte([1,2,3]);
	// console.log(it.next());
	// console.log(it.next());
	// console.log(it.next());
	// console.log(it.next());
}

{
	const obj={
		color:"red",
		price:18,
		size:"big",
		[Symbol.iterator](){
			let index=0;
			let value=Object.values(this);
			return {
				next(){
					if(index < value.length){
						return {
							value:value[index++],
							done:false
						}
					}else{
						return {
							value:undefined,
							done:true
						}
					}
				}
			}
		}
	}
	// const it=obj[Symbol.iterator]()
	// console.log(it.next());
	// console.log(it.next());
	// console.log(it.next());
	// console.log(it.next());
	for(const value of obj){
		console.log(value);
	}
}
/**/
{
	const arr=[1,2,3,4,5];
	// Symbol.iterator
	const fn=arr[Symbol.iterator]();
	console.log(fn.next());
	console.log(fn.next());
	console.log(fn.next());
	console.log(fn.next());
	console.log(fn.next());
	console.log(fn.next());
}
