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


//채용공고 마우스 hover시 건수 색깔 변화
$(".an_box").on("mouseover",function(){
	$(this).find(".an_num").addClass("c_on");
});
$(".an_box").on("mouseout",function(){
	$(this).find(".an_num").removeClass("c_on");
});

// 채용공고별 클릭 시 모달
$("#an_box1").on("click",function(){
	$("#r_in1").fadeIn();
});
$("#an_box2").on("click",function(){
	$("#r_in2").fadeIn();
});
$("#an_box3").on("click",function(){
	$("#r_in3").fadeIn();
});
$(".r_close").on("click",function(){
	$(".r_in").hide();
});

// go top
$(".gotop").on("click",function(){
	$("html,body").animate({
		scrollTop:"0"
	},500);
});



});