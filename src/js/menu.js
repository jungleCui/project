function menu(){
	var $i = $('#head .menu i');
	var $menu = $('#head .menu');
	$(document).scroll(function(){
			if($(document).scrollTop()>0){
				$menu.stop().animate({top:43},20)
			}
			else if($(document).scrollTop()<=0){
				$menu.stop().animate({top:120},20)
			}
	});
	var now = true;
	$i.on('click',function(){
		if(now){
			$menu.stop().animate({right:1},500);	
			now = false;		
		}else{
			$menu.stop().animate({right:-110},500);
			now = true;
		}

	})
	// var $loginbtn = $('#head .menu .loginbtn');
	// var $loginbox = $('#loginbox');
	// $loginbtn.on('mouseup',function(){
	// 	$loginbox.show();
	// });
	// console.log($loginbtn);
}