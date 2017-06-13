//引入config
require(['config','nav','menu'],function(){
	require(['jquery','lazy'],function(){
		var $ul = $('#main .carousel ul');
		var index = 0;
		setInterval(function(){
			index++;
			if(index>3){
				index=0;
			}
			var targetPosition = -index*377;
			$ul.stop().animate({left:targetPosition},1000)
		},3000)

		nav();
		menu();

		//显示导航栏
		// var $nav = $('#head .nav');

		// $(document).scroll(function(){
		// 	if($(document).scrollTop()>0){
		// 		$nav.show().animate({height:40},1000);
		// 	}
		// 	else if($(document).scrollTop()<=0){
		// 		$nav.animate({height:0},1000).hide();
		// 	}
		// })
	})	
})