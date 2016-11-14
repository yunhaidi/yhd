$(function () {
    // 导航
    $(".nav li").each(function(i,obj){
        $(obj).mouseover(function(){
            $(obj).css("border-bottom","2px solid #fff");
        })
        $(obj).mouseout(function(){
            $(obj).css("border-bottom","none");
        })
    })


    $(".xia").click(function(){
        var o=$(".about").position().top;
        var newObj={st:top};
        $(newObj).animate({st:o},{
            duration:500,
            step:function(){
                $(window).scrollTop(newObj.st);
            }
        })
    })

    $(".a").click(function(){
        var o=$(".about").position().top;
        var newObj={st:top};
        $(newObj).animate({st:o},{
            duration:500,
            step:function(){
                $(window).scrollTop(newObj.st);
            }
        })
    })
    $(".b").click(function(){
        var o=$(".works").position().top;
        var newObj={st:top};
        $(newObj).animate({st:o},{
            duration:500,
            step:function(){
                $(window).scrollTop(newObj.st);
            }
        })
    })
    $(".c").click(function(){
        var o=$(".life").position().top;
        var newObj={st:top};
        $(newObj).animate({st:o},{
            duration:500,
            step:function(){
                $(window).scrollTop(newObj.st);
            }
        })
    })
    $(".d").click(function(){
        var o=$(".contact").position().top;
        var newObj={st:top};
        $(newObj).animate({st:o},{
            duration:500,
            step:function(){
                $(window).scrollTop(newObj.st);
            }
        })
    })


    $(".lifecon li").each(function(i,obj){
        $(obj).mouseover(function(){
            $(".lifecon li").not($(".lifecon li").eq(i)).animate({opacity:0.5},300).finish();

        })
        $(obj).mouseout(function(){
            $(".lifecon li").animate({opacity:1},300);
        })
    })


    $(".works_img").each(function(i,obj){
        $(obj).mouseover(function(){
            $(".more_info").eq(i).animate({opacity:"1",left:"20px",top:"20px"});
        })
        $(obj).mouseout(function(){
            $(".more_info").animate({opacity:"0",left:"0px",top:"0px"});
            $(".more_info").finish();
        })
    })


})