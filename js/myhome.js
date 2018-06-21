$(function () {
    //滚动条插件
    $(".bottom").mCustomScrollbar();

    //导航栏下拉
    function navDown() {
        $(".nav-content").stop().slideDown(1000);
        var index = $(this).index();
        var navLi = $(".nav-content-list>li")
        navLi.eq(index).siblings().removeClass("nav-show")
        navLi.eq(index).addClass("nav-show");
    }
    //导航栏收起
    function navUp() {
        $(".nav-content").stop().slideUp(1000);
    }
    //导航栏效果
    $(".nav-list li").on("mouseenter",navDown);
    $(".nav").on("mouseleave",navUp);

    //右侧介绍内容切换
    function toggleInfo() {
        var index = $(this).index();
        $(this).siblings().removeClass("focus");
        $(this).addClass("focus");
        $(".bottom li").eq(index).siblings().removeClass("show");
        $(".bottom li").eq(index).addClass("show");
    }
    $(".top>li").on("mouseenter",toggleInfo);

    //轮播图
    var picUl = $(".pic");
    changeDotted(0);
    function changeDotted(index) {
        console.log(index)
        var dotted = $(".dotted>li");
        dotted.eq(index).siblings().animate({
            width : "20px"
        },250);
        dotted.eq(index).animate({
            width : "60px"
        },250);
    }
    function changePic() {
        var ulLeft = parseInt(picUl.css("left"));
        switch(ulLeft){
            case 0 :
            case -600 : changeDotted(1);break;
            case -1200 : changeDotted(2);break;
            case -1800 : changeDotted(3);break;
            case -2400 : picUl.css("left",0);changeDotted(0);break;
        }
    }
    var timer = setInterval(function () {
        picUl.animate({
            left : "-=600px"
        },500,changePic)
    },2000)
})