


// 单个元素；
function el(nub) {
    return document.querySelector(nub);
}

// 多个元素；
function els(nub) {
    return document.querySelectorAll(nub);
}

// 补0；
function addZero(nub) {
    return nub > 9 ? nub : '0' + nub;
}

// 判断是否有此class；
function hasClass(ele,cls) {
    return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}

var isPlay = true;
//视频播放、暂停；
function videoPlay(thi) {
    var video = thi.find("video")[0];
    if(isPlay){
        video.play();
        video.parentNode.classList.add("active");
    }else {
        video.pause();
        video.parentNode.classList.remove("active");
    }
    isPlay = !isPlay;
    video.onended = function () {
        this.parentNode.classList.remove("active");
        isPlay = true;
    };
}

//视频暂停；
function videoPause() {
    var videoS = els(".video video");
    for (var i=0; i<videoS.length; i++) {
        var videoSP = videoS[i].parentNode;
        isPlay = true;
        videoSP.classList.remove("active");
        videoS[i].pause();
    }
}

var startx, starty;

//获得角度
function getAngle(angx, angy) {
    return Math.atan2(angy, angx) * 180 / Math.PI;
}

//根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
function getDirection(startx, starty, endx, endy) {
    var angx = endx - startx;
    var angy = endy - starty;
    var result = 0;

    //如果滑动距离太短
    if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
        return result;
    }

    var angle = getAngle(angx, angy);
    if (angle >= -135 && angle <= -45) {
        result = 1;
    } else if (angle > 45 && angle < 135) {
        result = 2;
    } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
        result = 3;
    } else if (angle >= -45 && angle <= 45) {
        result = 4;
    }

    return result;
}

//监听移动函数；
function touchMove(el,touch,fun) {
    //手指接触屏幕;
    el.addEventListener("touchstart", function(e) {
        startx = e.touches[0].pageX;
        starty = e.touches[0].pageY;
    }, false);
    //手指屏幕移动
    el.addEventListener(touch, fun, false);
}

//返回移动方向；
function moveSite(e) {
    var endx, endy;
    endx = e.changedTouches[0].pageX;
    endy = e.changedTouches[0].pageY;
    var direction = getDirection(startx, starty, endx, endy);

    switch (direction) {
        case 0:
            console.log("未滑动！");
            var last = ["d",startx,starty,endx,endy];
            return last;
            break;
        case 1:
            console.log("向上！");
            var last = ["t",startx,starty,endx,endy];
            return last;
            break;
        case 2:
            console.log("向下！");
            var last = ["b",startx,starty,endx,endy];
            return last;
            break;
        case 3:
            console.log("向左！");
            var last = ["l",startx,starty,endx,endy];
            return last;
            break;
        case 4:
            console.log("向右！");
            var last = ["r",startx,starty,endx,endy];
            return last;
            break;
        default:
    }
}

// 设置cookies
function setCookie(name,value){
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString()+";path=/";
}

//读取cookies
function getCookie(name){
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

//删除cookies
function delCookie(name){
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}
