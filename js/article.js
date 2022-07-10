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

//검색 창 카테고리 동작
var num = 0;
$(".cate_text").on("click",function(){
	if(num%2==0){
		$(".menu_cate").show();
		$(this).addClass("cateon");
	}else{
		$(".menu_cate").hide();
		$(this).removeClass("cateon");
	}
	
	num++;
});

$(".menu_cate li a").on("click",function(){
	var listText = $(this).text();
	$(".cate_text").text(listText);
	$(".cate_text").removeClass("cateon");
	$(".menu_cate").hide();
	num--;

});

$(".menu_cate li a").click(function(e){
  e.preventDefault();
});




// go top
$(".gotop").on("click",function(){
	$("html,body").animate({
		scrollTop:"0"
	},500);
});







});