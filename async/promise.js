'use strict';


//프로미스는 javascript안에 내장되어 있는 오브젝트.
// Asynchronous를 위해 사용됨 --> 콜백 함수 대신


// state : pending (operation 수행중) ->  fulfilled (완료) or rejected (문제 생김)


// Producer vs Consumer


// 1. Producer
const promise =new Promise((resolve, reject)=>{
    //doing some heavy work(network, read files);
    // 데이터를 받아오거나 하는 과정 등은 시간이 걸려서, 비동기 적으로 처리해야 함!!!
    console.log('doing somthing....'); //프로미스를 만드는 순간 전달한 콜백함수(executor)가 자동으로 실행이 됨!

    setTimeout(()=>{
       // resolve('ellie'); //성공적으로 했을 때 resolve 콜백함수 호출
        reject(new Error('no network'));
    },2000);
});


// 2. Consumers : then, catch, finally

promise
    .then((value)=>{ //value : 프로미스가 정상적으로 수행된 후 // resolve에서 전달된 'ellie'
        console.log(value); //ellie
    })
    .catch(error=>{
        console.log(error);
    })
    .finally(()=>{ //성공 실패와 상관 없슴
        console.log('finally');
    })


// 3. Promise chaining
const fetchNumber = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(1);
    },1000);
})

fetchNumber
    .then(num=>num*2)
    .then(num=>num*3)
    .then(num=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>resolve(num-1),1000);
        })
    })
    .then(num=>console.log(num));


// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error ! ${hen} => 🥚`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });


getHen()
    .then(getEgg) // = then(getEgg) 한가지만 받아서 그대로 전달하는 경우 생략버전!
    .catch(error=>{ //빵을 대신 전달해줬기 때문에, getEgg가 실패하지 않음!! 바로 다음에 캐치 써서 처리..
        return '🌭';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);


