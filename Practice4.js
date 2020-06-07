// Javascript Object Notation 
// 객체안에 필드생성
// promise 비동기식 프로그래밍 구조

const condition = true;
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('성공');
    } else {
        reject('실패');
    }
});

function a() {
    return console;
}

var result = a();

function Test() {
    return;
    this.name = "seungchean";
    this.age = 24;
}

var object = {
    name : "seungchean",
    age : 24,
    result: false,
    then: function(func) {
        if (result) {
            func();
        }
    }
}

var object2 = Test();
object2.name;

object.log(3, 4);



console.log(object.name);
console.log(object.age);


var func = function (resolve, reject) {
    resolve(message);
};

var result = promise.then(func);

var result2 = result.then((message2) => {
    return new Promise((resolve, reject) => {
        resolve(message2);
    });
});

var result3 = result2.then((messag3) => {
    return new Promise((resolve, reject) => {
        resolve(message3);
    });
});

result3.catch((error) => {
    console.error(error);
});


const x = new Promise2((resolve, reject) => { });

// ctrl a + k + f
