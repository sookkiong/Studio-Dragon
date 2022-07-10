$(document).ready(function(){

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

$("#wm_title").on("click",function(){
	$(".wm_sub").slideToggle(300);

});

//인물소개 동작
$(".box").on("mouseover",function(){
	$(".box").removeClass("boxon");
	$(this).addClass("boxon");

	var x = $(this).children("a").attr("href");
	$(".boxinfo").hide();
	console.log(x);
	$(x).show();
});

$(".box a").click(function(e){
  e.preventDefault();
});



// go top
$(".gotop").on("click",function(){
	$("html,body").animate({
		scrollTop:"0"
	},500);
});

});