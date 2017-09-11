//区域滑动初始化
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});

function returnMap(){
    $("#searchDiv").hide();
}
$('#choiceTyoe li').click(function(e){
	console.log(e.id);
	$(this).siblings().children("a").removeClass("a-clicked");
	$(this).children("a").addClass("a-clicked");
	
	
	mui.get("http://api.map.baidu.com/geodata/v3/poi/list?geotable_id=175814&ak=WtSZiDjE0KEgfSMsxGY7pxng",function(data){
		
	},"json")
})


