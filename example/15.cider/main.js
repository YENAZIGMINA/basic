let hCont = $('.history_slide')
let hBtn = $('.history_btn li')
let hIndex;


hCont.slick({

}); 


/* ✔ 버튼을 클릭하면 해당 index를 찾아서 가기 */
hBtn.click(function(e){
    e.preventDefault();

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
    $('.history_page em').text(nextSlide + 1) //직접 작성


});



//history_poster
let posterBtn = $('.poster_btn ul li');
let posterCont = $('.poster_cont .poster');

//posterCont 모두 안보이게, 하지만 첫번째는 보이기
posterCont.hide().eq(0).show();


posterBtn.click(function(e){
    e.preventDefault();

    let target = $(this);
    let index = target.index();
    //console.log(index)
    posterCont.hide().eq(index).fadeIn();
    posterCont.find('figure').removeClass('move');
    posterCont.eq(index).find('figure').addClass('move');


    posterBtn.removeClass('active');
    target.addClass('active');

})



$('.cider_bottle').slick({
    
  });
