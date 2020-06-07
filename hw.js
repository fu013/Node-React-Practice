function helloWorld() {
    console.log('hellow World');
    helloNode();
}
function helloNode() {
    console.log('hellow Node');
}
helloWorld();

// 노드는 코드를 모듈로 만들 수 있다는 점에서 브라우저의 자바스크립트와는 다르다.
// 모듈의 정의 : 특정한 기능을 하는 함수나 변수들의 집합.