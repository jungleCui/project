
//引入config
require(['config','nav','menu'],function(){
	require(['jquery','lazy','common'],function($){
		nav();
		menu();
		//在cookie获取用户名写入页面
		var $login = $('#head .user_menu li .yidenglu');
		var $account = getCookie('account');
		if($account){
			$login.html($account)
		};

		var category = location.search.split('=')[1];
		var $list = $('#main .list');
	
	
				$.ajax({
				url:'../api/list.php',
				dataType:'json',
				data:{
					a:1,
				},
				success:function(res){
					console.log(res);
					var $html = res.map(function(item){
						return `<li id="${item.id}">
									<img class="lazy" data-original="http://localhost/project/src/img/${item.img}" src="../img/${item.img}" alt="" />
									<p class="title">${item.title}</p>
									<p>${item.category}</p>
									<p>${item.price}</p>
								</li>`
					}).join('');
					$list.html($html);

					//懒加载
					$("img.lazy").lazyload({
						effect: "fadeIn"
					});
				}
			})
	
		

		$list.on('click','li',function(){
			$(location).attr('href', '../html/detail.html?id='+this.id);
		})


	})	
})