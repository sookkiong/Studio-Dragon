$(document).ready(function(){

AOS.init();

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

$(window).on("scroll",function(){
	var position = $(this).scrollTop();

	$(".b_text")[position>=650 ? "addClass" : "removeClass"]("h_read");
});


// go top
$(".gotop").on("click",function(){
	$("html,body").animate({
		scrollTop:"0"
	},500);
});


});