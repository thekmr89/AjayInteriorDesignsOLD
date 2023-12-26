$(function(){

    //Form validation

    $('.form-control').each(function () {
        var label = $(this).siblings('label');
        var isEmpty = $(this).val() === '';
        label.toggleClass('valid', !isEmpty);
    });
    $('.form-control').on('change', function () {
        var label = $(this).siblings('label');
        var isEmpty = $(this).val() === '';
        label.toggleClass('valid', !isEmpty);
    });
    $('.form-group input,textarea').focus(function () {
        $(this).siblings('label').addClass('valid');
    });
    $('.form-group input,textarea').focusout(function () {
        var label = $(this).siblings('label');
        var isEmpty = $(this).val() === '';
        label.toggleClass('valid', !isEmpty);
    });
    if ($('.form-group input').val() == '') {
        $(this).siblings('label').removeClass('valid');
    }

    var words = ['3D Design', 'Interior Design', 'Home Decor'],
        part, i = 0,
        offset = 0,
        len = words.length,
        forwards = true,
        skip_count = 0,
        skip_delay = 15,
        speed = 70;
    var wordflick = function () {
        setInterval(function () {
            if (forwards) {
                if (offset >= words[i].length) {
                    ++skip_count;
                    if (skip_count == skip_delay) {
                        forwards = false;
                        skip_count = 0;
                    }
                }
            } else {
                if (offset == 0) {
                    forwards = true;
                    i++;
                    offset = 0;
                    if (i >= len) {
                        i = 0;
                    }
                }
            }
            part = words[i].substr(0, offset);
            if (skip_count == 0) {
                if (forwards) {
                    offset++;
                } else {
                    offset--;
                }
            }
            $('.word-flick').text(part);
        }, speed);
    };
    wordflick();

    //slider

var SlideA = $('.home-service-slider');

SlideA.owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeOut: 1500,
    animateOut: 'fadeOut',
    smartSpeed: 450,
    dotsContainer: '.slideAdots',
    onInitialized: SlideAcontent,
    onChanged: SlideAcontent,
});

function SlideAcontent(e) {
    var varheadingheight = $('.homesliderAheading h2.active:first').innerHeight();
    $('.homeajsecB .colB .card').css('--headingheight', varheadingheight + 'px');
    setTimeout(function() {
        var activeitem = $('.home-service-slider .owl-item.active').children('.item').attr('data-slide');
        console.log(activeitem)
        $('[data-content="'+ activeitem +'"]').addClass('active').siblings().removeClass('active');
    });
}

$('[data-model]').click(function(){
    var model = $(this).attr('data-model');
    $(model).addClass('is-open');
    $('body,html').addClass('overflow-hidden');
    $('.overlay-layer').addClass('is-open');
})

$('.close-model,.overlay').click(function(){
    $('.model-pop').removeClass('is-open');
    $('.overlay-layer').removeClass('is-open')
    $('body,html').removeClass('overflow-hidden');
    $('#form1 .form-control').val('').siblings('label').removeClass('valid');
})
})