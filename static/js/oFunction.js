// 对象转换成浏览器参数格式；
function obj2key(obj) {
	var h = '';
	Object.keys(obj).forEach(function(key) {
		h += (key + '=' + obj[key] + '&');
	});
	return h;
}

/**判断是否是手机号**/
function isPhoneNumber(tel) {
	var reg = /^0?1[3|4|5|6|7|8][0-9]\d{8}$/;
	return reg.test(tel);
}

// js复制
function copyFont(val) {
	var div = document.createElement("div");
	div.innerHTML = val;
	div.style.cssText = 'position:fixed;left:-9999px;top:-9999px;';
	el('body').appendChild(div);
	var range = document.createRange();
	range.selectNode(div);
	
	const selection = window.getSelection();
	// 移除选中的元素
	if (selection.rangeCount > 0) selection.removeAllRanges();
	selection.addRange(range);
	document.execCommand('Copy');
	var successful = document.execCommand('copy');
	if (successful) {
		creatFontPop('复制成功');
	} else {
		creatFontPop('复制失败');
	}
	setTimeout(function() {
		div.remove();
	}, 2000)
}

// 是否在微信内；
function isWx() {
	return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1
}

// 创建弹窗文字提示；
function creatFontPop(message) {
	var div = document.createElement('div');
	div.innerHTML =
		`<div style="position: fixed; left: 0; top: 0; right: 0; bottom: 0; display: flex; justify-content: center; align-items: center;z-index:100;"><b style=" background: rgba(0,0,0,.5); border-radius: 5px; padding: 10px 15px; color: #fff;"><span>${message}</span></b></div>`;
	el('body').appendChild(div)
	setTimeout(function() {
		div.remove();
	}, 2000)
}

//给自己添加active，删除同级的；
function removeAllAddSelf(el, className, all) {
	if (hasClass(el, className)) {
		return false;
	}
	var els = el.parentNode.querySelectorAll(all);
	for (var i = 0; i < els.length; i++) {
		els[i].classList.remove(className);
	}
	el.classList.add(className);
}

// 判断是否有此class；
function hasClass(ele, cls) {
	return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

// 手机类型区分；0:安卓；1：iOS；2：Pc;
function phoneType() {
	var u = navigator.userAgent;
	if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 || u.indexOf('SymbianOS') > -1 || u.indexOf('Windows Phone') >
		-1) { //安卓手机
		return 0;
	} else if (u.indexOf('iPhone') > -1 || u.indexOf('iPod') > -1 || u.indexOf('iPad') > -1) { //苹果手机/iPad
		return 1;
	} else {
		return 2;
	}
}

// 手机号检测
function checkPhone(val) {
	if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(val))) {
		return false;
	} else {
		return true;
	}
}

// 获取昨天日期；
function getYesterday() {
	var day1 = new Date();
	day1.setTime(day1.getTime() - 24 * 60 * 60 * 1000);
	var d = day1.getFullYear() + "/" + (day1.getMonth() + 1) + "/" + day1.getDate();
	return d;
}

// 获取明天日期；
function getTomorrow() {
	var day = new Date();
	day.setTime(day.getTime() + 24 * 60 * 60 * 1000);
	var d = day.getFullYear() + "/" + (day.getMonth() + 1) + "/" + day.getDate();
	return d;
}

// 秒 倒计时  countDown('.ck',10,function,{t:1}) // name 是全局定时器名称；
function countDown(id, time, callback, name) {
	var timer, el;
	if (typeof id == "object") {
		el = id
	} else {
		el = document.querySelector(id)
	};
	el.innerHTML = time + "s 重新获取";
	clearInterval(timer);
	timer = setInterval(function() {
		time--;
		if (time < 1) {
			clearInterval(timer);
			if (callback) callback();
		} else {
			el.innerHTML = time + "s 重新获取";
		}
	}, 1000);
	if (name) name.t = timer;
}

// 整个时间倒计时插件  countDownAll('.ck', '2020/12/12 00:00:00', function() {console.log('结束')});
function countDownAll(id, endDateStr, callback) {
	var timer,
		endDate = new Date(endDateStr) //结束时间
	;

	function getTime() {
		var nowDate = new Date(), //当前时间
			totalSeconds = parseInt((endDate - nowDate) / 1000), //相差的总秒数
			days = Math.floor(totalSeconds / (60 * 60 * 24)), //天数
			modulo = totalSeconds % (60 * 60 * 24), //取模（1天的余数）
			hours = addZero(Math.floor(modulo / (60 * 60))), //小时数
			minutes = addZero(Math.floor(modulo % (60 * 60) / 60)), //分钟
			seconds = addZero(modulo % 60); //秒
		//输出到页面
		if (days) {
			var timeList_html = '<span>' + days + '</span>天' + '<span>' + hours + '</span>时' + '<span>' + minutes +
				'</span>分' + '<span>' + seconds + '</span>秒';
		} else {
			var timeList_html = '<span>' + hours + '</span>时' + '<span>' + minutes +
				'</span>分' + '<span>' + seconds + '</span>秒';
		}
		el(id).innerHTML = timeList_html;
	}
	getTime();
	timer = setInterval(function() {
		getTime();
		if (new Date() > endDate) {
			clearInterval(timer);
			if (callback) callback();
		}
	}, 1000)
}

// 选中某个下拉框;
function chooseSelect(id, val) {
	var options = els(id + ' option');
	for (var i = 0, len = options.length; i < len; i++) {
		if (options[i].value == val) {
			options[i].selected = 'selected';
			return false;
		}
	}
}

// 创建下拉框；
function createSelect(arr, id) {
	var select = document.createElement("select");
	select.id = id;
	for (var i = 0; i < arr.length; i++) {
		//兼容IE与firefox;
		select.options.add(new Option(arr[i], arr[i]));
	}
	return select;
}

// 邮箱检测
function checkEmail(email) {
	let str = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
	if (str.test(email)) {
		return true
	} else {
		return false
	}
}

// js深度克隆
function clone(obj) {
	var newObj = null;
	if (typeof obj == "object" && obj !== 'null') {
		newObj = obj instanceof Array ? [] : {};
		for (var o in obj) {
			newObj[o] = clone(obj[o])
		}
	} else {
		newObj = obj;
	}
	return newObj;
}

// 随机生成不重复的数字，包含最小的，不包含最大的数字；
function randomNub(min, max, nub) {
	var arr = [];
	// 循环需要的个数；
	for (var i = 0; i < nub; i++) {
		createNub();
	}
	return arr;

	// 生成不重复的随机数；
	function createNub() {
		var n = Math.floor(Math.random() * (max - min) + min);
		if (arr.indexOf(n) == '-1') {
			arr[i] = n;
		} else {
			createNub();
		}
	}
}

// 获取地址栏key值；
function getUrlKey(name) {
	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1]
		.replace(/\+/g, '%20')) || null
}

// 补0；
function addZero(nub) {
	return nub > 9 ? nub : '0' + nub;
}

// 单个元素选择
function el(cla) {
	return document.querySelector(cla);
}

// 多个元素选择
function els(cla) {
	return document.querySelectorAll(cla);
}
