const odd = '홀수입니다';
const even = '짝수입니다';

module.exports = {
    odd,
    even,
};
// exports.odd = '홀수입니다';
// exports.even = '짝수입니다';
// 이렇게도 쓸수있다.
// 단 module.exports와 exports객체는 참조 관계가 있으므로, 한 모듈에 동시에 사용하지 않는 것이 좋다.

// module 안의 필드인 exports에 odd와 even을 필드로 넣었다
// 변수를 모아둔 모듈 만들기
// 다른 파일에서 이 파일을 불러오면 module.exports에 대입된 변수값을 사용할수 있다.
// 노드안에 내장된 콘솔창을 REPL 이라고한다. Read 코드를 읽고 Eval 해석하고 Print 결과물을 반환 Loop 종료될때까지 반복한다는 말의 줄임말이다.