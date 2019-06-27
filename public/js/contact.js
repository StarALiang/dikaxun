function initMap(){
  createMap();//创建地图
  setMapEvent();//设置地图事件
  addMapControl();//向地图添加控件
  addMapOverlay();//向地图添加覆盖物
}
function createMap(){ 
  map = new BMap.Map("map"); 
  map.centerAndZoom(new BMap.Point(114.07523,22.541098),19);
}
function setMapEvent(){
  map.enableKeyboard();
  map.enableDragging();
  map.enableDoubleClickZoom()
}
function addClickHandler(target,window){
  target.addEventListener("click",function(){
    target.openInfoWindow(window);
  });
}
function addMapOverlay(){
  var labels = [
    {position:{lng:114.07481,lat:22.541470},content:"<img src='img/contact/map_icon.png'>"}
  ];
  for(var index = 0; index < labels.length; index++){
    var opt = { position: new BMap.Point(labels[index].position.lng,labels[index].position.lat )};
    var label = new BMap.Label(labels[index].content,opt);
    map.addOverlay(label);
  };
}
//向地图添加控件
function addMapControl(){
  var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_TOP_LEFT});
  scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
  map.addControl(scaleControl);
  var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:0});
  map.addControl(navControl);
}
var map;
initMap();

//页面滚动特效实现
$(function(){
	donghua( $(".cooperation .page"),500,0,0 );
	donghua( $(".cooperation .co-table"),500,0,1 );
	donghua( $("#map"),700,0,1 );
	donghua( $(".address .contact-way"),700,0,1 );
	donghua( $(".welcometo"),700,0,1 );
});
function donghua(obj,top,time,first){
	if( obj.length>0 ){
		if(first==0){
			setTimeout (function(){
				obj.css({"top":"0","opacity":"1"});
			},time);
		}else{
			$(window).scroll(function(){
        var wst =  $(window).scrollTop()+top;
				if( obj.offset().top<wst){
					setTimeout (function(){
						obj.css({"top":"0","opacity":"1"});
					},time);
				}
			});
		}
	}
}


/* $(document).ready(function () {//当DOM已经加载，并且页面(包括图像)已将完全呈现时，触发ready事件
  var a, b, c;
  a = $(window).height();//当前可见区域的高度
  $(window).scroll(function () {
    var b = $(this).scrollTop();//获取垂直滚动的距离
    $(".page").each(function () {
      c = $(this).offset().top;//返回匹配元素相对于文档的偏移
      // console.log("可见区域高度"+a);
      // console.log("垂直滚动高度"+b);
      // console.log("匹配元素偏移" + c);
      // console.log(a + b+300 > c);
      if (b == 0) {
        // $(this).addClass("fadeInUp");
      }
      else if (a + b > c) {
        $(this).addClass("fadeInUp"); 
      }
      else {
        $(this).removeClass("fadeInUp");
      }
    })
  })
}) */