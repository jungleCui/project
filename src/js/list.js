
//引入config
require(['config','nav','menu'],function(){
	require(['jquery'],function($){
		nav();
		menu();
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
									<img src="../img/${item.img}" alt="" />
									<p class="title">${item.title}</p>
									<p>${item.category}</p>
									<p>${item.price}</p>
								</li>`
					});
					$list.html($html);
				}
			})
	
		

		$list.on('click','li',function(){
			$(location).attr('href', '../html/detail.html?id='+this.id);
			

		})


	})	
})