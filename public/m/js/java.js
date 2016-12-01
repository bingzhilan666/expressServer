

$(function(){


		$('.loss').click(function(event) {
			$('.tanchu').hide();
			$('.heipin').hide();

			
		});

		setInterval(tan_windo,30000);
			function tan_windo(){
			$('.tanchu').show();
			// $('.heipin').show();
			};

		$(window).scroll(function(event) {
			
			var myTop=$(window).scrollTop()+50;

			//$('.myGuangGao').css('top',myTop);
			$('.xuanfu').stop().animate({

					'top':myTop

			}, 500);


		});

	
})
