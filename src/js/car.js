require(['config','index','jiarugouwuche'],function(){
	require(['common','jquery'],function(){
		$all_car = $('#main .all_car');
		var carlist = getCookie('carlist');
			carlist = carlist?JSON.parse(carlist):[];

		var html='';
		var tal=0;	
		//遍历
		html += carlist.map(function(res){
			tal+=res.price*res.qty;
			return `
			<div class="buy_good">
				<div class="car_good">
					<div class="car_good_detail">
						<input type="checkbox">
						<img src="${res.img}" alt="">
						<p>
							<span>特价</span>
							<em>8305# camilla underwear 2 set§-Mc-e42194</em>
							${res.color} / ${res.size}</br>
							<a  class="a1"></a>
							<a  class="a2"></a>
							<a  class="a3" id=${res.id}></a>
						</p>
					</div>
					<div class="car_good_price">
						<p>
							<span>￥${res.price}</span></br>
							<span>[不受会员等级优惠]</span>
						</p>
					</div>
					<div class="car_good_emony">
						<p>￥${res.qty}</p>
					</div>
					<div class="car_good_qty">
						<p>
							<a href="">-</a><input type="text" value="${res.qty}"><a href="">+</a>
						</p>
					</div>
					<div class="car_good_sum">
						<p><span>￥${res.price*res.qty}</span></p>
					</div>
				</div>
			</div>
					`
		}).join('');
			$all_car.html(html);


			var $del = $('#main .all_car .a3');
			var $all = $('#main .jiezhang #all');
			$all.on('click',function(){
				if($all.is(':checked')){
					$('#main .jiezhang .tal').html(tal);
					$('#main .car_good :checkbox').prop('checked',true);								
				}else{
					$('#main .jiezhang .tal').html('');
					$('#main .car_good :checkbox').prop('checked',false);													
				}
			})


			//点击删除商品
			$del.on('click',function(){
				$(this).parent().parent().parent().parent().remove();

					
				var $talnum = 0;
				var newarr = [];
				for(var i=0 ; i<carlist.length ; i++){	
					if(carlist[i].id==this.id){
						tal -= carlist[i].price*carlist[i].qty;
						carlist.splice(i,1)
						
					}
				};

				var now = new Date();
				now.setDate(now.getDate() + 7);
				setCookie('carlist',JSON.stringify(carlist),now,'/');
				$('#main .jiezhang .tal').html(tal);				
				
			})

			//点击清空购物车
			var $clearbtn = $('#main .jiezhang .clearbtn');
			$clearbtn.on('click',function(){
				// var now1 = new Date();
				// now1.setDate(now1.getDate() - 10);
				// setCookie('carlist',now1);
				$all_car.html('');
				$('#main .jiezhang .tal').html(0);
			})
		
	})
})
