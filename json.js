'use strict';

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json); //true

json = JSON.stringify(['apple', 'banana']);
console.log(json); //["apple","banana"] 쌍따옴표


//Object
const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: function () {
        console.log(`${this.name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);
//{"name":"tori","color":"white","size":null,"birthDate":"2021-07-16T04:40:43.305Z"}
//함수는 데이터가 아니기 때문에 제외.


json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);
//{"name":"tori","color":"white","size":null}

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
// console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump(); //안됨!!

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate()); //그냥 쓸 경우,,,는 string 으로 만든 것을 다시 parse한 것이기 때문에 안 됨..
