'use strict';

/**
 * Created by Yy on 2017/7/7.
 */

//字符串的遍历器接口
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = 'foo'[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        console.log(item);
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

var text = String.fromCodePoint(0x20bb7);
for (var i = 0; i < text.length; i++) {
    console.log(text[i]);
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = text[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _item = _step2.value;

        console.log(_item);
    }

    //at()
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

console.log('abc'.charAt(1));

//includes()  返回布尔值， 表示是否找到参数字符串
// startsWith()   返回布尔值， 表示参数字符串是否在原字符串的头部
// endsWith()  返回布尔值， 表示参数字符串是否在原字符串的尾部

var searchString = 'Hello World';

//endsWidth的第二个参数与其他2个不同，表示前n个字符串
console.log(searchString.includes('Hello', 2), searchString.startsWith('Hello', 3), searchString.endsWith('ld', 12));

//repeat
console.log('x'.repeat(4), 'na'.repeat(2), 'hello'.repeat(1.4), 'hello'.repeat(2.1)); //小数的时候回取整

//字符串模板
console.log('In JavsScript \n is a line-feed, \u666E\u901A\u5B57\u7B26\u4E32');

console.log('In JavaScript this is\nnot legal.\u591A\u884C\u5B57\u7B26\u4E32');

var name = 'Bob',
    time = 'today';

console.log('Hello ' + name + ', how are you ' + time);

//在模板字符串中要是使用反引号，需要在前面加'\'转义

function log(str) {
    return console.log(str);
}

log('`Yo` World ');