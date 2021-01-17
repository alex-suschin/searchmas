Number.isNaN = Number.isNaN || function(value) {
    return typeof value === 'number' && isNaN(value);
}

$(function() {

    $(window).scroll(function() {
        if ($(window).width() > '991') {
            if ($(this).scrollTop() > 90) {
                $('.header').addClass('fixed');
                $('body').css('padding-top', '90px');
            } else if ($(this).scrollTop() < 90) {
                $('.header').removeClass('fixed');
                $('body').css('padding-top', '0');
            }
        }
    });

    setTimeout(function() {
        $('.imgs-block-2').css('opacity', '1');
    }, 150);

    setTimeout(function() {
        $('.imgs-block-5').css('opacity', '1');
    }, 300);

    setTimeout(function() {
        $('.imgs-block-1').css('opacity', '1');
    }, 450);

    setTimeout(function() {
        $('.imgs-block-3').css('opacity', '1');
    }, 600);

    setTimeout(function() {
        $('.imgs-block-6').css('opacity', '1');
    }, 750);

    setTimeout(function() {
        $('.imgs-block-4').css('opacity', '1');
    }, 900);

    jQuery(".menu a, .anchor").click(function() {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 700);
        return false;
    });

    $('.btn-next').click(function() {
        $(this).closest('.form-step').slideUp();
        $(this).closest('.form-step').next().slideDown();
    });

    $('.btn-pre-load').click(function() {
        $('.img-pre-load').addClass('img-animate');
        setTimeout(function() {
            $('.pre-load').css({ 'opacity': '0', 'z-index': '-1' });
        }, 2000);
    });

    var swiper = new Swiper('.team-slider', {
        slidesPerView: 4,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
            el: '.team-pagination',
        },
        navigation: {
            nextEl: '.team-button-next',
            prevEl: '.team-button-prev',
        }
    });
})