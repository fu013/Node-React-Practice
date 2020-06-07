const http = require('http');

const server = http.createServer(function(req, res) {
    res.write('<h1>Hellow Node!</h1>');
    res.end('<p>Hello Server</p>');
});
server.listen(8080);
server.on('listening', function() { 
    console.log('8080번 포트에서 서버 대기 중입니다!');
});
server.on('error', function(error) {
    console.error(error);
})

// fs 모듈은 파일 시스템에 접근하는 모듈 즉 파일을 생성하거나 삭제하고, 읽거나 쓸수있다. 폴더도 만들었다 지웠다 할수있다.