import Vue from 'vue'
import md5 from "../js/md5";
Vue.use(md5);


var url  = '/api/',
  version = '4.0.1',
  timestamp = new Date().getTime();

//获取cookie
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  // console.log("获取cookie,现在循环")
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    // console.log(c);
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) != -1){
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// 发起网络请求的方法封装；
function getDataPackage(link ,data , suc , fai , com) {

  var json_data = object_to_json(data),
    sign = getAccessSign(json_data)
    ,dataS = WeiXinRequestData(json_data, sign);


  // let param = new URLSearchParams();
  // param.append('data', json_data);
  // param.append('sign', sign);
  // param.append('version', version);
  // param.append('mobile', '网页');
  // param.append('from', 'pc');
  // param.append('timestamp', timestamp);

  // _this.$axios({
  //   method: 'post',
  //   url:url + link,
  //   data:'data='+ json_data + '&sign=' + sign +'&version='+version+'&mobile=12&from=pc&timestamp='+timestamp
  // }).then(data =>{
  //   console.log(data);
  // })



  // 携带的参数；
  let myData = new FormData();
  var tok = getCookie('token');

  myData.append('data', json_data);
  myData.append('sign', sign);
  myData.append('version', version);
  myData.append('mobile', '网页');
  myData.append('from', 'pc');
  myData.append('timestamp', timestamp);
  myData.append('token', tok);

  fetch( url + link , {
    method: 'POST',
    headers: {},
    body: myData
  }).then((response) => {
    // if (response.ok) {
      return response.json();
    // }
  }).then( (json) => {
    // console.log(json)
    suc(json);
  }).catch((error) => {
    console.error(error)
  })



}


// 发起网络请求时 数据封装;
function WeiXinRequestData(data, sign) {

  // 数据、密钥、版本号、时间戳;
  return {
    "data": data,
    "sign": sign,
    "version": version,
    "mobile": 'xiaochengxu',
    "from": 'pc',
    "timestamp": timestamp,
  };
}


// 获取api访问的data的sign
function getAccessSign(information){
  var ENCRYPTION_KEY = "HTTP/xiao:qi[hui]/@)!*1204@)!(987654321";

  // var md5 = require('md5.js');
  // 加密转成小写
  return md5.md5(version + ENCRYPTION_KEY + information).toLowerCase();
}

// 对象转json字符串
function object_to_json(obj){
  return JSON.stringify(obj);
}


// module.exports = {
export default{
  getDataPackage: getDataPackage,
  WeiXinRequestData: WeiXinRequestData,
  getAccessSign: getAccessSign
};
