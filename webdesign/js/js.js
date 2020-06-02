// // 슬라이드
// setInterval(function(){
//     $(".slide-body")
// });

// 메뉴슬라이드
$(function(){
    $(".main-menu").mouseover(function(){
        $(".sub-Menu").stop().slideDown();
        $(".sub-Menu").css("display","flex");
    });
    $(".menu").mouseleave(function(){
        $(this).children(".sub-Menu").stop().slideUp();
    });
});


