$(function () {
    // banner begin
    var $banner = $("div.banner");
    var $bannerAdd = $("div.banner-add");
    var $div = $("div.item>div");
    var $active = $("div.active")
    var spot = function () {
        var n = 5;
        $("div.active").css("z-index", 0).removeClass("active").next().addClass("active");
        $("div.active").css("z-index", n).next().css("z-index", --n).next().css("z-index", --n);
        $("div.active").prev().remove().appendTo($bannerAdd);
    };
    spot();
    $("ul.banner-list span:last").click(function () {
        spot();
        clearInterval(timer);
        timer = setInterval(function () {
            spot()
        }, 4000)
    })
    var timer = setInterval(function () {
        spot()
    }, 4000)
    var service = function ($this) {
        var src = $this.attr('data-img');
        var txt = $this.attr("data-txt");
        var bgi = $this.children("i");
        $(`div.service-txt.on`).removeClass("on");
        $("div.service-con>div.on").removeClass("on")
        $this.addClass("on");
        $("div.service-img").css("background-image", `url(${src})`)
        $(`div#${txt}`).addClass("on")
        bgi.css("background-image", `url(${bgi.attr("data-img")})`);
        $this.siblings().children("i").css("background-image", "")
    }
    $("div.service-con").on("mouseenter", "div", function () {
        service($(this));
    })
    // banner end
    // 声明函数changNumber
    var changNumber = function () {
        var dataNum1 = $("div[data-num='10']>strong")
        var dataNum2 = $("div[data-num='28']>strong")
        var dataNum3 = $("div[data-num='56']>strong")
        var dataNum4 = $("div[data-num='800']>strong")
        var dataNum5 = $("div[data-num='5000']>strong")
        var num1 = num2 = 0, num3 = 20, num4 = 514, num5 = 2018;
        var numTimerOne = setInterval(function () {
            num1++;
            num2++;
            num3++;
            if (num1 <= 10) { dataNum1.html(num1) };
            if (num2 <= 28) { dataNum2.html(num2) };
            if (num3 <= 56) { dataNum3.html(num3) } else {
                clearInterval(numTimerOne)
            };
        }, 100);
        var numTimerTwo = setInterval(() => {
            num4 += 2;
            num5 += 21;
            if (num4 <= 800) { dataNum4.html(num4) };
            if (num5 <= 5000) { dataNum5.html(num5) } else {
                clearInterval(numTimerTwo);
            };
        }, 30)
    }
    $(window).scroll(function(){
        var wst =  $(window).scrollTop();
        if (wst >= 0) {
            Object.prototype.toString.call(changNumber) == "[object Function]" ? changNumber() : changNumber = null;
            changNumber = null;
            // console.log(event.clientY,event.pageY)
        };
        if ($(document).scrollTop() >= 1000) {
            service($("div[data-txt='txt1']"))
        }
        if (wst >= 156) {
            $("div.sup").css("top", 0)
        }
        if (wst >= 380) {
            $("div.service").css("top", 0)
        }
        if (wst >= 1260) {
            $("div.case").css("top", 0)
        }
        if (wst >= 2272) {
            $("div.wind").css("top", 0)
        }
        if (wst >= 2890) {
            $("div.solve").css("top", 0)
        }
        if (wst >= 3768) {
            $("div.ring").css("top", 0)
        }
    })
    /* $('body').bind('mousewheel', function (event, delta, deltaX, deltaY) {
        console.log(event.clientY,event.pageY)
        if (event.pageY >= 0) {
            Object.prototype.toString.call(changNumber) == "[object Function]" ? changNumber() : changNumber = null;
            changNumber = null;
            // console.log(event.clientY,event.pageY)
        };
        if ($(document).scrollTop() >= 1000) {
            service($("div[data-txt='txt1']"))
        }
        if (event.pageY >= 156) {
            $("div.sup").css("top", 0)
        }
        if (event.pageY >= 380) {
            $("div.service").css("top", 0)
        }
        if (event.pageY >= 1260) {
            $("div.case").css("top", 0)
        }
        if (event.pageY >= 2272) {
            $("div.wind").css("top", 0)
        }
        if (event.pageY >= 2890) {
            $("div.solve").css("top", 0)
        }
        if (event.pageY >= 3768) {
            $("div.ring").css("top", 0)
        }
    }); */
    $("div.case-chang").on("mouseover", "div.case-list", function () {
        var $this = $(this);
        $this.addClass("on").find("div.case-txt>div").css("background", `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`)
    }).on("mouseout", "div.case-list", function () {
        $(this).removeClass("on")
    });
    var add = function () {
        var n = 0;
        return function () {
            // 判断触发事件的点击按钮，满足对应的条件修改n
            if (this[0] == $("ul.case-arrow>a:nth-child(3)>span")[0]) {
                n >= 2 ? n = 0 : n++;
            } else if (this[0] == $("ul.case-arrow>a:nth-child(1)>span")[0]) {
                n <= 0 ? n = 2 : n--;
            };
            //改变div.case-item的左外边距为-1420*n
            var $caseItem = $("div.case-item:nth-child(1)")
            $caseItem.css("marginLeft", `${(0 - n) * 1420}px`)
            n == 2 ? $caseItem.next().css("marginLeft", -1420) : $caseItem.next().css("marginLeft", 0);
        }
    };
    // 调用add函数绑定add的返回函数形成闭包避免全局污染；
    var fnAdd = add();
    // 给ul.case-arrow>a>span绑定点击事件当满足条件时利用冒泡调用fnAdd函数并用call改变fnAdd函数的this指向
    $("ul.case-arrow").on("click", "a>span", function () {
        fnAdd.call($(this));
    });
    var $windBtn = $("ul.wind-li-btn");
    var $windOne = $("#windOne");
    $windBtn.on("click", "li", function () {
        var $this = $(this);
        $this.children().css("background", `url(${$this.attr("data-on")})`);
        $this.siblings().children().css("background", `url(${$this.siblings().attr("data-up")})`)
        if ($this[0] == $windBtn.children().first()[0]) {
            $windOne.removeClass("on")
        } else {
            $windOne.addClass("on")
        }
    });
    $("ul.wind-add").on("mouseover", "li", function () {
        var $this = $(this);
        $this.addClass("on").siblings().removeClass("on");
        $(`ul#${$this.attr("data-wind")}`).css({
            opacity: 1,
            marginTop: "0px", zIndex: 10
        }).siblings().css({ opacity: 0, marginTop: "50px", zIndex: 0 })
    })
    $("div.solve-img").on("mouseenter", function (e) {
        var top = $(this).offset().top;
        var left = $(this).offset().left;
        var bottom = top + $(this).height();
        var right = left + $(this).width();

        var x = e.pageX;
        var y = e.pageY;

        var sT = Math.abs(y - top);
        var sB = Math.abs(bottom - y);
        var sL = Math.abs(x - left);
        var sR = Math.abs(right - x);

        var min = Math.min(sT, sB, sL, sR);
        switch (min) {
            case sT: $(this).prev().addClass("form-top")
                break;
            case sB: $(this).prev().addClass("form-bottom")
                break;
            case sL: $(this).prev().addClass("form-left")
                break;
            case sR: $(this).prev().addClass("form-right")
        }
        $("div.solve-txt").children("h2").html($(this).attr("data-h2")).next().html($(this).attr("data-p"))
    }).mouseleave(function () {
        $(this).prev().removeAttr("class");
    });
    $("ul.ring-item").on("mouseenter", "li", function () {
        var $this = $(this);
        $this.addClass("on").siblings().removeClass("on")
        $(`#${$this.attr("data-div")}`).addClass("on").siblings().removeClass("on")
    })
})