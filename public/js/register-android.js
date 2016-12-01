$(function() {
	$('.t_tab ul li:first').show();

    $(".t_tab ol li").hover(function () {

        var i = $(this).index();
        $('.t_tab ul li').eq(i).show().siblings('').hide();

    });
});