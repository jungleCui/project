require(['config'],function(){
	require(['jquery'],function(){
		var $zhucebtn = $('#zhuce .zhucebtn');
	
		$zhucebtn.on('click',function(){
				var $username = $('.username').val();
				var $psw = $('.psw').val();
				console.log($username,$psw);
				$.ajax({
				url:'../api/zhuce.php',
				dataType:'json',
				data:{
					username:$username,
					psw:$psw
				}, 
				success:function(data){
					if(data==1){
						alert('注册成功');
					}else if(data==0){
						alert('账户已被注册')
					}
				}
			})
		})



		//登录
		var $denglubtn = $('.denglubtn');
		$denglubtn.on('click',function(){
			var $username = $('.username').val();
				var $psw = $('.psw').val();
				console.log($username,$psw);
				$.ajax({
				url:'../api/denglu.php',
				dataType:'json',
				data:{
					username:$username,
					psw:$psw
				}, 
				success:function(data){
					if(data==1){
						$(location).attr('href', '../../index.html?login='+$username);
						//写入cookies
						document.cookie = "account="+$username+";path=/"
					}else if(data==0){
						alert('账户或密码错误');
					}
				}
			})
		})
	})
})