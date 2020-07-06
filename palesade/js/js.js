// $(function(){
//     $('.r2t').click(function(){
//         $('#r2t').stop().fadeIn();
//         $('#wc9').stop().fadeOut();
//     });
// });

$(function(){
    $('.wc9').click(function(){
        $('#wc9').css('display','block').fadeIn();
        $('#mc').css('display','none').fadeOut();
        $('#tb').css('display','none').fadeOut();
        $('#cb').css('display','none').fadeOut();
        $('#rf').css('display','none').fadeOut();
        $('#r2t').css('display','none').fadeOut();
        
        $('#wc91').css('display','block').fadeIn();
        $('#r2t1').css('display','none').fadeOut();
        $('#mc1').css('display','none').fadeOut();
        $('#tb1').css('display','none').fadeOut();
        $('#cb1').css('display','none').fadeOut();
        $('#rf1').css('display','none').fadeOut();

    });
    $('.mc').click(function(){
        $('#mc').css('display','block').fadeIn();
        $('#wc9').css('display','none').fadeOut();
        $('#tb').css('display','none').fadeOut();
        $('#cb').css('display','none').fadeOut();
        $('#rf').css('display','none').fadeOut();
        $('#r2t').css('display','none').fadeOut();

        $('#mc1').css('display','block').fadeIn();
        $('#wc91').css('display','none').fadeOut();
        $('#r2t1').css('display','none').fadeOut();
        $('#tb1').css('display','none').fadeOut();
        $('#cb1').css('display','none').fadeOut();
        $('#rf1').css('display','none').fadeOut();
    });
    $('.tb').click(function(){
        $('#tb').css('display','block').fadeIn();
        $('#wc9').css('display','none').fadeOut();
        $('#mc').css('display','none').fadeOut();
        $('#cb').css('display','none').fadeOut();
        $('#rf').css('display','none').fadeOut();
        $('#r2t').css('display','none').fadeOut();

        $('#tb1').css('display','block').fadeIn();
        $('#wc91').css('display','none').fadeOut();
        $('#mc1').css('display','none').fadeOut();
        $('#r2t1').css('display','none').fadeOut();
        $('#cb1').css('display','none').fadeOut();
        $('#rf1').css('display','none').fadeOut(); 
    });
    $('.cb').click(function(){
        $('#cb').css('display','block').fadeIn();
        $('#wc9').css('display','none').fadeOut();
        $('#mc').css('display','none').fadeOut();
        $('#tb').css('display','none').fadeOut();
        $('#rf').css('display','none').fadeOut();
        $('#r2t').css('display','none').fadeOut();

        $('#cb1').css('display','block').fadeIn();
        $('#wc91').css('display','none').fadeOut();
        $('#mc1').css('display','none').fadeOut();
        $('#r2t1').css('display','none').fadeOut();
        $('#tb1').css('display','none').fadeOut();
        $('#rf1').css('display','none').fadeOut(); 
    });
    $('.rf').click(function(){
        $('#rf').css('display','block').fadeIn();
        $('#wc9').css('display','none').fadeOut();
        $('#mc').css('display','none').fadeOut();
        $('#tb').css('display','none').fadeOut();
        $('#cb').css('display','none').fadeOut();
        $('#r2t').css('display','none').fadeOut();

        $('#rf1').css('display','block').fadeIn();
        $('#wc91').css('display','none').fadeOut();
        $('#mc1').css('display','none').fadeOut();
        $('#r2t1').css('display','none').fadeOut();
        $('#tb1').css('display','none').fadeOut();
        $('#cb1').css('display','none').fadeOut(); 
    });
    $('.r2t').click(function(){
        $('#r2t').css('display','block').fadeIn();
        $('#wc9').css('display','none').fadeOut();
        $('#mc').css('display','none').fadeOut();
        $('#tb').css('display','none').fadeOut();
        $('#cb').css('display','none').fadeOut();
        $('#rf').css('display','none').fadeOut();

        $('#r2t1').css('display','block').fadeIn();
        $('#wc91').css('display','none').fadeOut();
        $('#mc1').css('display','none').fadeOut();
        $('#rf1').css('display','none').fadeOut();
        $('#tb1').css('display','none').fadeOut();
        $('#cb1').css('display','none').fadeOut(); 
    });
$('.modal-img1').hover(function(){
    $('.whitecar-txt').show();
});
$('.modal-img1').mouseleave(function(){
    $('.whitecar-txt').hide();
});
AOS.init();


 var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
     
    },

    });

    $(document).ready(function(){
        $("#myBtn").click(function(){
          $("#myModal").modal();
        });
      });


  $(document).ready(function(){
    $(".bg01").click(function(){
      $("#myModal01").modal();
    });
    $(".bg02").click(function(){
        $("#myModal02").modal();
      });
      $(".bg03").click(function(){
        $("#myModal03").modal();
      });
      $(".bg04").click(function(){
        $("#myModal04").modal();
      });
      $(".bg05").click(function(){
        $("#myModal05").modal();
      });
      $(".bg06").click(function(){
        $("#myModal06").modal();
      });
  });

$('.conven01').click(function(){
$('#ex01').css('display','block');
$('#ex02').css('display','none');
$('#ex03').css('display','none');
$('#ex04').css('display','none');
});
$('.conven02').click(function(){
    $('#ex02').css('display','block');
    $('#ex01').css('display','none');
    $('#ex03').css('display','none');
    $('#ex04').css('display','none');
    });
    $('.conven03').click(function(){
     $('#ex03').css('display','block');
    $('#ex02').css('display','none');
    $('#ex01').css('display','none');
    $('#ex04').css('display','none');
    });
    $('.conven04').click(function(){
    $('#ex04').css('display','block');
    $('#ex02').css('display','none');
    $('#ex03').css('display','none');
    $('#ex01').css('display','none');
    });       
});


