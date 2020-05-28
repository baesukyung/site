// $(function(){
//     $(".mainNav").mouseover(function(){
//         $('.subNav').css("display", "flex");
//         $(".subNav").stop().slideDown(500);
//     });
//     $(".mainNav").mouseout(function(){
//         $(".subNav").stop().slideUp(500);
//     });
// });


// $(function(){
//     $(".mainNav").mouseover(function(){
//         $(".subNav").slideDown().stop;
//         $(".subNav").css("display","flex");
//     });
//     $(".mainNav").mouseleave(function(){
//         $(".subNav").slideUp().stop;
//     });
// });

$(function(){
    //메뉴up down
    $(".menu").mouseover(function(){
        $(".subNav").stop().slideDown();
        $(".subNav").css("display","flex");
    });
    $(".menu").mouseleave(function(){
        $(this).children(".subNav").stop().slideUp();
    });

});


setInterval(function(){
    //setInterval();함수 반복실행
    $(".slide_box").delay("2500");
    $(".slide_box").animate({marginTop:"-300px"},"500");
    $(".slide_box").delay("2500");
    $(".slide_box").animate({marginTop:"-600px"},"500");
    $(".slide_box").delay("2500");
    $(".slide_box").animate({marginTop:"0"},"500");
});
//슬라이드



$(function(){
    $("#tab1").click(function(){
        $("#tab1").css("background","lightcoral");
        $("#tab2").css("background","none");
        $(".tab-1").css("display","block");
        $(".tab-2").css("display","none");
    });
    $("#tab2").click(function(){
        $("#tab2").css("background","lightcoral");
        $("#tab1").css("background","none");
        $(".tab-2").css("display","block");
        $(".tab-1").css("display","none");
    });
});

$(function(){
    $("#popup_button").on('click',function(){
        $('.popup').fadeIn();
    });
    $(".팝업닫기").on('click',function(){
        $('.popup').fadeOut();
    });
});