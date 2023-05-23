let hCont = $('.history_slide')
let hBtn = $('.history_btn li')
let hIndex;


hCont.slick({

}); 


/* ✔ 버튼을 클릭하면 해당 index를 찾아서 가기 */
hBtn.click(function(){
    let target = $(this); //클릭한 그것 선택
    let index = target.index(); // 클릭한 그것의 index 번호
    //console.log(index)

    if(index == 0){
        hIndex = 1
    }else if(index == 1){
        hIndex = 4
    }else if(index == 2){
        hIndex = 8
    }else if(index == 3){
        hIndex = 12
    }else if(index == 4){
        hIndex = 16
    }
    console.log(hIndex)
    hCont.slick('slickGoTo',hIndex); //slick-get~ gitHUB- 메소드 복붙 / 
    //✔ hIndex로 slickGoTo 된다는 의미


    hBtn.removeClass('active')
    target.addClass('active')
})


/* 깃헙 event - slide change 복붙 */
hCont.on('beforeChange', function(event, slick, currentSlide, nextSlide){
    console.log(nextSlide);
    if(nextSlide>=0 && nextSlide<=3){
        hBtn.removeClass('active')
        hBtn.eq(0).addClass('active')
    }else if(nextSlide>=4 && nextSlide<=7){
        hBtn.removeClass('active')
        hBtn.eq(1).addClass('active')
    }else if(nextSlide>=8 && nextSlide <= 11){
        hBtn.removeClass('active')
        hBtn.eq(2).addClass('active')
    }else if(nextSlide>=12 && nextSlide<=15){
        hBtn.removeClass('active')
        hBtn.eq(3).addClass('active')
    }else if(nextSlide>=16 && nextSlide<=19){
        hBtn.removeClass('active')
        hBtn.eq(4).addClass('active')
    }
    $('.history_page em').text(nextSlide + 1) //작성
  });