// 슬라이드
setInterval(function(){
    $(".slide-img1").stop().slideDown('2500')
});

// 메뉴슬라이드
$(function(){
    $(".main-menu").mouseover(function(){
        $(".sub-menu").stop().slideDown();
        $(".sub-menu").css("display","flex");
    });
    $(".main-menu").mouseleave(function(){
        $(this).children(".sub-menu").stop().slideUp();
    });
});


