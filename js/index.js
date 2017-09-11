
//打开菜单
function openMenu(){
	$("#openMenu").hide();
	$("#left-menu ").animate({left:"15px"});
}


// 隐藏菜单
function closeMenu(){
	$("#left-menu ").animate({left:"-50px"},function(){
		$("#openMenu").show();
	});
	
}


	//左下角显示与隐藏

var more_btn_sum=1;
function openAndCloseMoreBtn(){
    if(more_btn_sum!=-1){
    		
		$('#jiucuo').animate({'left':'10px','bottom':'130px','opacity':'1'});
		$('#xinzeng').animate({'left':'68px','bottom':'113px','opacity':'1'});
		$('#shezhi').animate({'left':'114px','bottom':'67px','opacity':'1'});
		$('#wode').animate({'left':'140px','bottom':'10px','opacity':'1'});
	}else{
		$('#jiucuo').animate({'left':'0px','bottom':'0px','opacity':'0'});
		$('#xinzeng').animate({'left':'0px','bottom':'0px','opacity':'0'});
		$('#shezhi').animate({'left':'0px','bottom':'0px','opacity':'0'});
		$('#wode').animate({'left':'0px','bottom':'0px','opacity':'0'});
	}
	more_btn_sum= more_btn_sum*-1;
}

// 打开搜索页面
function openSearchDiv(){
	$("#searchDiv").show();
	$("#search-input").focus();
}