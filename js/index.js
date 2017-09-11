var xueyuanData = null;
//打开菜单
function openMenu() {
	$("#openMenu").hide();
	$("#left-menu ").animate({
		left: "15px"
	});
}

// 隐藏菜单
function closeMenu() {
	$("#left-menu ").animate({
		left: "-50px"
	}, function() {
		$("#openMenu").show();
	});

}

//左下角显示与隐藏

var more_btn_sum = 1;

function openAndCloseMoreBtn() {
	if(more_btn_sum != -1) {

		$('#jiucuo').animate({
			'left': '10px',
			'bottom': '130px',
			'opacity': '1'
		});
		$('#xinzeng').animate({
			'left': '68px',
			'bottom': '113px',
			'opacity': '1'
		});
		$('#shezhi').animate({
			'left': '114px',
			'bottom': '67px',
			'opacity': '1'
		});
		$('#wode').animate({
			'left': '140px',
			'bottom': '10px',
			'opacity': '1'
		});
	} else {
		$('#jiucuo').animate({
			'left': '0px',
			'bottom': '0px',
			'opacity': '0'
		});
		$('#xinzeng').animate({
			'left': '0px',
			'bottom': '0px',
			'opacity': '0'
		});
		$('#shezhi').animate({
			'left': '0px',
			'bottom': '0px',
			'opacity': '0'
		});
		$('#wode').animate({
			'left': '0px',
			'bottom': '0px',
			'opacity': '0'
		});
	}
	more_btn_sum = more_btn_sum * -1;
}


// 打开搜索页面
function openSearchDiv() {
	$("#searchDiv").show();
	// $("#search-input").focus();
	if(xueyuanData != null) {
		console.log("lll")
		return;
	} else {
		
		mui.get("http://api.map.baidu.com/geodata/v3/poi/list?geotable_id=175814&ak=WtSZiDjE0KEgfSMsxGY7pxng", function(data) {
			xueyuanData = data.pois;
			console.log(JSON.stringify(xueyuanData))
			var li=[];
			for(var a=0;a<xueyuanData.length;a++){
				li[a]=$('<li data-index="'+xueyuanData[a].title+'" class="mui-table-view-cell"> <div>	<img src="fonts/xueyuan.svg" ></div><font>'+xueyuanData[a].title+'</font></li>')
				$(li[a]).click(function(){
					console.log($(this).html());
					console.log($(this).attr("data-index"));
				});
				$("#pois").append(li[a]);
			}
		}, "json")
	}
	
}
