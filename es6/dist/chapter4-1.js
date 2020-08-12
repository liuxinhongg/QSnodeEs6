'use strict';

//es5
{
    var str1 = "a";
    var str2 = '\u20BB7';
    console.log(str2); //₻7
}
// es6{}
{
    var str3 = '\uD842\uDFB7';
    console.log(str3);
}{
    var _str = 'askjfhkjsadf';
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = _str[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            // console.log(word);

            var word = _step.value;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
{
    var str = 'sqsqsqsqsq12346';
    console.log('includes', str.includes('sqnh')); //true false
    console.log('startsWidth', str.startsWith('sq')); //false true
    console.log("endsWidth", str.endsWith("sq")); //false
    var _str2 = 'ljyl';
    console.log(_str2.repeat(3)); //ljylljylljyl
}
//头部补全
{
    var _str3 = 'fxm';
    _str3 = _str3.padStart(8, "wh"); //whwhwfxm
}
//尾部补全
{
    var _str4 = 'kunkun';
    _str4 = _str4.padEnd(10, 'zsl'); //kunkunzslz
}
// 模板字符串
{
    var name = "xiongwenhao";
    var age = 18;
    var _str5 = '我叫' + name + ',我今年' + age + '岁了';
    console.log(_str5); //es5
    var _str6 = '\u6211\u53EB' + name + ',\u6211\u4ECA\u5E74' + age + '\u5C81\u4E86';
    console.log(_str6); //es6
}
{
    var arr = [1, 2, 3, 4, 5];
    var arr2 = [].concat(arr);

    console.log(arr2);
}