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
    contentVh = 96 - (headerVh * _length);

    //offsetTop--> 자신의 머리가 천장에 닿는 시점의 스크롤 top값을 추출
    //             (문서에서 자신보다 위쪽 영역의 높이값을 알려줌)
    //offsetHeight--> 자신의 높이값
    //innerHeight--> 화면 하나의 높이(100vh)
    start = _wrapper.offsetTop; //스티키 시작지점 값 설정
    //console.log('start: '+start)
    end = _wrapper.offsetTop + _wrapper.offsetHeight - innerHeight; //스티키 공간 값


    //forEach : children의 각각의 할 일
    //children.forEach(funtion(각각의 아이템,각각의 index){})
    children.forEach((child,i)=>{
        child.style.bottom= -(100 - headerVh * (_length - i)) + 'vh';
    })
}


function animate(){
    //console.log('scrollY: '+scrollY)
    children.forEach((child,i)=>{
        let unit = (end - start)/_length;
        let s = start + unit * i;
        let e = start + unit * (i + 1);

        if(scrollY <= s){
            child.style.transform=`translate(0,0)`;
        }else if(scrollY > e){
            child.style.transform=`translate(0,${-contentVh}%)`;
        }
    })
}




let mainContent=document.querySelector('.main-content')
let $sticky=document.querySelector('.sticky')

floderScroll(mainContent,$sticky) //매개변수,인자값(같은이름못써서 $넣음)

window.addEventListener('scroll',function(){
    console.log('scrollY: '+scrollY)
    animate();
})