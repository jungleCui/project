require(['config','index','jiarugouwuche'],function(){
	require(['common','jquery'],function(){
		//在cookie获取用户名写入页面
		var $login = $('#head .user_menu li .yidenglu');
		var $account = getCookie('account');
		if($account){
			$login.html($account)
		};
		
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
							<button class="jia">+</button>
							<input type="text" value="${res.qty}">
							<button class="jian">-</button>
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

			//全选
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
					$checktal += $checked[i].parentNode.children[4].children[0].children[1].value*
								$checked[i].parentNode.children[2].children[0].children[0].innerHTML.slice(1);
					$('#main .jiezhang .tal').html($checktal);
					$shangpinjia.html($checktal);
					$youhui.html('0');
				}
				if($checked.length==0){
					$shangpinjia.html($checktal);
					$('#main .jiezhang .tal').html(0);
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
				$shangpinjia.html(tal);

				if($(this).parent().parent().prev().is(':checked')==true){
					$shangpinjia.html(tal);
				}			
				
			})

			//点击清空购物车
			var $clearbtn = $('#main .jiezhang .clearbtn');
			$clearbtn.on('click',function(){
				var now = new Date();
				now.setDate(now.getDate() - 7);
				setCookie('carlist',[],now,'/');
				$all_car.html('');
				$('#main .jiezhang .tal').html(0);
				$shangpinjia.html(0);
			})

			//购物车加减
			var $jia = $('#main .all_car .car_good_qty .jia');
			var $jian = $('#main .all_car .car_good_qty .jian');
			$jia.on('click',function(){
				var $inputqty = this.nextElementSibling.value++;
				//改页面的数字
				
				// $shangpinjia.html(tal);
			})
			$jian.on('click',function(){
				var $inputqty = this.previousElementSibling.value--;
			})
		
	})
})
