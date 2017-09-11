// 创建Map实例
var map = new BMap.Map("map",{
	mapType:BMAP_SATELLITE_MAP
});    

// 初始化地图,设置中心点坐标和地图级别
map.centerAndZoom(new BMap.Point(116.038355,28.686546), 16);  

