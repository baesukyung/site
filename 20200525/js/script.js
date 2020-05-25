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
    $(".menu").mouseover(function(){
        $(".subNav").stop().slideDown();
        $(".subNav").css("display","flex");
    });
    $(".menu").mouseleave(function(){
        $(this).children(".subNav").stop().slideUp();
    });

});

