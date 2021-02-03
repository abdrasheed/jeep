
// calc height of slider
$(function () {
    'use static';
    // adjust slider height
    var window_hight = $(window).height(),
        upper_hight = $('.upper-bar').innerHeight(),
        nav_hight = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(window_hight - (upper_hight+nav_hight));
});

// featured work shuffle
$('.featured_work ul li').on('click', function () {
    $(this).addClass('active_shuffle').siblings().removeClass('active_shuffle');
    if ($(this).data('class') == 'all'){
        $('.shufle_images .col-md').css("opacity",1);
    } else {
        $('.shufle_images .col-md').css("opacity",'.08');
        $($(this).data('class')).parent().css('opacity',1);
    }

});