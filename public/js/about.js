var recover={top:0,opacity: 1}
$('.aboutPage .scheme .wrap').css(recover);
$('.aboutPage .business .wrap .pic').css(recover);
/* 三楼 */
//tab替换框
function tabSwitch(tab,tabBox){
  var li = tab.find("li");
  /* 获取当前tab下的li有on样式类的元素 */
  var on = li.index( tab.find(".on") );
  /* 对应tabBox下标元素显示，其他兄弟隐藏 */
  tabBox.children("div").eq(on).show().siblings().hide();
  li.mouseenter(function(){
    /* 在当前鼠标触发的元素上添加on样式类，并移出兄弟们的on样式类 */
    $(this).addClass("on").siblings().removeClass("on");
    /* 获取当前tabBox下标 */
    var index = li.index(this);
    /* 鼠标触发当前元素显示，其他兄弟隐藏 */
    tabBox.children("div").eq(index).show().siblings().hide();
  });
}
var tab=$("div.service .tab");
var tabBox=$("div.service .tabBox");
tabSwitch(tab,tabBox);

/* 四楼 证书 */
/* 页面轮播 */
let imgArr=["list11","list10","list9","list8","list7","list6","list5","list4","list3","list2","list1"];
let index=0;
let timer=null;

/* 播放下一张 */
function nextImg(){
  imgArr.push(imgArr[0]);
  imgArr.shift();
  $(".picScroll-left .tempWrap li").each((i,e)=>$(e).removeClass().addClass(imgArr[i]));
  index++;
  if(index>10) index=0;
}

/* 播放上一张 */
function prevImg(){
  imgArr.unshift(imgArr[imgArr.length-1]);
  imgArr.pop();
  $(".picScroll-left .tempWrap li").each((i,e)=>$(e).removeClass().addClass(imgArr[i]));
  index--;
  if(index<0) index=11;
}

//上一张绑定点击和移入移出事件
$(".picScroll-left .prev").click(()=>prevImg()).mouseover(()=>{
  clearInterval(timer);
  timer=null;
}).mouseleave(()=>timer=setInterval(nextImg,3000));

//下一张绑定点击和移入移出事件
$(".picScroll-left .next").click(()=>nextImg()).mouseover(()=>{
  clearInterval(timer);
  timer=null;
}).mouseleave(()=>timer=setInterval(nextImg,3000));

//鼠标移入清除定时器,鼠标移出开始定时器
$(".picScroll-left").mouseover(()=>{
  clearInterval(timer);
  timer=null;
}).mouseleave(()=>timer=setInterval(nextImg,3000));

//进入页面后自动开始定时器
timer=setInterval(nextImg,3000);

/* 滚轮动画 */
$(function(){
	donghua( $(".aboutPage .scheme .wrap"),800,0,0 );
	donghua( $(".aboutPage .business .list"),700,0,1 );
	donghua( $(".aboutPage .business .pic"),800,0,1 );
	donghua( $(".aboutPage .service .columnTitle"),800,0,1 );
	donghua( $(".aboutPage .service .tab"),700,0,1 );
	donghua( $(".aboutPage .service .tabBox"),700,0,1 );
	donghua( $(".aboutPage .qualification .columnTitle"),800,0,1 );
  donghua( $(".aboutPage .qualification .picScroll-left"),700,0,1 );
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