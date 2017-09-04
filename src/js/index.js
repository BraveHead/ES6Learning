/**
 * Created by Yy on 2017/7/7.
 */

//字符串的遍历器接口
for(let item of 'foo'){
    console.log(item);
}

let text = String.fromCodePoint(0x20bb7);
for(let i = 0; i < text.length; i++){
    console.log(text[i]);
}

for(let item of text){
    console.log(item);
}

//at()
console.log('abc'.charAt(1));

//includes()  返回布尔值， 表示是否找到参数字符串
// startsWith()   返回布尔值， 表示参数字符串是否在原字符串的头部
// endsWith()  返回布尔值， 表示参数字符串是否在原字符串的尾部

let searchString = 'Hello World';

//endsWidth的第二个参数与其他2个不同，表示前n个字符串
console.log(searchString.includes('Hello',2), searchString.startsWith('Hello',3), searchString.endsWith('ld', 12));

//repeat
console.log('x'.repeat(4), 'na'.repeat(2), 'hello'.repeat(1.4), 'hello'.repeat(2.1));  //小数的时候回取整

//字符串模板
console.log(`In JavsScript \n is a line-feed, 普通字符串`);

console.log(`In JavaScript this is
not legal.多行字符串`);

let name = 'Bob', time = 'today';

console.log(`Hello ${name}, how are you ${time}`);

//在模板字符串中要是使用反引号，需要在前面加'\'转义

 function log(str){
    return console.log(str);
}

log(`\`\Yo\` World `);

