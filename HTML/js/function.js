

//=========================定制===========================

// window.addEventListener('touchstart',function(e){e.preventDefault();});
window.addEventListener('touchmove',function(e){e.preventDefault();});


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