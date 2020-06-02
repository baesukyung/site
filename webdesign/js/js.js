


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

// // 사진 슬라이드
setInterval(function(){
    $(".slide-img").delay("2500");
    $(".slide-img").animate({marginTop:"-300px"},500);
    $(".slide-img").delay("2500");
    $(".slide-img").animate({marginTop:"-600px"},500);
    $(".slide-img").delay("2500");
    $(".slide-img").animate({marginTop:"0"},500);


});







$(function(){
    $("#notice1").click(function(){
        $("#notice1").css("background","lightcoral");
        $("#gallery1").css("background","none");
        $(".notice").css("display","block");
        $(".gallery").css("display","none");
    });
    $("#gallery1").click(function(){
        $("#gallery1").css("background","lightcoral");
        $("#notice1").css("background","none");
        $(".gallery").css("display","block");
        $(".notice").css("display","none");
    });
});
