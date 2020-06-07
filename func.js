const { odd, even } = require('./var'); // 변수값을 불러온다 // const odd = '홀수입니다'; const even = '짝수입니다' 모듈 exports를 걸어놨기때문에 require이 통한다.

function checkOddOrEven(num) {
    if ( num % 2 ) { // 홀수면 // %=나머지 , 짝수면 나머지가 0 이므로 false 즉 even, 홀수면 나머지가 1이므로 true odd
        return odd;
    }
    return even;
}

module.exports = checkOddOrEven; // 함수를 모듈 exports로 뺌 (다른곳에서 모듈을 사용할수있게 하기위함) // module.exports는 객체뿐만아니라 함수나 변수또한 대입 할수있다.