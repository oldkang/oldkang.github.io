

//=========================定制===========================

var overscroll = function(el) {
    el.addEventListener('touchstart', function() {
        var top = el.scrollTop
            ,totalScroll = el.scrollHeight
            ,currentScroll = top + el.offsetHeight;
        if(top === 0) {
            el.scrollTop = 1;
        }else if(currentScroll === totalScroll) {
            el.scrollTop = top - 1;
        }
    });

    el.addEventListener('touchmove', function(evt) {
        if(el.offsetHeight < el.scrollHeight)
            evt._isScroller = true;
    });
};

overscroll(document.querySelector('.scroll'));
document.body.addEventListener('touchmove', function(evt) {
    if(!evt._isScroller) {
        evt.preventDefault();
    }
});

$(document).ready(function(){
    function stopScrolling( touchEvent ) {
        touchEvent.preventDefault();
    }
    document.addEventListener( 'touchstart' , stopScrolling , false );
    document.addEventListener( 'touchmove' , stopScrolling , false );
});


//=========================公用===========================

//创建下拉框；
function createSelect(arr) {
    var select = document.createElement("select");
    for (var i=0; i<arr.length; i++){
        //兼容IE与firefox;
        select.options.add(new Option(arr[i],arr[i]));
    }
    return select;
}
//单个元素；
function el(nub) {
    return document.querySelector(nub);
}
//多个元素；
function els(nub) {
    return document.querySelectorAll(nub);
}

Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};
Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};