let id = document.querySelector('#id');
let error = document.querySelectorAll('.error_next_box');
let pw1 = document.querySelector('#psw1');
let pwImg1 = document.querySelector('#pswd1_img1');
let pwMsg = document.querySelector('#alertTxt');
let pw2 = document.querySelector('#pswd2');
let pwImg2 = document.querySelector('#pswd2_img1');
let username = document.querySelector('#name');

console.log(error)


/* id.addEventListener('focusout',function(){
     명칭: 이벤트 핸들러
})  ✔아래처럼 간단히 작성가능 - 태그 재활용 하기위해 */

id.addEventListener('focusout', checkId)
pw1.addEventListener('focusout',checkPw)
pw2.addEventListener('focusout',comparePw)
username.addEventListener('focusout',checkName)


function checkId() {
    var idPattern = /^[a-zA-Z0-9_-]{5,20}$/;
    console.log(idPattern.test(id.value)) //.test는 true,false확인
    if (id.value === ""){
        error[0].innerHTML = "필수정보 입니다."
        error[0].style.display = "block";
        error[0].style.color="#f00"
    } else if (!idPattern.test(id.value)) {
        error[0].innerHTML = "5~20자의 영문 소문자, 대문자, 숫자와 특수기호( _, - ) 중에서 사용가능합니다."
        error[0].style.display = "block";
        error[0].style.color = "#f00";
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
        pwMsg.style.display="none";
    } else if(!pwPattern.test(pw1.value)) {
        error[1].innerHTML="8~16자 영문,대소문자, 숫자, 특수문자를 사용하세요.";
        error[1].style.display = "block";
        pwMsg.style.display="block";
        pwImg1.src="img/m_icon_not_use.png";
        pwMsg.innerHTML="사용불가";
        pwMsg.style.color="#f00"
    }else{
        error[1].style.display="none" 
        pwMsg.innerHTML="안전";
        pwMsg.style.display="block";
        pwMsg.style.color="#03c75a" // 그린색상
        pwImg1.src="img/m_icon_safe.png"
    }
}

function comparePw() {
    if(pw2.value === pw1.value && pw2.value !=""){
        pwImg2.src="img/m_icon_check_enable.png";
        error[2].style.display="block";
        error[2].innerHTML="비밀번호가 일치합니다.";
        error[2].style.color="#03c75a";
    }else if(pw2.value !== pw1.value){
        pwImg2.src="img/m_icon_check_disable.png";
        error[2].style.display="block";
        error[2].innerHTML="비밀번호가 일치하지 않습니다.";
        error[2].style.color="#f00";
        pwImg2.src="img/m_icon_check_disable.png";
    }
    if(pw2.value == ""){
        error[2].innerHTML="필수 정보입니다.";
        error[2].style.display="block";
        pwImg2.src="img/m_icon_check_disable.png";
        pwMsg.style.color="#f00";
    }

}

function checkName(){
    let namePattern=/^[a-zA-Z가-힣]*$/;

    if(username.value == ""){
        error[3].innerHTML="필수항목 입니다.";
        error[3].style.display="block";
    }else if(!namePattern.test(username.value) || username.value.indexOf(" ")>-1){ //정규식대로 작성을 안했거나, 빈칸이 있거나(-1보다 크니까) 
        //indexOf : 순서를 찾는태그 -> Q.indexOf를 쓰는이유는? 빈칸이 몇 개나 되어도 양수니까
        error[3]
    }
}