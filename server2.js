const http = require('http');
const fs = require('fs');

http.createServer (function(req, res){
    fs.readFile('./server2.html', function(err, data) { // fs.리드매소드로 ./server2.html 을 읽었을때 함수(이벤트)문 발생, err, data가 매개변수 err가 존재한다면 (true) data변수엔 버퍼가 저장됨.
        if (err) {
            throw err;
        }
        res.end(data); // 데이타(버퍼 or 문자열)를 보낸다.(응답시킨다 서버로) 정상적인 서버가동이 됬다면,
    });
    }).listen(8081, function() { // listen 리슨 이벤트 실행 8081이 가동되었을때, 함수문 발생ㅜ
        
        console.log('8081번 포트에서 서버 대기 중입니다!')
});

// fs 모듈은 파일 시스템에 접근하는 모듈 즉 파일을 생성하거나 삭제하고, 읽거나 쓸수있다. 폴더도 만들었다 지웠다 할수있다.