 // Old(es5) and New(es6 이상)
 // 좀더 심플해진 문법
 var sayNode = function () { 
    console.log('Node');
};
var es = 'ES';
var oldObject = {
    sayJS: function() {
        console.log('JS');
    },
    sayNode: sayNode,
};
oldObject[es+ 6] = 'Fantastic';

oldObject.sayNode();
oldObject.sayJS();
console.log(oldObject.ES6);


const newObject = {
    sayJS() {
        console.log('JS');
    },
    sayNode,
    [es + 6]: 'fantastic',
    };
    newObject.sayNode();
    newObject.sayJS();
    console.log(newObject.ES6);