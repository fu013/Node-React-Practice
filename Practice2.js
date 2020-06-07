// es6이상에서 새롭게 등장한 let, const 
// const와 let은 for,while,if,function 에서의 중괄호 안에다가 선언을하면, var와 다르게 스크립트에서 자동으로 전역변수로 생성되지않는다.
// 또한 const는 값을 상수로 만 쓸수있고 (변하지않는 값) let은 변수로 쓸수있다(변하는값).
var func = function add1(x, y) {
    return x + y;
}

var func = function (x, y) {
    return x + y;
}

var func = (x,y) => {return x+y;}

var func = (x,y) => {x+y; console(x);}


const add2 = (x, y) => {
    return x + y;
};

const add3 = (x, y) => x + y;

const add4 = (x, y) => (x + y);

function not1(x) {
    return !x;
}
const not2 = x => !x;