const { odd, even } = require('./var'); // var.js에서 참조한 변수값
const checkNumber = require('./func'); // func.js 참조한 함수

function checkStringOddOrEven(str) {
    if (str.length % 2) { // 홀수면 // %=나머지 , 짝수면 나머지가 0 이므로 false 즉 even, 홀수면 나머지가 1이므로 true odd
        return odd;
    }
    return even;
}

console.log(checkNumber(10)); // 짝수입니다. // 
console.log(checkStringOddOrEven('hello')); // 홀수입니다. 