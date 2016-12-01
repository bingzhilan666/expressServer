$(function () {


    $(window).scroll(function (event) {

        var myTop = $(window).scrollTop() + 50;

        //$('.myGuangGao').css('top',myTop);
        $('.fixed-left').stop().animate({

            'top': myTop

        }, 500);


    });


    $('.f_tab ul li:first').show();

    $(".f_tab ol li").hover(function () {

        var i = $(this).index();

        $('.f_tab ul li').eq(i).show().siblings

        ('li').hide();

    });


    var minHeight = 1400;
    var b = 0;

    $(window).scroll(function (event) {


        if ($(window).scrollTop()

            > minHeight && b == 0) {

            $('.tanchu1').show();
            b = 1;

        }

    });

    $('.fi-01').click(function (event) {
        $('.tanchu1').hide();

        function tan_windo() {
            $('.tanchu2').show();
            // $('.heipin').show();
        };

        var timer = setTimeout(tan_windo, 10000);

        $('.fi-02').click(function (event) {
            $('.tanchu2').hide();


        });
    });


    // 弹出框结束


});
