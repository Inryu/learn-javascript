'use strict'

//async & await
// clear style of using promise :)

// 1. async
async function fetchUser(){
    //do network request in 10 secs...

    return 'ellie';
}

const user = fetchUser();
console.log(user);


// 2. await ✨ : async 함수 안에서만 쓸 수 있음.
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

async function pickFruits(){

    //프로미스는 만드는 순간 바로 실행됨! (이 두 줄이 병렬적으로)
    const applePromise=getApple();
    const bananaPromise=getBanana();

    // 프로미스는 병렬적으로 실행됐고, 이걸 동시에 기다려서 출력
    const apple=await applePromise;
    const banana=await bananaPromise;
    return `${apple}+ ${banana}`;
}

pickFruits().then(console.log);


function pickAllFuits(){
    return Promise.all([getApple(),getBanana()])
        .then(fruits=>fruits.join('+ '));
}

pickAllFuits().then(console.log);

function pickOnlyOne(){
    return Promise.race([getApple(),getBanana()]);
}

pickOnlyOne().then(console.log);
