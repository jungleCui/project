

function nav(){
	var $nav = $('#head .nav');

	$(document).scroll(function(){
			if($(document).scrollTop()>0){
				$nav.stop().show().animate({height:40},300);
			}
			else if($(document).scrollTop()<=0){
				$nav.stop().animate({height:0},300).hide();
			}
	})
}