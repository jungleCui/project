require(['config','index','jiarugouwuche'],function(){
	require(['common','jquery'],function(){
		$all_car = $('#main .all_car');
		var carlist = getCookie('carlist');
			carlist = carlist?JSON.parse(carlist):[];

		var html='';	
		//遍历
		html += carlist.map(function(res){
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
							<a href="" class="a1"></a>
							<a href="" class="a2"></a>
							<a href="" class="a3"></a>
						</p>
					</div>
					<div class="car_good_price">
						<p>
							<span>￥199</span></br>
							<span>[不受会员等级优惠]</span>
						</p>
					</div>
					<div class="car_good_emony">
						<p>￥1</p>
					</div>
					<div class="car_good_qty">
						<p>
							<a href="">-</a><input type="text" value="${res.qty}"><a href="">+</a>
						</p>
					</div>
					<div class="car_good_sum">
						<p><span>￥199</span></p>
					</div>
				</div>
			</div>
					`
		});
			$all_car.html(html);
			console.log(html,$all_car);
		
	})
})
