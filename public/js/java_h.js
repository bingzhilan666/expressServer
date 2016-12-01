$(function(){
		
		var  minHeight=1000;
		var  b=0;

		$(window).scroll(function(event) {
	

			if($(window).scrollTop()>minHeight&&b==0){
				
				$('.tanchu').show();
				b=1;
			}

		});

		$('.fi-01').click(function(event) {
			$('.tanchu').hide();
		});
		

		//tqq
		$('.t_small li').hide();
		$('.t_small li').eq(0).show();

		$('.t_ol li').hover(function() {
			clearTimeout(t_timer);
			var q = $(this).index();
			$('.t_small li').eq(q).show().siblings('li').hide();
		},function(){
			clearTimeout(t_timer);
			t_timer=setInterval(nextFn, 3000);
		});
		var p = 0;
		var t_timer;
		function nextFn(){
			p++;
			if (p>2) {
				p=0;
			};
			$('.t_small li').eq(p).show().siblings('li').hide();
		};

		t_timer=setInterval(nextFn, 3000);
	
})