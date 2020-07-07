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
// AOS.init();






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



      $(".bg07").click(function(){
        $("#myModal07").modal();
      });
      $(".dot01").click(function(){
        $("#myModal07").modal();
      });

      $(".dot02").click(function(){
        $("#myModal08").modal();
      });
      $(".bg08").click(function(){
        $("#myModal08").modal();
      });

      $(".bg09").click(function(){
        $("#myModal09").modal();
      });
      $(".dot03").click(function(){
        $("#myModal09").modal();
      });

      $(".bg10").click(function(){
        $("#myModal10").modal();
      });
      $(".dot04").click(function(){
        $("#myModal10").modal();
      });

      $(".bg11").click(function(){
        $("#myModal11").modal();
      });
      $(".dot05").click(function(){
        $("#myModal11").modal();
      });

      $(".bg12").click(function(){
        $("#myModal12").modal();
      });
      $(".dot06").click(function(){
        $("#myModal12").modal();
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
$(document).ready(function() {
  $('#fullpage').fullpage({
      verticalCentered: true,
      anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4',
       'anchor5', 'anchor6', 'anchor7', 'anchor8'],
      menu: '#menu',
  
  });




});

