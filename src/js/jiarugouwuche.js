
// require(['config'],function(){
// 	require(['jquery'],function(){

// 			var $detail_pic = $('.detail_pic img');
// 			var $gouwuche = $('.detail_car .gouwuche');
// 			var $side_car = $('.menu .side_car');

			
// 			console.log($detail_pic);
// 			$gouwuche.on('click',function(){
// 			var $clone_pic = $detail_pic.clone(true);

// 				$clone_pic.css({
// 					position:'absolute',
// 					left:$detail_pic.offset().left,
// 					top:$detail_pic.offset().top,
// 				}).appendTo('body').animate({
// 					top:$side_car.offset().top-200,
// 					left:$side_car.offset().left-100,
// 					width:24,
// 					height:33
// 				},function(){
// 					$clone_pic.animate({
// 						top:$side_car.offset().top,
// 						left:$side_car.offset().left
// 					},function(){
// 						$clone_pic.remove()
// 					})
// 				})
// 			console.log($gouwuche[0],$detail_pic,$clone_pic);

// 		})
// 	})
// })
