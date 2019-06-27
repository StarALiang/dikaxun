$(function(){
    /* 先在页头导入link样式 */
    $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head");
    /*包含页头相关的所有代码 */
    $.ajax({
        url:"header.html",
        type:"get",
        success:function(html){
            $(html).replaceAll("#header");
        }
    }).then(function(){
        /* 页头导航中英文切换 */
        var li = $('.nav ul .m');
        li.eq(0).find('a').eq(0).hover(function(){
            $(this).html('HOME');
        },function(){
            $(this).html('首页');
        });

        li.eq(1).find('a').eq(0).hover(function(){
            $(this).html('WEBSITE');
        },function(){
            $(this).html('网站建设');
        });
        
        li.eq(2).find('a').eq(0).hover(function(){
            $(this).html('PRODUCT');
        },function(){
            $(this).html('产品服务');
        });
        
        li.eq(3).find('a').eq(0).hover(function(){
            $(this).html('CASE');
        },function(){
            $(this).html('成功案例');
        });
        
        li.eq(4).find('a').eq(0).hover(function(){
            $(this).html('SOLUTIONS');
        },function(){
            $(this).html('解决方案');
        });
        
        li.eq(5).find('a').eq(0).hover(function(){
            $(this).html('NEWS');
        },function(){
            $(this).html('新闻动态');
        });
        
        li.eq(6).find('a').eq(0).hover(function(){
            $(this).html('ABOUT');
        },function(){
            $(this).html('关于我们');
        });
        
        li.eq(7).find('a').eq(0).hover(function(){
            $(this).html('CONTACT');
        },function(){
            $(this).html('联系我们');
        });
        /* 页头导航选中 */
        //设置点击后栏目变色
        //获取当前链接的目录位置
        var pn = location.pathname;
        for(var i=0;i<li.length;i++){
            var a=li[i].children[0];
            if(a.pathname==pn){
                a.style.color="#f3782a";
            }
        }
    })
    /* 页头广告隐藏 */
    $(window).scroll(function(){
        var top = $(document).scrollTop();
        if(top>50){
            $("#headdiv").css({top:-50});
            $(".top02 .nav .sub").css({top:74});
        }
        if(top<50){
            $("#headdiv").css({top:0});
            $(".top02 .nav .sub").css({top:124});
        }
    })
})