'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value }; 키와 벨류의 집합체.
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 }; //바로 생성 가능
print(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;  //!!! 뒤늦게 타입 추가 가능.. 되도록이면 안쓰는 게 좋음
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
// key should be always string
console.log(ellie.name);
console.log(ellie['name']); //string 타입으로 접근 가능
ellie['hasJob'] = true;
console.log(ellie.hasJob);

//동적으로 키 이름을 받아올 때 쓰임@!
function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('elile', 30);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie); //키가 있는지 없는지 확인
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random); //undefined


// 6. for..in vs for..of
// for (key in obj)
console.clear();

//in : key
for (let key in ellie) {
    console.log(key);
}

// for (value of iterable)

//of : value
const array = [1, 2, 4, 5];
for (let value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
console.log(user);

// old way
//오브젝트 복사
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

//최근 방법

// const user4 = {};
// Object.assign(user4, user);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); //blue -> color 값을 덮어씌웠기 때문!
console.log(mixed.size); //big
