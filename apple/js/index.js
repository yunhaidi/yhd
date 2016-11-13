$(function(){
    // var cw=document.documentElement.clientWidth;
    // $(".imgbox a").css("left",cw+"px").eq(0).css("left",0);
    // $(".lunbodian div").css("width",0).eq(0).css("width",50+"px");
    // var t=setInterval(change,3000);
    // var next=0;
    // var now=0;
    // function change(type){
    //     type=type||"right";
    //     if(type=="right"){
    //         next++;
    //         if(next>=$(".banner a").length){
    //             next=0;
    //         }
    //         $(".imgbox a").eq(now).css("left",0);
    //         $(".imgbox a").eq(next).css("left",cw+"px");
    //         $(".imgbox a").eq(next).animate({left:0});
    //         $(".lunbodian div").eq(next).animate({width:50+"px"});
    //         $(".imgbox a").eq(now).animate({left:-cw+"px"});
    //         $(".lunbodian div").eq(now).css("width",0);
    //         now=next;
    //     }else if(type=="left"){
    //         next--;
    //         if(next<0){
    //             next=$(".imgbox a").length-1;
    //         }
    //         $(".imgbox a").eq(now).css("left",0);
    //         $(".imgbox a").eq(next).css("left",-cw+"px");
    //         $(".imgbox a").eq(next).animate({left:0});
    //         $(".lunbodian div").eq(next).animate({width:0});
    //         $(".imgbox a").eq(now).animate({left:cw+"px"});
    //         $(".lunbodian div").eq(now).animate({width:50+"px"});
    //         now=next;
    //     }
    // }
    // $(".lunbodian li").each(function(index,obj){
    //     $(obj).click(function(){
    //         if (index<now) {
    //             next=index;
    //             $(".banner a").eq(next).css("left",-cw+"px");
    //             $(".banner a").eq(now).css("left",0);
    //             $(".banner a").eq(next).animate({left:0});
    //             $(".lunbodian div").eq(next).animate({width:0});
    //             $(".banner a").eq(now).animate({left:cw+"px"});
    //             $(".lunbodian div").eq(now).animate({width:50+"px"});
    //             now=next;
    //         }else{
    //             next=index;
    //             $(".banner a").eq(next).css("left",cw+"px");
    //             $(".banner a").eq(now).css("left",0);
    //             $(".banner a").eq(next).animate({left:0});
    //             $(".lunbodian div").eq(next).animate({width:50+"px"});
    //             $(".banner a").eq(now).animate({left:-cw+"px"});
    //             $(".lunbodian div").eq(now).css("width",0);
    //             now=next;
    //         }
    //     })
    // })
    //
    // $(".ljt").click(function () {
    //     change("left");
    // })
    // $(".rjt").click(function () {
    //     change("right");
    // })
    // $(".banner").mouseover(function(){
    //     clearInterval(t);
    // })
    // $(".banner").mouseout(function(){
    //     t=setInterval(change,3000);
    // })


    // banner
    var now=0;
    var next=0;
    var currentTime=0;
    var flag=true;
    $(".imgbox a").css("left","100%").eq(0).css("left",0);


    function move(){
        next++;
        if(next==3){
            next=0;
            flag=false;
        }

        $(".imgbox a").eq(now).animate({width:"80%",height:"80%"}).css("zIndex",0);
        $(".imgbox a").eq(next).animate({left:0},function(){
            $(".imgbox a").eq(now).css({
                left:"100%",width:"100%",height:"100%"
            })
            now=next;
            currentTime=0;
            flag=true;

        }).css("zIndex",1)
    }
    function move1(){
        currentTime+=50;
        var bili=currentTime/3000;
        if(bili>1){
            bili=1;
        }
        $(".progress").eq(now).css({width:bili*100+"%"})
        if(flag===false){
            $(".progress").css("width",0);
        }
    }


    var t1=setInterval(move,3000)
    var t2=setInterval(move1,50)

    $(window).focus(function(){
        t1=setInterval(move,3000);
        t2=setInterval(move1,50)
    })
    $(window).blur(function(){
        clearInterval(t1);
        clearInterval(t2);
    })


    $(".lunbodian li").click(function(){
        next=$(this).index(".lunbodian li");
        stop();
    })

    $(".ljt").click(function(){
        next--
        if(next==-1){
            next=2;
        }
        stop();
    })
    $(".rjt").click(function(){
        next++;
        if(next==3){
            next=0;
        }
        stop();
    })


    function stop(){
        /*
         *  定时器停掉
         * */
        clearInterval(t1);
        clearInterval(t2);

        /*按钮的变化*/
        $(".lunbodian li").find(".progress").css("width",0);
        $(".lunbodian li").eq(next).find(".progress").css("width","100%");

        /*轮播图发生变化*/
        if(next>now){
            $(".imgbox a").eq(now).animate({width:"80%",height:"80%"}).css("zIndex",0);

            $(".imgbox a").eq(next).animate({left:0},function(){
                $(".imgbox a").eq(now).css({
                    left:"100%",width:"100%",height:"100%"
                })
                now=next;

            }).css("zIndex",1)
        }else{
            $(".imgbox a").eq(now).animate({left:"100%"}).css("zIndex",1);
            $(".imgbox a").eq(next).css({
                width:"80%",height:"80%",left:0
            }).animate({width:"100%",height:"100%"},function(){
                now=next;
            })


        }
    }


    $(".xiala_btn").click(function(){
        $(".xiala").slideToggle(300);
    })
    $(".footer_nav1 i").each(function(i,obj){
        $(obj).click(function(){
            $(".footer_nav1 ul").eq(i).slideToggle(300);
        })
    })

})