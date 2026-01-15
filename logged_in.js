$(document).ready(function () {

    // Open sidebar
    $('#menu-open').click(function () {
        $('.sidebar').css('display', 'block')
            .animate({
                left: '0',
                opacity: '1'
            }, 400);
    });

    // Close sidebar
    $('#menu-close').click(function () {
        $('.sidebar').animate({
            left: '-280px',
            opacity: '0'
        }, 400, function () {
            $(this).css('display', 'none');
        });
    });

});