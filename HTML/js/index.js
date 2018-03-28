
//下拉框数据；
var start = [];
var end = [];

//添加下拉框默认标题；
var selectOne = [
    {
        "value":"请选择起点",
        "text":"请选择起点"
    },
    {
        "value":"请选择终点",
        "text":"请选择终点"
    }
];
start.unshift(selectOne[0]);
end.unshift(selectOne[1]);

var url = "http://192.168.9.101/quan";
var src = "";
var bot;

//去重；
Array.prototype.distinct = function (){
    var arr = this,
        len = arr.length;
    arr.sort(function(a,b){  //对数组进行排序才能方便比较
        return a - b;
    });
    function loop(index){
        if(index >= 1){
            if(arr[index] === arr[index-1]){
                arr.splice(index,1);
            }
            loop(index - 1); //递归loop函数进行去重
        }
    }
    loop(len-1);
    return arr;
};

var data,site = [];
data = [{"id":"3","cat_id":"2","start_position":"\u5b89\u5168\u4f53\u9a8c\u6559\u5ba4","end_position":"\u56fe\u4e66\u9986","vr_url":"http:\/\/720yun.com\/t\/4drgyq6dy51rg98o1w","vr_desc":"\u51fa\u95e8\u5411\u53f3\u524d\u65b9\u884c\u8d70100\u7c73  \u5230\u8fbe\u76ee\u7684\u5730"},{"id":"4","cat_id":"2","start_position":"\u5b89\u5168\u4f53\u9a8c\u6559\u5ba4","end_position":"\u5c0f\u5267\u573a","vr_url":"http:\/\/720yun.com\/t\/4drgyq6dy51rg98o1w","vr_desc":"\u51fa\u95e8\u5411\u53f3\u524d\u65b9\u884c\u8d70100\u7c73\u5230\u8fbe\u56fe\u4e66\u9986  \u518d\u5411\u53f3\u8f6c\u884c\u8d70200\u7c73\u5230\u8fbe\u7ec8\u70b9"},{"id":"5","cat_id":"2","start_position":"\u56fe\u4e66\u9986","end_position":"\u5b89\u5168\u4f53\u9a8c\u6559\u5ba4","vr_url":"http:\/\/720yun.com\/t\/noejqr88z2fyq2w9ha","vr_desc":""},{"id":"6","cat_id":"2","start_position":"\u56fe\u4e66\u9986","end_position":"\u5c0f\u5267\u573a","vr_url":"http:\/\/720yun.com\/t\/noejqr88z2fyq2w9ha","vr_desc":""},{"id":"7","cat_id":"2","start_position":"\u5c0f\u5267\u573a","end_position":"\u5b89\u5168\u4f53\u9a8c\u6559\u5ba4","vr_url":"http:\/\/720yun.com\/t\/gae57227n8s6wln719","vr_desc":""},{"id":"8","cat_id":"2","start_position":"\u5c0f\u5267\u573a","end_position":"\u56fe\u4e66\u9986","vr_url":"http:\/\/720yun.com\/t\/gae57227n8s6wln719","vr_desc":""}];

screeningSite(data);


// 筛选出地点,渲染起点,选中起点，渲染终点；
function screeningSite(data) {
    site = [];
    for (var i=0; i<data.length; i++){
        if(site.indexOf(data[i].start_position)){
            site.push(data[i].start_position);
        }
    }
    site = site.distinct();
    site.unshift(selectOne[0].value);
    selectFun(site,"start","0");
    // 某些浏览器自动选择了有效的第一条，so，先自动执行一下终点下拉框，免得为空数据；
    endSelect(el("#start"));
    el("#start").onchange = function () {
        endSelect(this);
    };
}

//点击搜索；
$("#searchBtn").click(function (e) {
    var is = true;
    var siteArr = [];
    $("select").each(function (index) {
        if(!$(this).val()){
            is = false;
            return false;
        }
        siteArr.push($(this).val());
    });
    if(is){
        // console.log( siteArr,data );
        for (var i=0; i<data.length; i++){
            if(siteArr[0]==data[i].start_position && siteArr[1]==data[i].end_position){
                src = el("#fullView").src = data[i].vr_url;
                // el(".tips p").innerHTML = data[i].vr_desc;
                el(".tipsLi").innerHTML = data[i].vr_desc;
                // setTimeout(function () {
                //     $(".tips").css({"display":"block"});
                // },1000);
                break;
            }
        }
    }
    setZero();
});

var tipIs = true;
// $(".tips").click(function () {
//     if(tipIs){
//         $(this).animate({"bottom":"-" +this.offsetHeight + "px"});
//     }else {
//         if(!$(".icon").is(":hidden")){
//             $(".tips").animate({"bottom":"20px"});
//         }else{
//             setTipSite();
//         }
//     }
//     tipIs = !tipIs;
// });
//点击返回；
el("#back").onclick = function () {
    if(src){
        el("#fullView").src = src;
    }
};

//渲染终点下拉框；
function endSelect(_this) {
    var endSite = site.slice();
    endSite[0] = "请选择终点";
    // console.log(this.value,endSite);
    for (var i=0; i<endSite.length; i++){
        if(endSite[i] == _this.value){
            endSite.remove(endSite[i]);
            selectFun(endSite,"end","1");
        }
    }
}

//数据获取模板；
function getData(id,fun) {
    $.get(url+id,function (result) {
        fun(result) ;
    });
}

//创建下拉框；
function selectFun(start,setId,nub) {
    var startSelect = createSelect(start);
    startSelect.id = setId;
    startSelect.name = setId;
    startSelect.options[0].disabled = "disabled";
    els(".searchUl li")[nub].innerHTML = "";
    els(".searchUl li")[nub].appendChild( startSelect );
}

//隐藏搜索框；
$(".close").click(function () {
    $(".search").animate({"left":"-50%"});
    bot = el(".close").getBoundingClientRect().bottom-32;
    setTimeout(function () {
        $(".icon").css({"top":bot+"px","display":"block"}).animate({"left":"0%"});
    },500);
    // var tipsH = "-"+el(".tips").offsetHeight+"px";
    //console.log(tipsH);
    // if( $(".tips").css("bottom") != tipsH ){
    //     $(".tips").animate({"bottom":"20px"});
    // }
});
//显示搜索框；
$(".icon").click(function () {
    $(this).animate({"left":"-10%"}).css({"display":"none"});
    $(".search").animate({"left":"50%"});

    // var tipsH = "-"+el(".tips").offsetHeight+"px";
    //console.log(tipsH);
    // if( $(".tips").css("bottom") != tipsH ){
    //     setTipSite();
    // }
});

//tip 位置；
function setTipSite() {
    var screenW = document.body.offsetWidth;
    var screenH = document.body.offsetHeight;
    bot = el(".close").getBoundingClientRect().bottom-32;
    // console.log(screenW);
    if(screenW <= "768"){
        $(".tips").animate({"bottom":screenH-bot + "px"});
    }else {
        $(".tips").animate({"bottom":"20px"});
    }
}
$(window).resize(function () {
    // setTipSite();
    $(".icon").animate({"top":bot+"px"});
    var screenH = document.body.offsetHeight;

    alert($(document).scrollTop(0))
});

$("select").each(function () {
    $(this).click(function () {
        // setTimeout(function () {
        //     var stop = $(document).scrollTop();
        //     // alert($(document).scrollTop());
        //     $(document).scrollTop(stop);
        // },500);
        // var bodyH = document.body.offsetHeight + 30;
        $("#fullView").css({"bottom":"-30px","position":"absolute"});
        setZero();
    })
});
setZero();
function setZero() {
    var timer = setInterval(function () {
        var stop = $(document).scrollTop();
        stop = stop >=0?stop:-stop;
        console.log(stop);
        if(stop < 20){
            $("#fullView").css({"bottom":"0px","position":"relative"});
            $(document).scrollTop(0);
            clearInterval(timer);
        }
    },500);
}


document.addEventListener("DOMContentLoaded", ready, false);
document.addEventListener("touchmove", function(evt){
    console.log("document.touchmove");
    evt.preventDefault();
}, false);

function ready(){
    var container = document.getElementsByClassName("scollpane")[0];
    var subcontainer = container.children[0];
    var subsubcontainer = container.children[0].children[0];

    container.addEventListener("touchmove", function(evt){
        if(subsubcontainer.getBoundingClientRect().height > subcontainer.getBoundingClientRect().height){
            evt.stopPropagation();
        }
    }, false);
}




