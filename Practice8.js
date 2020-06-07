// AJAX 를 이용해 실제서버에 폼 데이터를 보내보기
var xhr = new XMLHttpRequest(); // XMLHttpRequest 생성자로 xhr 객체 생성
var formData = new FormData(); // FormData 생성자를 이용하여 formData 객체로 선언

formData.append('name', 'zerocho'); // 객체안에 자식추가(데이터값 저장) name 이라는 키(필드)에 'zerocho'로 값을줌
formData.append('birth', 1994); // 객체안에 자식추가(데이터값 저장) birth 이라는 키(필드)에 1994로 값을줌

xhr.onreadystatechange = function () { // 요청에 대한 콜백함수 // 이벤트 리스너로 요청한 후 서버로부터 응답이 올때, 응답을 받을수있는 필드(매소드)
    if (xhr.readyState === xhr.DONE) { // 요청이 완료되면
        if( xhr.status === 200 || xhr.status === 201 ) { // 응답 코드가 200이나 201이면
            console.log(xhr.responseText); // 서버에서 보내주는 값 // 성공한 내용이 담긴 텍스트를 콘솔에 찍는다.
        }   else {
            console.error(xhr.responseText); 
        }
    }
};
xhr.open('POST', 'https://www.zerocho.com/api/post/formdata'); // 매서드와 주소 설정(넣기) // 실제로 동작하는 서버
xhr.send(formData); // 요청전송