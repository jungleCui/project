require(['config','index'],function(){
		require(['jquery','gdszoom','common'],function(){
			$('#loginbox').load('../html/login.html');

			var a = location.search.split('=')[1];
			var $car = $('#main .car');


			$.ajax({
				url:'../api/id.php',
				dataType:'json',
				data:{
					id:a
			},
			success:function(data){
				var html = data.map(function(item){
					return `
						<p class="detail_title">
							<a href="../../index.html">韩国女装</a>><a>${item.name}</a>><a>${item.category}</a>>隐约性感，流鼻血之修身显瘦t恤:)
						</p>
						<div class="detail_pic">
							<img src="../img/${item.img}" data-big="../img/${item.img}" alt="">
						</div>
						<div class="detail_car">
							<p>
								<span>Neck Cutout Slim tee</span>
								<span>${item.title}</span>
								<i>HOT!</i>
							</p>
							<span class="everyprice">售价：${item.price}</span></br>
							<span>颜色</span>：	<select name="color" id="color">
										<option value="white">白色</option>
										<option value="black">黑色</option>
										<option value="red">红色</option>
										<option value="green">绿色</option>
									</select></br>
							<span>尺寸</span>：	<select name="size" id="size">
										<option value="s">s</option>
										<option value="m">m</option>
										<option value="l">l</option>
										<option value="xl">xl</option>
									</select></br>
							<span>数量</span>： <input id="num" type="text" value="1"><span class="jia">+</span><span class="jian">-</span></br>
									<button class="cunru">放入暂存架</button>	
									<button class="gouwuche">加入购物车</button>	
									<span class="erweima"><div class="erweimapic"><img src="../img/qrcode.png" alt="" /></div>扫一扫购买</span>	
						</div>`
										
				}).join('');
				$car.html(html);

				//放大镜
				$(function(){
					$('#main .car .detail_pic').gdszoom({
						width:400,height:300,position:'right'
					});

					$('.smallList img').click(function(){
						$('.goods img').attr({
							'src':this.src,
							'data-big':this.src
						});
					})
				});

				//二维码
				var $erweima = $('#main .car .erweima');
				var $erweimapic = $('#main .car .erweima .erweimapic');
				$erweima.on('mouseenter',function(){
					$erweimapic.show().stop().animate({height:130},300)
				});
				$erweima.on('mouseout',function(){
					$erweimapic.stop().animate({height:0},300,
						function(){
							$erweimapic.hide();
						})
				})
				
			}
		});

		console.log($('#main .car .detail_pic'));
		
			$car.on('click','a',function(){
				$(location).attr('href', '../html/list.html?category='+this.innerHTML);
				
			})

			

			//商品加减
			$car.on('click','span',function(){
				var $num = $('#main .car .detail_car #num').val();
				if(this.innerHTML == '+'){
					$num++;
					$('#main .car .detail_car #num').val($num);
				}else if(this.innerHTML == '-'){
					$num--;
					if($num<=0){
						$num=0;
					}
					$('#main .car .detail_car #num').val($num);

					console.log($num)
				}
			});			



			var carlist = getCookie('carlist');
			    carlist = carlist?JSON.parse(carlist):[];
			$car.on('click','button',function(){

				//获取页面上的数据
				var $jianshu = $('#main .car .detail_car #num').val()*1;
				var $car_num =	$('#head .menu .side_car .car_num').val()*1;
				var $size = $('#main .car #size').val();
				var $color = $('#main .car #color').val();
				var $img = $('#main .car .detail_pic img').attr("src");
				var $everyprice = $('#main .car .detail_car .everyprice').html().split('￥')[1];


				
				if(this.innerHTML=='加入购物车'){
					var $detail_pic = $('.detail_pic img');
					var $gouwuche = $('.detail_car .gouwuche');
					var $side_car = $('.menu .side_car');
					var $clone_pic = $detail_pic.clone(true);

					$clone_pic.css({
						position:'absolute',
						left:$detail_pic.offset().left,
						top:$detail_pic.offset().top,
					}).appendTo('body').animate({
						top:$side_car.offset().top,
						left:$side_car.offset().left,
						width:24,
						height:33
					},function(){
						$clone_pic.remove();
					})
						$car_num+=$jianshu;
						$('#head .menu .side_car .car_num').val($car_num);



				//ckookie保存
				for(var i=0 ; i<carlist.length ; i++){
					if(carlist[i].img==$img&&carlist[i].color==$color&&carlist[i].size==$size){
						console.log($jianshu);
						carlist[i].qty=carlist[i].qty+$jianshu;
						break;
					}
				}
				if(i==carlist.length){
					console.log(0);
					var buy = {
						id:$img+$color+$size,
						price:$everyprice,
						img:$img,
						color:$color,
						size:$size,
						qty:$jianshu
					};
					carlist.push(buy);
				}

				var now = new Date();
					now.setDate(now.getDate() + 7);

				setCookie('carlist',JSON.stringify(carlist),now,'/');
				};		
		})	
	})		
})
