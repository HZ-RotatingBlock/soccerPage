$(function(){
	/*足球旋转*/
	$("#icons img").rotate({
	    bind : {
	        mouseover : function(){
	            $(this).rotate({animateTo: 360});
	        }, mouseout : function(){
	            $(this).rotate({animateTo: 0});
	        }
	    }
	});
	//查看更多
	$("#view img").hover(
		function(){
			$(this).attr("src","images/view4.png");
	},
		function(){
			$(this).attr("src","images/view3.png");
	});
	//点赞
	$(".footText .praise").click(function(){
		$(this).attr("src","images/praise1.png");
	});



});