$(function () {
  /* 获取当前电脑页面高度并修改 */
  var wh = $(window).height();
  // console.log(wh);
  $(".service-wrap").css({ height: wh });
  /* 滚轮翻页 */
  //动画移动距离乘积计数初始化
  var curIndex = 0;
  //触发父元素
  var container = $(".container");
  //触发页面页数
  var sumCount = $(".service-wrap").length;
  // console.log(sumCount);
  //jquery全局window对象
  var $window = $(window);
  var duration = 500;
  //时间控制
  var aniTime = 0;
  var scrollFunc = function (e) {
    //如果动画还没执行完，则return
    if (new Date().getTime() < aniTime + duration) {
      return;
    }
    e = e || window.event;
    var t = 0;
    if (e.wheelDelta) {//IE/Opera/Chrome
      t = e.wheelDelta;
      if (t > 0) {
        //上滚动
        if (curIndex != 0) {
          curIndex--;
        }
        movePrev();
      } else if (t < 0) {
        //下滚动
        if (curIndex != sumCount - 1) {
          curIndex++;
        }
        moveNext();
      } else {

      }
    } else if (e.detail) {//Firefox
      t = e.detail;
      if (t < 0) {
        //上滚动
        if (curIndex != 0) {
          curIndex--;
        }
        movePrev();
      } else if (t > 0) {
        //下滚动
        if (curIndex != sumCount - 1) {
          curIndex++;
        }
        moveNext();
      }
    }
  };
  // 向下滚轮
  var fh = 445
  // console.log(fh);
  function moveNext() {
    //获取动画开始时的时间
    aniTime = new Date().getTime();
    container.css("transform", "translate3D(0, -" + (curIndex) * wh + "px, 0)");
    if (curIndex == 7) {
      container.css("transform", "translate3D(0, -" + (wh * 6 + fh) + "px, 0)");
    }
    // 动画触发条件添加/移除active类
    changeFloorIndex();
  }
  // 向上滚轮
  function movePrev() {
    //获取动画开始时的时间
    aniTime = new Date().getTime();
    container.css("transform", "translate3D(0, -" + (curIndex) * $window.height() + "px, 0)");
    // 动画触发条件添加/移除active类
    changeFloorIndex();
  }
  $("#fp-nav ul li").click(function () {
    if (new Date().getTime() < aniTime + duration) {
      return;
    }
    var i = $(this).attr("data-i") - 1;
    console.log(i);
    if (i < curIndex) {
      curIndex = i;
      movePrev()
    } else if (i > curIndex) {
      curIndex = i;
      moveNext()
    } else {
      return
    }
  })
  function changeFloorIndex() {
    for (var i = 0; i < sumCount; i++) {
      if (curIndex == i) {
        $($("#fp-nav ul li")[i]).find("a").addClass("active");
        $($(".service-wrap")[i]).addClass("active");
      } else {
        $($("#fp-nav ul li")[i]).find("a").removeClass("active");
        $($(".service-wrap")[i]).removeClass("active");
      }
    }
  }
  //鼠标滚轮事件监听
  function init() {
    //注册事件
    if (document.addEventListener) {
      document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }//W3C
    window.onmousewheel = document.onmousewheel = scrollFunc;//IE/Opera/Chrome
    container.css({
      "transition": "all 0.5s",
      "-moz-transition": "all 0.5s",
      "-webkit-transition": "all 0.5s"
    });
  }
  init();

})