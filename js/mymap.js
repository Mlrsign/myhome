// 103.041151,29.651899
$(function () {
    function showMap() {
        $(this).css("display","none");
        $("#mymap").animate({
            width : "500px",
            height : "500px"
        },500)

    }
    $("#start").hover(function () {
        $("#tips").stop().animate({
            width : "100px",
            fontSize : "14px"
        },500)
    },function () {
        $("#tips").stop().animate({
            width : 0,
            fontSize : 0
        },500)
    })
    $("#start").on("click",showMap);
    $("#close").on("click",function () {
        $("#mymap").css({
            width : 0,
            height : 0
        })
        $("#start").css({display : "block"});
    })
})
window.init = function () {
        var myMap = new AMap.Map('mymap', {
            zoom:8,//级别
            center: [103.041151,29.651899],//中心点坐标
            viewMode:'3D'} //使用3D视图
        );
        var myMaker = new AMap.Marker({
            position : [103.041151,29.651899]
        })
        myMap.add(myMaker);
}


