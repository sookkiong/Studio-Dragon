$(document).ready(function(){

AOS.init();

$(".close_menu button").on("click",function(){
	$("#mainmenu").fadeOut();
});
$("#hammenu a").on("click",function(){
	$("#mainmenu").fadeIn();
});

$(".submenu li").on("mouseover",function(){
	$(this).stop().addClass("m_on");

});
$(".submenu li").on("mouseout",function(){
	$(this).stop().removeClass("m_on");

});

$(window).on("load",function(){
	$(".textbox").addClass("ontext");
});


//scrollmenu 이동
$("#scrollmenu a").on("click",function(){
	var x = $(this).attr("href");
	var y = $(x).offset().top;
	$("html,body").animate({
		scrollTop : y
	},1000,"swing");
});


$(window).on("scroll",function(){
	var h = $("html,body").scrollTop();
	
	var sectionH0 = $("#home").offset().top;
	var sectionH1 = $("#onair").offset().top;
	var sectionH2 = $("#works").offset().top;
	var sectionH3 = $("#issue").offset().top;
	var sectionH4 = $("#news").offset().top;

	$("header")[h>=sectionH1 - 5 ? "addClass" : "removeClass"]("h_on");
	$("#lang li")[h>=sectionH1 ? "addClass" : "removeClass"]("lang_off");
	
	if(h>=sectionH0 - 5){
		$("#scrollmenu li").removeClass("select");
		$("#scrollmenu li").removeClass("sel");
		$("#scrollmenu li").eq(0).addClass("select");
	}
	if(h>=sectionH1 - 5){
		$("#scrollmenu li").removeClass("select");
		$("#scrollmenu li").removeClass("sel");
		$("#scrollmenu li").eq(1).addClass("sel");
	}
	if(h>=sectionH2 - 10){
		$("#scrollmenu li").removeClass("select");
		$("#scrollmenu li").removeClass("sel");
		$("#scrollmenu li").eq(2).addClass("sel");
	}
	if(h>sectionH3 - 10){
		$("#scrollmenu li").removeClass("select");
		$("#scrollmenu li").removeClass("sel");
		$("#scrollmenu li").eq(3).addClass("sel");
	}
	if(h>=sectionH4 - 10){
		$("#scrollmenu li").removeClass("select");
		$("#scrollmenu li").removeClass("sel");
		$("#scrollmenu li").eq(4).addClass("sel");
	}	
	
});


// works mouseover
$(".work a").on("mouseover",function(){
	$(this).find(".work_info").stop().fadeIn(300);
});
$(".work a").on("mouseout",function(){
	$(this).find(".work_info").stop().fadeOut(300);
});

//슬라이드
$(".slide-group").slick({
	autoplay:true,
	speed:1000,
	autoplaySpeed:1000,
	fade:true,
	pauseOnHover:false,
	pauseOnFocus:false
});


// on air 슬라이드 동작
var current=0;

$(".on_next").on("click",function(){
	slideNext();

});

function slideNext(){
	if(current==3){
		return false;	
	}else{
		$(".onair_con").animate({
			left:"-=20%"
	});
	current++;
	}
}

$(".on_prev").on("click",function(){
	slidePrev();

});

function slidePrev(){
	if(current==0){
		return false;	
	}else{
		$(".onair_con").animate({
			left:"+=20%"
	});
	current--;
	}
}

// go top
$(".gotop").on("click",function(){
	$("html,body").animate({
		scrollTop:"0"
	},500);
});






});