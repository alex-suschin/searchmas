Number.isNaN = Number.isNaN || function(value) {
    return typeof value === 'number' && isNaN(value);
}

$(function() {

    jQuery(".menu a").click(function() {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 700);
        return false;
    });

    $('.btn-next').click(function() {
        $(this).closest('.form-step').slideUp();
        $(this).closest('.form-step').next().slideDown();
    });

    var worksThumbs = new Swiper('.team-slider', {
        spaceBetween: 30,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });

    $('.price-bnts a').click(function() {
        $('.price-bnts').find('.active').removeClass('active');
        $(this).addClass('active');
        $('.price-box').find('.price-box-elem').hide(100);
        $('#' + $(this).data('switch')).show(100);
    });
})