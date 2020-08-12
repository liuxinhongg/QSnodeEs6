//es5
{
    const str1 = "a";
    const str2 = '\u20bb7';
    console.log(str2); //₻7
}
// es6{}
{
    const str3 = '\u{20bb7}';
    console.log(str3);
} {
    let str1 = 'askjfhkjsadf';
    for (const word of str1) {
        // console.log(word);
    }
}
{
    let str='sqsqsqsqsq12346';
    console.log('includes',str.includes('sqnh'));//true false
    console.log('startsWidth',str.startsWith('sq'));//false true
    console.log("endsWidth",str.endsWith("sq"));//false
    let str1='ljyl';
    console.log(str1.repeat(3));//ljylljylljyl
}
//头部补全
{
    let str='fxm';
    str=str.padStart(8,"wh");//whwhwfxm
}
//尾部补全
{
    let str='kunkun';
    str=str.padEnd(10,'zsl');//kunkunzslz
}
// 模板字符串
{
    let name="xiongwenhao";
    let age=18;
    let str='我叫'+name+',我今年'+age+'岁了';
    console.log(str);//es5
    let str1=`我叫${name},我今年${age}岁了`;
    console.log(str1);//es6
}
{
    let arr=[1,2,3,4,5];
    let arr2=[...arr];
    
    console.log(arr2)
}