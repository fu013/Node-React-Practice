setImmediate(() => {
    console.log('immediate');
});

process.nextTick(() => {
    console.log('timeout');
});

setTimeout(() => {
    console.log('timeout');
},0);

Promise.resolve().then(() => console.log('promise'));
// 스태틱 필드 resolve
