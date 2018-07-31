//手风琴动画效果
var _index7=0;
$(".flash4 ul li").mouseover(function(){
	_index7=$(this).index();
	$(this).stop().stop().animate({width:"1202"},1000).siblings("li").stop().animate({width:"179.5"},1000);
  $(".imgCen").eq(_index7).css("display","block").siblings(".imgCen").css("display","none");
  $("p.bt_2").eq(_index7).css("display","block").siblings("p.bt_2").css("display","none");
  // $("p.bt_2").eq(_index7).css({width:"100%"}).siblings("p.bt_2").css({width:"0%"});
  $(".imgTop div").eq(_index7).addClass("tm").parent().parent().siblings().find(".bg-bl").removeClass("tm");
  console.log($(".imgTop .bg-bl").eq(_index7).addClass("tm").parent().parent().siblings());

});
$(".flash4 ul li").mouseout(function(){
	$(".imgCen").css("display","none");
	$("p.bt_2").css("display","none");
});



