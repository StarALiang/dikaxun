/*包含页脚相关的所有代码 */
$(document).ready(function () {
    $.ajax({
        url: "sidebar.html",
        type: "get",
        success: function (html) {
            $(html).replaceAll("#sidebar");
            $(`<link rel="stylesheet" href="css/sidebar.css">`).appendTo("head");
        }
    }).then(function () {
        /* 侧边栏打开/关闭 */
        $("ul>.qq").click(function () {
            var $yin = $(".yin")
            if ($yin.css("display") == "none") {
                $yin.css("display", "block")
            }
        })
        $("#ab").click(function () {
            var $yin = $(".yin")
            if ($yin.css("display") == "block") {
                $yin.css("display", "none")
            }
        })
        $("ul>.bang").click(function () {
            var $ins = $("#ins")
            if ($ins.css("display") == "none") {
                $ins.css("display", "block")
            }
        })
        $(".nb_top>a").click(function () {
            var $ins = $("#ins")
            if ($ins.css("display") == "block") {
                $ins.css("display", "none")
            }
        })

        $("#yu").click(function () {
            var $wrap = $(".dialog-wrap")
            var $ins = $("#ins")
            if ($ins.css("display") == "block") {
                $ins.css("display", "none")
            }
            if ($wrap.css("display") == "none") {
                $wrap.css("display", "block")
            }

        })
        $(".layui-layer-setwin").click(function () {
            var $wrap = $(".dialog-wrap")
            if ($wrap.css("display") == "block") {
                $wrap.css("display", "none")
            }
        })

        /* 回顶部 */
        $("#gotop").click(function(){
            $('html,body').animate({ 'scrollTop': 0 }, 600);
        })
        /* 监听轮播高度/回顶部按钮显示或隐藏 */
        $(window).scroll(function () {
            var $top = $("#gotop")
            var s = $(window).scrollTop();
            if (s > 45) {
                $top.css("display", "block")
            } else {
                $top.css("display", "none")
            }
        });
    })
})
function go_top() {}