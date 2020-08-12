'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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
    var fn = function fn() {
        return {
            name: '坤坤',
            nameList: [{
                name: 'kun'
            }]
        };
    };

    var b = fn();

    var person = b.name,
        _b$nameList = _slicedToArray(b.nameList, 1),
        otherperson = _b$nameList[0].name;

    console.log(person, otherperson);
}