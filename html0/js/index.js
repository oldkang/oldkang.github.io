
// 规则 高度设置；
function setGz() {
    var bodyH = $(document.body).width();
    var cT = el(".c").getBoundingClientRect().top;
    var bT = el(".b").getBoundingClientRect().top;
    el(".c").style.height = bT-cT+2+"px";
    console.log(bodyH,cT,bT);
}

setGz();



//从左到右；
function goR(cla,nubl,nubt,fun) {
    var l = $(cla).css("left").replace("px","");
    var t = $(cla).css("top").replace("px","");
    //console.log(l,t);
    $(cla).css({"left":l-nubl + "px","top":t-nubt + "px"}).animate({"left":l + "px","top":t + "px","opacity":"1"},fun);
}
//从右到左；
function goL(cla,nubr,nubt,fun) {
    var l = $(cla).css("right").replace("px","");
    var t = $(cla).css("top").replace("px","");
    //console.log(l,t);
    $(cla).css({"right":l-nubr + "px","top":t-nubt + "px"}).animate({"right":l + "px","top":t + "px","opacity":"1"},fun);
}


//滑屏操作
document.addEventListener('touchstart', function(e) {
    e.preventDefault();
});
(function(){
    var wrap = document.querySelector('.wrap');
    var list = document.querySelector('.scroll');
    var start = {x:0,y:0};
    var startEl = {y:0};
    var lastSpeed = {y:0};
    var lastPoint = {y:0};
    var lastTime = 0;
    var maxDis = 2000;
    var maxTranslate = 0;
    var wrapH = css(wrap,"height");
    var minTranslate = wrapH - list.offsetHeight;
    var F = .3;//拉力系数
    var isMove = true;
    var isFrist = true;

    css(list,"translateY",0);
    css(list,"translateZ",0.01);
    wrap.addEventListener('touchstart', function(e) {
        clearInterval(list.timer);
        var touch = e.changedTouches[0];
        start.x = touch.pageX;
        lastPoint.y = start.y = touch.pageY;
        startEl.y = css(list,"translateY");
        lastSpeed = {y:0};
        lastTime = Date.now();
        minTranslate = css(wrap,"height") - list.offsetHeight;
        F = .93;
        isMove = true;
        isFrist = true;
    });
    wrap.addEventListener('touchmove', function(e) {
        if(!isMove){
            return;
        }
        var touch = e.changedTouches[0];
        var dis = {x:touch.pageX - start.x,y:touch.pageY - start.y};
        if(isFrist){//在第一次滑动的时候，判断用户是想左右滑动，还是想上下滑动
            isFrist = false;
            if(Math.abs(dis.x) > Math.abs(dis.y)){
                isMove = false;
                return
            }
        }
        var translate = dis.y + startEl.y;
        /* over距离越远，拉力越大，系数就应该越小 */
        if(translate > maxTranslate){
            var over = translate;
            F *= .93;
            translate *= F;
        } else if(translate < minTranslate) {
            var over = (translate - minTranslate);
            F *= .93;
            translate = minTranslate + over*F;
        }
        css(list,"translateY",translate);
        // 这一次和上一次的距离 touch.pageY - lastPoint.y
        //
        var nowTime = Date.now();
        //当前的时间戳和上一次时间戳的差值（总时间） nowTime - lastTime
        lastSpeed = (touch.pageY - lastPoint.y)/(nowTime-lastTime);
        //如果继续滑，这一次就变成了上一次
        lastTime = nowTime;
        lastPoint.y = touch.pageY;
    });
    wrap.addEventListener('touchend', function(e) {
        if(!isMove){
            return;
        }
        //抬起之后的滑动距离
        if(Date.now() - lastTime > 100){
            lastSpeed = 0;
        }
        var time = 150;//动画时间
        var dis = lastSpeed*time;//求出滑动距离
        /* 给 dis 活动出去的距离设置最大值*/
        dis = Math.abs(dis)>maxDis?maxDis*(dis/Math.abs(dis)):dis;
        dis = isNaN(dis)?0:dis;
        var target = dis + css(list,"translateY");
        var timeF = 2;//调节动画快慢
        var type = "easeOutStrong";
        if(target > maxTranslate){
            target = maxTranslate;
            type = "backOut";
        } else if(target < minTranslate) {
            target = minTranslate;
            type = "backOut";
        }
        //距离发生了变化，需要重新计算下时间
        time = Math.abs(target - css(list,"translateY"));
        time = time!=0&&time<200?200:time;
        startMove({
            el:list,
            target: {
                translateY:target
            },
            type: type,
            time: time*timeF
        });
    });
})();







