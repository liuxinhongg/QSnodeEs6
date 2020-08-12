// 结构赋值
/*
{
    let a, b;
    [a, b] = [11, 22];
    console.log(a, b);
} {
    let a, b, c;
    [a, b, c] = [11, 22];
    console.log(a, b, c); //11,22,undefined
} {
    let a, b, c;
    [a, b, c = 33] = [11, 22, 44];
    console.log(a, b, c); //11 22 33
}
// other
{
    let a, other;
    [a, ...other] = [1, 2, 3, 4, 5];
    console.log(a, other); //1,[2, 3, 4, 5]

} {
    let a, b;
    [a, , b] = [1, 2, 3];
    console.log(a, b);
}
{
    let a, b;
    ({ a, b } = { a: 11, b: 22 })
    console.log(a, b);
} 
{
    let shu, sum;
    ({ a: shu, b: sum } = { a: 1, b: 2 });
    console.log(shu, sum); //1,2
}*/
{
    function fn() {
        return {
            name: '坤坤',
            nameList: [{
                name: 'kun',
            }]
        }
    }
    let b = fn();
    let { name: person, nameList: [{ name: otherperson }] } = b;
    console.log(person, otherperson);
}