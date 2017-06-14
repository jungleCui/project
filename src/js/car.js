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
					<input type="checkbox" class="thischeck">
					<div class="car_good_detail">
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
							<a>-</a>
								<input type="text" value="${res.qty}">
							<a>+</a>
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

			var $shangpinjia = $('#main .jiezhang .shangpinjia');
			var $youhui = $('#main .jiezhang .youhui');
			var $del = $('#main .all_car .a3');
			var $all = $('#main .jiezhang #all');
			$all.on('click',function(){
				if($all.is(':checked')){
					$('#main .jiezhang .tal').html(tal);
					$('#main .car_good :checkbox').prop('checked',true);
					$shangpinjia.html(tal);
					$youhui.html('0');								
				}else{
					$('#main .jiezhang .tal').html('');
					$('#main .car_good :checkbox').prop('checked',false);
					$shangpinjia.html('');
					$youhui.html('');													
				}
			});


			//选中商品加上价格
			var $inputlist = $('#main .buy_good :checkbox');
			$all_car.on('click','input',function(){
				var $checktal = 0 ;
				var $checked = $all_car.find("input:checked");
				for(var i=0 ; i<$checked.length ; i++){
					$checktal += $checked[i].parentNode.children[5].children[0].children[0].innerHTML.slice(1)*1;
					$('#main .jiezhang .tal').html($checktal);
					$shangpinjia.html($checktal);
					$youhui.html('0');
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
