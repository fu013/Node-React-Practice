// 쿠키
const http = require('http');

const parseCookies = function(cookie = '')
    cookie
        .split(';')
        .map(function(v){v.split('=')})
        .map(([k, ...vs]) => [k, vs.join('=')])
        .reduce((acc, [k, v]) => {
           acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});

 http.createServer(function(req, res) {
    console.log(req.connection.remoteAddress);
     const cookies = parseCookies(req.headers.cookie);
    console.log(req.url, cookies);
    res.writeHead(200, { 'Set-Cookie': 'mycookie=test' });
    res.end('Hello Cookie');
 })
     .listen(8082, function() {
         console.log('8082번 포트에서 대기 중입니다!');
     });