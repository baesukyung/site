//메뉴
$(function(){
    $(".main1").mouseover(function(){
        $('.sub1').css("display","block");
    });
    $(".menu-wrap").mouseleave(function(){
        $(".sub1").css("display","none");
    });


    $(".main2").mouseover(function(){
        $('.sub2').css("display","block");
    });
    $(".menu-wrap").mouseleave(function(){
        $(".sub2").css("display","none");
    });


    $(".main3").mouseover(function(){
        $('.sub3').css("display","block");
    });
    $(".menu-wrap").mouseleave(function(){
        $(".sub3").css("display","none");
    });


    $(".main4").mouseover(function(){
        $('.sub4').css("display","block");
    });
    $(".menu-wrap").mouseleave(function(){
        $(".sub4").css("display","none");
    });
});

//슬라이드
//fadein




// $('.slider>ul>li:gt(0)').hide();

// setInterval(function(){
//     $('.slider>ul>li:first')
//         .fadeOut(1000)
//         .next()
//         .fadeIn(1000)
//         .end()
//         .appendTo('.slider>ul');
// },3000);



// $('.slider>ul>li:gt(0)').hide();

// setInterval(function(){
//     $('.slider>ul>li:first')
//     .fadeOut(1000)
//     .next()
//     .fadeIn(1000)
//     .end()
//     .appendTo('.slider>ul');
// },3000);






//tab
$(function(){
    $(".notice").on('click',function(){
      $(".notice-bottom").show();
      $(".gallery-bottom").css("display","none"); 
    });

    $(".gallery").on('click',function(){
        $(".gallery-bottom").show();
        $(".notice-bottom").css("display","none"); 
      });
});


$(function(){
    $(".click1").on('click',function(){
        $('.popup').show();

    });
    $(".팝업닫기").on('click',function(){
        $('.popup').css('display','none');

    });
});



$('.slider>ul>li:gt(0)').hide();

setInterval(function(){
    $('.slider>ul>li:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.slider>ul');
},3000);