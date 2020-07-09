var swiper = new Swiper('.swiper-container');
AOS.init();


	/**스크롤이 설정한 높이 이상 내려갔을때 스타일추가하기**/
	if (jQuery(window).width() > 0) {
    jQuery(window).on("scroll",function(ev){
        if(jQuery(window).scrollTop() > 150 ) { /**높이 픽셀 조정**/
            jQuery('.menu_box').addClass('fixed');  /**위의 높이에서 .fixed 클래스를 추가합니다. 스타일에서 자유롭게 수치 조절 가능합니다.**/
        }
        else{
			jQuery('.menu_box').removeClass('fixed');
        }
        return false;
    });
	}
	
	/**마우스 부드럽게 해당위치로 이동**/
	$(function(){
	   $('a[href^=#]').click(function() {
		  var speed = 800;
		  var href= $(this).attr("href");
		  var target = $(href == "#" || href == "" ? 'html' : href);
		  var position = target.offset().top;
		  $('body,html').animate({scrollTop:position}, speed, 'swing');
		  return false;
	   });
	});


	// 고스트버튼

	jQuery(document).ready(function(){
    jQuery(".ghost_btn").click(function(){
	jQuery(".nav").slideToggle();
    });
});





	// 메인-슬라이드 자동
$(document).ready(function(){
$('.bxslider').bxSlider({
  auto: true,
  autoControls: true,
  stopAutoOnClick: true,
  pager: true,
  slideWidth:0,
  speed:250,
});
	});


//3번째 section 사진 hover
	$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );






//4. 갤러리 사진 슬라이드
$(function(){
		$('.gallery-btn1').click(function(){
			$('.gallery-img1').slideToggle();
		});
	});
	$(function(){
		$('.gallery-btn1').click(function(){
			$('.gallery-img2').slideToggle();
		});
	});

	$(function(){
		$('.gallery-btn2').click(function(){
			$('.gallery-img3').slideToggle();
		});
	});
	$(function(){
		$('.gallery-btn2').click(function(){
			$('.gallery-img4').slideToggle();
		});
	});