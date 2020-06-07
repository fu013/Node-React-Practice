function getUser() { // 로딩 시 사용자가 가져오는 함수
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (xhr.status === 200) {
            var users = JSON.parse(xhr.responseText);
            var list = document.getElementById('list');
            list.innerHTML = '';
            Object.keys(users).map(function (key) {
                
            })
        }
    }
}