$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
});
$(document).ready(function(){
    $('#open').on('click', function(){
        $('#menu').css('transform', 'translate(10px)');
        $(this).css('display', 'none');
        $('#close').css('display', 'block');
    });

    $('#close').on('click', function(){
        $('#menu').css('transform', 'translate(2400px)');
        $(this).css('display', 'none');
        $('#open').css('display', 'block');
    });
});