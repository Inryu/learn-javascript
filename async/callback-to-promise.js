'use strinct';



class UserStorage{
    loninUser(id, password){
        return new Promise((resolve, reject)=>{
            setTimeout( ()=>{
                if(
                    (id==='ellie'&&password==='dream')||
                    (id==='coder'&&password==='academy')
                ){
                    resolve(id); //전달받은 콜백 실행
                } else {
                    reject(new Error('not found'));
                }
            },2000) //백엔드 있는 것처럼 만들어본다.
        });


    }
    getRoles(user){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(user=='ellie'){
                    resolve({name:'ellie',role:'admin'});
                }else{
                    reject(new Error('no access'));
                }
            },1000)
        })


    }
}

//1. 사용자에게 id, pw 받아옴
//2. login
//3. id를 이용해 역할 요청.
//4. 사용자 오브젝트 출력

const userStorage=new UserStorage();
const id=prompt('enter your id');
const password= prompt('enter your password');



userStorage
    .loninUser(id, password)
    .then(user=>userStorage.getRoles(user))
    .then(user=>alert(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);

