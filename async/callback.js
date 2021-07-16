'use strinct';


//자바스크립트는 동기적!!
//호이스팅이 된 이후부터, 작성한 순서대로 하나하나 동기적으로 실행
// hoisting : var, function 선언들이 자동으로 제일 위로 올라가는 것.

console.log('1');

//비동기적으로.
setTimeout(()=>
    console.log('2'),1000);
//1초가 지나면 실행해줘! CallBack

console.log('3');

//Synchronous callback
//print라는 콜백함수 전달받음!
function printImmediately(print){
    print();
}

printImmediately(()=>console.log('hello'));


//Asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print,timeout);
}

printWithDelay(()=>console.log('async callback'),2000);


//👀 콜백지옥!!!
class UserStorage{
    loninUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id==='ellie'&&password==='dream')||
                (id==='coder'&&password==='academy')
            ){
                onSuccess(id); //전달받은 콜백 실행
            } else {
                onError(new Error('not found'));
            }
        },2000) //백엔드 있는 것처럼 만들어본다.

    }
    getRoles(user, onSuccess, OnError){
        setTimeout(()=>{
            if(user=='ellie'){
                onSuccess({name:'ellie',role:'admin'});
            }else{
                onError(new Error('no access'));
            }
        },1000)

    }
}

//1. 사용자에게 id, pw 받아옴
//2. login
//3. id를 이용해 역할 요청.
//4. 사용자 오브젝트 출력

const userStorage=new UserStorage();
const id=prompt('enter your id');
const password= prompt('enter your password');
userStorage.loninUser(id,password,

    (user)=>{
        userStorage.getRoles(user,
            (userwithRole)=>{
                alert(
                    `Hello ${userwithRole.name}, you have a ${userwithRole.role} role`
                )
            },
            error=>{
            console.log(error);
            }

            )


    },

    (error)=>{console.log(error)}
)

//가독성이 너무 떨어짐..!
//비즈니스 로직을 이해하는 것이 어려움
