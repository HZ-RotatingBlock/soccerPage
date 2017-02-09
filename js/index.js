$(function(){

	//主页
	//翻页指示器图标动画
	//需导入jquery.rotate.js插件
	$("#icons li img").rotate({
	    bind : {
	        mouseover : function(){
	            $(this).rotate({animateTo: 360});
	        }, mouseout : function(){
	            $(this).rotate({animateTo: 0});
	        }
	    }
	});
	//内容文字变色动画
	$("#pageContent li").hover(
		function(){
			$(this).animate({opacity:"1"},1000);
		},
		function(){
			$(this).animate({opacity:"0.7"},1000);
		});
	//查看更多
	$("#view img").hover(
		function(){
			$(this).attr("src","images/view1.png");
	},
		function(){
			$(this).attr("src","images/view.png");
	});
	//点赞
	$(".footText .praise").click(function(){
		$(this).attr("src","images/praise1.png");
	});



});