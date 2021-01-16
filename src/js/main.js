Number.isNaN = Number.isNaN || function(value) {
    return typeof value === 'number' && isNaN(value);
}

$(function() {

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