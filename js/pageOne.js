$(function(){
	//点赞
	$(".footIn .praise").click(function(){
		$(this).attr("src","images/praise1.png");
	});
	$("#one .text3").hover(
		function(){
			$("#one #next img").stop().animate({left:"+=20px"},500);
		},
		function(){
			$("#one #next img").stop().animate({left:"-=20px"},500);
		});
	$("#two .text3").hover(
		function(){
			$("#two #next img").stop().animate({left:"+=20px"},500);
		},
		function(){
			$("#two #next img").stop().animate({left:"-=20px"},500);
		});
	$("#three .text3").hover(
		function(){
			$("#three #next img").stop().animate({left:"+=20px"},500);
		},
		function(){
			$("#three #next img").stop().animate({left:"-=20px"},500);
		});
	$("#four .text3").hover(
		function(){
			$("#four #next img").stop().animate({left:"+=20px"},500);
		},
		function(){
			$("#four #next img").stop().animate({left:"-=20px"},500);
		});


});