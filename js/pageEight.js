$(function(){
	/*足球旋转*/
	$("#pageText1 .textTitle3").rotate({
	    bind : {
	        mouseover : function(){
	            $("#pageText1 #next img").rotate({animateTo: 360});
	        }, mouseout : function(){
	            $("#pageText1 #next img").rotate({animateTo: 0});
	        }
	    }
	});
	$("#pageText2 .textTitle3").rotate({
	    bind : {
	        mouseover : function(){
	            $("#pageText2 #next img").rotate({animateTo: 360});
	        }, mouseout : function(){
	            $("#pageText2 #next img").rotate({animateTo: 0});
	        }
	    }
	});

	$("#pageText1 .textTitle3").hover(
		function(){
			$("#pageText1 #next img").stop().animate({left:"+=80px"},500);
		},
		function(){
			$("#pageText1 #next img").stop().animate({left:"-=80px"},500);
		});
	$("#pageText2 .textTitle3").hover(
		function(){
			$("#pageText2 #next img").stop().animate({left:"+=80px"},500);
		},
		function(){
			$("#pageText2 #next img").stop().animate({left:"-=80px"},500);
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