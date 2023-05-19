let _wrapper; //sticky영역의 부모공간(main-content)
let _sticky; //sticky 공간
let children; //.section
let _length; //.section의 갯수
let headerVh=6;
let contentVh; //영역계산결과
let start=0;
let end=0;


function floderScroll(wrapper,sticky){
    _wrapper = wrapper; //부모영역
    _sticky = sticky; //sticky영역
    children = document.querySelectorAll('.section'); //배열
    _length = children.length; //console 4찍힘
    //console.log(_length)
}
let mainContent=document.querySelector('.main-content')
let $sticky=document.querySelector('.sticky')
floderScroll(mainContent,$sticky) //매개변수,인자값(같은이름못써서 $넣음)