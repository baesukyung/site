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

});

