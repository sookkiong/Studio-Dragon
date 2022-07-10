$(document).ready(function(){

AOS.init();

// header 동작
$(".close_menu button").on("click",function(){
	$("#mainmenu").fadeOut();
});
$(".ham").on("click",function(){
	$("#mainmenu").fadeIn();
});

$(".submenu li").on("mouseover",function(){
	$(this).stop().addClass("m_on");

});
$(".submenu li").on("mouseout",function(){
	$(this).stop().removeClass("m_on");

});

/*
$("#wm_title").on("click",function(){
	$(".wm_sub").slideToggle(300);

});
*/

// 방영 종류 별 작품
$(".wb").css("display","none");
$("#wb1").css("display","block");

$(".wm_sub li").on("click",function(){
	event.preventDefault();
	var active=$(this).find("a").attr("href");
	$(".wb").hide();
	$(active).fadeIn();
});

// 카테고리 화살표 변경
var num = 0;

$("#wm_title").on("click",function(){
	if(num%2==0){
		$(".wm_sub").show();
		$(this).addClass("up");
	}else{
		$(".wm_sub").hide();
		$(this).removeClass("up");
	}
	num++;

});

$(".wm_sub li a").on("click",function(){
	$(".wm_sub").hide();
	$("#wm_title").removeClass("up");
	num--;

	var x = $(this).text();
	$("#wm_title").text(x);
});



// go top
$(".gotop").on("click",function(){
	$("html,body").animate({
		scrollTop:"0"
	},500);
});




});