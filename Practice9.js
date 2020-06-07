const parseCookies = (cookie = '') =>
    cookie
        .split(';')
        .map(v => {
            console.log('v : ' + v);
            console.log('v.split(\'=\') : ' + v.split('='));
            return v.split('=');
        })
        .map(([k, ...vs]) => {
            console.log('k : ' + k);
            console.log('vs : ' + vs);
            console.log('vs.join(\'=\') : ' + vs.join('='));
            console.log('[k, vs.join(\'=\')] : ' + [k, vs.join('=')]); // ['aa', '1=4']

            return [k, vs.join('=')];
        })
        .reduce((acc, [k, v]) => {
            console.log('acc : ' + JSON.stringify(acc));
            console.log('[k, v] : ' + [k, v]);
            console.log('k.trim() : ' + k.trim());

            acc[k.trim()] = decodeURIComponent(v);
            console.log('acc[k.trim()] : ' + acc[k.trim()])
            return acc;
        }, {});

var result = parseCookies('aa=1=4;bb=2;cc=3')
console.log(result);
// var split = ['aa=1=4', 'bb=2', 'cc=3'];
// var map1 = [ ['aa', '1', '4'], ['bb', '2'], ['cc', '3'] ];
// // k = 'aa'              vs = ['1', '4'].join('=') = '1=4'
// var map2 = [ ['aa', '1=4'], ['bb', '2'], ['cc', '3'] ];
// // 1, acc = {}     [k,v] = ['aa', '1=4']
// var number = [1,2,3];

// var sum;
// }, sum);

// var object = {};
// object[name] = 'molly';

// {
//     aa : "1=4",
//     bb : "2",
//     cc : "3"
// }