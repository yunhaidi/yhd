$(function(){
    var cw=document.documentElement.clientWidth;
    $(".imgbox a").css("left",cw+"px").eq(0).css("left",0);
    $(".lunbodian div").css("width",0).eq(0).css("width",50+"px");
    var t=setInterval(change,3000);
    var next=0;
    var now=0;
    function change(type){
        type=type||"right";
        if(type=="right"){
            next++;
            if(next>=$(".banner a").length){
                next=0;
            }
            $(".imgbox a").eq(now).css("left",0);
            $(".imgbox a").eq(next).css("left",cw+"px");
            $(".imgbox a").eq(next).animate({left:0});
            $(".lunbodian div").eq(next).animate({width:50+"px"});
            $(".imgbox a").eq(now).animate({left:-cw+"px"});
            $(".lunbodian div").eq(now).css("width",0);
            now=next;
        }else if(type=="left"){
            next--;
            if(next<0){
                next=$(".imgbox a").length-1;
            }
            $(".imgbox a").eq(now).css("left",0);
            $(".imgbox a").eq(next).css("left",-cw+"px");
            $(".imgbox a").eq(next).animate({left:0});
            $(".lunbodian div").eq(next).animate({width:0});
            $(".imgbox a").eq(now).animate({left:cw+"px"});
            $(".lunbodian div").eq(now).animate({width:50+"px"});
            now=next;
        }
    }
    $(".lunbodian li").each(function(index,obj){
        $(obj).click(function(){
            if (index<now) {
                next=index;
                $(".banner a").eq(next).css("left",-cw+"px");
                $(".banner a").eq(now).css("left",0);
                $(".banner a").eq(next).animate({left:0});
                $(".lunbodian div").eq(next).animate({width:0});
                $(".banner a").eq(now).animate({left:cw+"px"});
                $(".lunbodian div").eq(now).animate({width:50+"px"});
                now=next;
            }else{
                next=index;
                $(".banner a").eq(next).css("left",cw+"px");
                $(".banner a").eq(now).css("left",0);
                $(".banner a").eq(next).animate({left:0});
                $(".lunbodian div").eq(next).animate({width:50+"px"});
                $(".banner a").eq(now).animate({left:-cw+"px"});
                $(".lunbodian div").eq(now).css("width",0);
                now=next;
            }
        })
    })

    $(".ljt").click(function () {
        change("left");
    })
    $(".rjt").click(function () {
        change("right");
    })
    $(".banner").mouseover(function(){
        $(".jt").css("display","block");
        clearInterval(t);
    })
    $(".banner").mouseout(function(){
        $(".jt").css("display","none");
        t=setInterval(change,3000);
    })


    $(".xiala_btn").click(function(){
        $(".xiala").slideDown();
    })
    $(".nav_apple").mouseover(function(){
        $(".xiala").slideUp();
    })
    $(".footer_nav1 i").each(function(i,obj){
        $(obj).click(function(){
            $(".footer_nav1 ul").eq(i).slideDown();
        })
        $(".footer_nav1").mouseout(function(){
            $(".footer_nav1 ul").eq(i).slideUp();
        })
    })

})