// 콜백함수 예시
plus = function(a, b, callback){
    var result = a+b
    callback(result);
  }
   
  plus(5,10, function(res){
    console.log(res);
  })

  pm = function(a, b, callback){
    callback(a+b, a-b);
  }
   
  pm(5,10, function(res1, res2){
    console.log(res1);
    console.log(res2);
  })