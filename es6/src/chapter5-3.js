{
	function Person(name,age){
		this.name=name;
		this.age=age;
	}
	Person.prototype.sayHello=function(){
		console.log(`hello~,我叫${this.name},我今年${this.age}岁了`);
	}
	const op=new Person("张卡",3);
	// console.log(op);
}
// es6 class类
{
	class Person{
		constructor(name,age) {
		    this.name=name;
			this.age=age;
		}
		sayHello(){
			console.log(`hello~,我叫${this.name},我今年${this.age}岁了`);
		}
	}
	const op=new Person("张卡",3);
	// console.log(op)
}
/* 类的特点
继承 */
{
	class Parent{
		constructor(name="zk") {
		    this.name=name;
		}
	}
	class Child extends Parent{
		constructor(name="yh") {
			super(name)
		    this.name=name
		}
	}
	console.log(new Child());
}
// 具有get和set属性
{
	class Person{
		constructor(name="kz") {
		    this.name=name;
		}
		get fullName(){
			return this.name
		}
		set fullName(value){
			this.name=value;
		}
	}
	const p=new Person();
	console.log("get",p.fullName);
	p.fullName="zhangke";
	console.log(p.name)
}
// 静态方法
{
	class Person{
		constructor(name="zs") {
		    this.name=name;
		}
		static sayHello(obj){
			console.log("my name is"+" "+obj.name);
		}
	}
	const p=new Person("小明");
	console.log(p)
	Person.sayHello(p);//
}
// 静态属性
{
	class Person{
		// static prop="test"
		static hobby="eating"
		constructor(name="ls") {
		    this.name=name;
			// console.log(Person.aa);
		}
		static sayHello(obj){
			console.log("my name is"+" "+obj.name);
		}
	}
	// cnpm i babel-preset-es2017
	let p=new Person()
	console.log(p);
	console.log(Person.hobby)
}