$(".cl-ul .hiden").hide();
$(".solutions_more").click(function () {
	if($(".cl-ul .hiden").css("display")=="none")
	{
		$(".cl-ul .hiden").show();
		$(".solutions_more").addClass("active");
		$(".solutions_more").html("收起行业解决方案");
	}
	else
	{
		$(".cl-ul .hiden").hide();
		$(".solutions_more").removeClass("active");
		$(".solutions_more").html("更多行业解决方案");
	}
});