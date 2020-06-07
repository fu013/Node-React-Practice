const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside: {
        inside: {
            key: 'value',
        },
    },
};
console.time('전체 시간'); // 같은 레이블을 가진 time과 timeEnd 사이의 시간을 측정한다.
console.log('평범한 로그입니다 쉼표로 구분해 여러 값을 찍을 수 있습니다.'); // 평범한 내용을 콘솔에 표시
console.log(string, number, boolean);
console.error('에러 메세지는 console.error에 담아주세요'); // 에러를 콘솔에 표시한다.

console.dir(obj, { colors: false, depth: 2}); // console( 객체, { 옵션} ); 객체를 콘솔에 표시할때 사용, 옵션=필드 depth는 객체안의 객체(필드를) 몇단계 까지 보여줄지 결정하고, default는 2이다.
console.dir(obj, { colors: true, depth: 1}); // colors를 true로 하면 콘솔에 색이 추가된다.

console.time('시간 측정'); // time과 그다음 timeEnd 사이의 시간측정
for ( let i = 0; i < 10; i++ ) {
    let text = "냐옹 = ";
    text += i + 10;
    console.log(text);
    continue;
}
console.timeEnd('시간 측정'); // for 문이 실행되는데 걸린시간

const b = () =>  console.trace('에러 위치 추적') // console.trace(레이블) 에러가 어디서 발생했는지 추적할 수 있게 해줍니다. 에러 위치를 알수있다. 번호와 인덱스위치
const a = () =>  b();
a();

console.timeEnd('전체 시간'); // 전체코드가 실행되는데 걸리는 시간