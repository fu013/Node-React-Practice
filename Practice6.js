// AJAX
var xhr = new XMLHttpRequest(); // XMLHttpRequest 생성자로 xhr 객체 생성
var data = {
    name: 'zerocho', // data라는 객체안에 네임필드를 스트링형식으로 zerocho로 생성
    birth: 1994, // "" Int형으로 birth필드 생성
};
xhr.onreadystatechange = function () { // 요청에 대한 콜백함수 // 이벤트 리스너로 요청한 후 서버로부터 응답이 올때, 응답을 받을수있는 필드(매소드)
    if (xhr.readyState === xhr.DONE) { // 요청이 완료되면
        if( xhr.status === 200 || xhr.status === 201 ) { // 응답 코드가 200이나 201이면
            console.log(xhr.responseTest); // 서버에서 보내주는 값 // 성공한 내용이 담긴 텍스트를 콘솔에 찍는다.
        }   else {
            console.error(xhr.responseTest); 
        }
    }
};
xhr.open('GET', 'https://www.zerocho.com/api/get'); // 매서드와 주소 설정(넣기) //
xhr.send(); // 요청전송

// onload 와 onerror로 성공과 실패를 구별하는 방법

var xhr = new XMLHttpRequest(); // XMLHttpRequest 생성자로 xhr 객체 생성
xhr.onload = function() {  // 제대로 로드가 된다면,
    if (xhr.status === 200 || xhr.status === 201) { // 200이나 201로 응답코드를 받는다면 (이코드는 성공의 의미)
        console.log(xhr.responseText); // 성공한 내용이 담긴 텍스트를 콘솔에 찍는다.
    }
};
xhr.onerror = function() { // 제대로 로드가 되지 않는다면,
    console.error(xhr.responseText) // 실패한 내용이 담긴 텍스트를 콘솔에 찍는다.
};
xhr.open('GET', 'https://www.zerocho.com/api/get'); // 겟/포스트방식으로 ,이러한 주소에
xhr.setRequestHeader('Content-Type', 'application/json'); // setRequestHeader 필드(매서드)는 콘텐츠 타입을 Json으로, 서버로 보내는 컨텐츠가 JSON 형식임을 알릴 수 있다.
xhr.send(JSON.stringify(data)); // xhr 객체안의 send필드(함수를 가지는)를 실행하여 요청 전송 // 데이터를 동봉해 전송