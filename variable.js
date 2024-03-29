//1. use strict
// added in ES 5
// use this for Vanila Javascript 
'use strict'; 

//2. Variable
//let (added in ES6)

let globeName='global name';

{
let namee='ellie';
console.log(namee);
namee='hello';
console.log(namee);
}

//console.log(namee);
console.log(globeName);

//var (dont' ever use this!)
// var hoisting (move declarartion from bottom to top)
// has no block scope
{
age=4;
var age;
}

console.log(age);


//3. Constants
//favor immutable data type alwyas for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWek=7;
const maxNumber=5;


//4. Variable types
// primitive, single item : number, string, boolean, null, undefine, symbol
// object , box container
// function, first-class function

const count=17; //integer
const size=17.1 ; //decimal number
console.log(`vlaue : ${count}, type: ${typeof count}`); //vlaue : 17, type: number
console.log(`vlaue : ${size}, type: ${typeof size}`); //vlaue : 17.1, type: number


// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21;

// 5. Dynamic typing: dynamically typed language
let text = 'hello'; //string
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1; //number
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5; //string 75
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2'; //number 4
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));