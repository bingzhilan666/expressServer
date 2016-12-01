$(function(){

	//首页
	$("#sculpture").mouseenter(function(event){
		event.stopPropagation();
		$(".member_div").show();
	})
	$(".sculpture").mouseleave(function(event){
		event.stopPropagation();
	       $(".member_div").hide();

	})
	$(".member_div_cont").hover(function(){
		$(".member_div_cont").css("color","#d72132")
	}, function () {
		$(".member_div_cont").css("color","#000")
	})


	$(window).click(function() {
		$(".search_input").removeClass("animated fadeInRight");
			$(".search_input").addClass("animated fadeOut");

			$("#search_img").attr("si","1");
	});

	$('.index_menber').click(function(event){
	    event.stopPropagation();
	});
	//头像
	$("#sculpture").hover(function(){
		$(".img").addClass("sculpture_cur");
	},function(){
		$(".img").removeClass("sculpture_cur");
	})
	//个人设置
	$(".set_img").click(function(){
		// alert(1);
		$(".set_img").addClass("set_img_cur");
	})
	//更多
	$(".more_div").hover(function(){
		$(this).find(".more_jt").addClass("more_cur");
	},function(){
		$(this).find(".more_jt").removeClass("more_cur");
	})
})