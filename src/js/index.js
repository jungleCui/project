//引入config
require(['config','nav','menu'],function(){
	require(['jquery','lazy','common'],function(){
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

		//在cookie获取用户名写入页面
		var $login = $('#head .user_menu li .yidenglu');
		var $account = getCookie('account');
		if($account){
			$login.html($account)
		}
	})	
})