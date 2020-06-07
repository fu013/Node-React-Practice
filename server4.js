const http = require('http');
const fs = require('fs'); // 파일에 접근하기 위해 쓰는 모듈, 파일을 읽고 쓰고, 삭제 생성 가능한 모듈
const url = require('url');
const qs = require('querystring'); //

const parseCookies = function (cookie = '') {
    cookie
        .split(';')
        .map(function (v) { v.split('=') })
        .map(([k, ...vs]) => [k, vs.join('=')])
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});
    }

    http.createServer(function (req, res) {
        // const cookies = parseCookie(req, headers.cookie);
        if (req.url.startsWith('/login')) {
            const { query } = url.parse(req.url);
            const { name } = qs.parse(query);
            const expires = new Date();
            expires.setMinutes(expires.getMinutes() + 5);
            res.writeHead(302, {
                Location: '/',
                'Set-Cookie': `name=${encodeURLcomponent(name)};
            Expires=${expires.toGMTString()}; httpOnly; path=/`,
            });
            res.end();
        } else if (cookies.name) {
            res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
            res.end(`${cookies.name}님 안녕하세요`);
        } else {
            fs.readFile('./server4.html', function (err, data) {
                if (err) {
                    throw err;
                }
                res.end(data);
            });
        }
    }).listen(8083, function () {
            console.log('8083번 포트에서 서버 대기 중입니다!');
        });
}

    // expires = 날짜, 만료기한 이기한이 지나면 쿠키가 제거됩니다. 기본값은 클라이언트가 종료될 때까지이다.
    // Max-age
