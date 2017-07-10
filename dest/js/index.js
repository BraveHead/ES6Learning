/**
 * Created by Yy on 2017/7/7.
 */


for(let a of "foo123"){
    console.log(a);
}

console.log('12'.padStart(10, 'YYYY-MM-DD'));

let obj = {
    "name":"xiaoming",
    "age":10
};

$('#result').append(`
    <p>My name is: <b>${obj.name}</b>,</p>
    my age is: <b>${obj.age}</b>
`);


$('#result').html(`
<ul>
    <li>first</li>
    <li>second</li>
</ul>
`.trim());

console.log(Number.isInteger(25.01));

console.log(Math.abs(0.00000000000000334-0.00000000000000335) < Number.EPSILON);

function point(x, y = 'world') {
    console.log(x, y);
}


point('Hello');
point('hello','sb');
point('hello','');

function point1(x =0, y=0) {
    this.x = x;
    this.y = y;
}

let p = new point1();

console.log(p.x, p.y);

const sortNumber = (...number) => number.sort();

console.log(sortNumber(1,4,2,312,45,));

console.log(sortNumber.name);

let sum = (num1, num2) =>  {return num1+num2;}

console.log(sum(1,2));

const full = ({first, last}) => first+ '' + last;

const person = {
    first: 'wo shi',
    last: " sb"
};

const isEven = n => {return n%2 === 0};
const square = n => n*n;

console.log(full(person));

console.log(isEven(13), square(10));

console.log([1,2,3].map(x => x*x));

const headAndTail = (head, ...tail) => {
    return [head, tail];
};

headAndTail(1, 2,3,3,4);

const  s = new Set();

[2,3,4,5,23,45,2,3].forEach(x => s.add(x));

for(let i of s){
    console.log(i);
}

//
const set = new Set([1,2,3,4,5,5]);


console.log([...set]);
//

function divs() {
    return [...document.querySelectorAll("div")];
}
const item = new Set(divs());

console.log(item.size);

//
const set1 = new Set();
set1.add({a:12});

console.log(set1);
set1.add({a:12});
console.log(set1)
console.log('..........');


//
const a = new Set();
a.add(1).add(2).add(2).add(3);
console.log(a);
console.log(a.has(1), a.has(2), a.delete(2), a.has(2));

//
const b = new Set([1,2,3,4,5]);
console.log(b, Array.from(b));


//数组去重的方法
/*
function dedupe(array) {
    return Array.from(new Se

let setA = new Set(['red', 'blut(array));
}*/

console.log(dedupe([1,2,3,4,3,4]));

//set的遍历的方法e', 'yellow']);
for(let i of setA.values()){
    console.log(i);
}
//set 实现并集，交集，和差集

const  arrayA = [1,2,3,4];
const  arrayB = [2,3,4,5];

function addArray(a, b) {
    return new Set([...a, ...b]);
}

function commonArr(a, b) {
    return new Set([...a].filter( x => b.has(x)));
}

function difArr(a, b) {
    return new Set([...a].filter( x => !b.has(x)));
}

console.log(addArray(arrayA, arrayB), commonArr(arrayA, arrayB), difArr(arrayA, arrayB));