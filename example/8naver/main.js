let id = document.querySelector('#id');
let error = document.querySelectorAll('.error_next_box');
let pw1 = document.querySelector('#psw1');
let pwImg1 = document.querySelector('#pswd1_img1');
let pwMsg = document.querySelector('#alertTxt');

console.log(error)


/* id.addEventListener('focusout',function(){
     명칭: 이벤트 핸들러
})  ✔아래처럼 간단히 작성가능 - 태그 재활용 하기위해 */

id.addEventListener('focusout', checkId)
pw1.addEventListener('focusout',checkPw)


function checkId() {
    var idPattern = /^[a-zA-Z0-9_-]{5,20}$/;
    console.log(idPattern.test(id.value))
    if (id.value === ""){
        error[0].innerHTML = "필수정보 입니다."
        error[0].style.display = "block";
    } else if (!idPattern.test(id.value)) {
        error[0].innerHTML = "5~20자의 영문 소문자, 대문자, 숫자와 특수기호( _, - ) 중에서 사용가능합니다."
        error[0].style.display = "block";
    } else {
        error[0].innerHTML = "멋진 아이디네요."
        error[0].style.color = "#80a600"
        error[0].style.display = "block";
    }
}

function checkPw() {
    let pwPattern = /^[a-zA-Z0-9~!@#$%^&*()_+|<>?:{}]{8,16}$/;

    if(pw1.value === ""){
        error[1].innerHTML="필수정보 입니다."
        error[1].style.display = "block";
        pwImg1.src="img/m_icon_not_use.png"
    } else if(pwPattern) {

    }
}