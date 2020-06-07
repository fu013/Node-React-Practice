// html form 태그의 데이터를 동적으로 제어할 수 있는 기능, 주로 AJAX 와 함께 사용된다.
var formdata = new Formdata(); // Formdata 생성자로 formdata 객체를 만든다.
//객체  //필드(매서드)  // 키  // 값
formData.append('name', 'zerocho'); // 객체안에 자식추가(데이터값 저장)
formData.append('item', 'orange');
formData.append('item', 'melon');
formData.has('item'); // true // 주어진 키에 해당하는 값이 있는지 여부를 알려줌
formData.has('money'); // false
formData.get('item'); // orange // 주어진 키에 해당하는 값 하나를 가져옴
formData.getAll('item'); // ['orange', 'melon '] // 주어진 키에 해당하는 값 모두를 가져옴
formData.append('test', ['hi', 'zero']);
formData.get('test'); // hi, zero
formData.delete('test'); // 키를 지움.
formData.set('item', 'apple'); // item키 안의 값을 apple로 수정
formData.getAll('item');  // ['apple']