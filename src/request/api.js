    // 改文件做参考文档用！！！


import axios from 'axios';
import utils from "_libs/utils";
import {
  Toast,
  Dialog
} from 'cube-ui';
import Vue from 'vue';
Vue.use(Toast);
Vue.use(Dialog);

// const api = 'http://192.168.31.186:8089';//开发
// const apiHome = 'http://192.168.31.122:8181';//开发
// const api = 'http://172.31.1.179:8080';//测试
// const apiHome = 'http://172.31.1.179:8181';//测试
// const api = process.env.NODE_ENV == 'development' ? 'http://192.168.31.186:8089' : 'http://172.31.1.179:8080';//测试
// const apiHome = process.env.NODE_ENV == 'development' ? 'http://192.168.31.122:8181' : 'http://172.31.1.179:8181';//测试
const apiTest = 'https://www.easy-mock.com/mock/5c9f8120e4186562cc16569a';
const apiBaseUrl = '/FamilyJava';//基础路径 /FamilyAccount
const commonUrl = '/FamilyJava/client/common';//接口路径-账号模块
const entryUrl = '/FamilyJava/client/entry';//接口路径-出入模块
const communityUrl = '/FamilyJava/client/community';//接口路径-社区模块
const comUrl = '/FamilyJava/client/com';//接口路径-省市区街道模块
const hAreaUrl = '/family/server/area';//接口路径-我家区域模块
const hCommonUrl = '/family/server/common';//接口路径-我家区域模块
const machineUrl = '/family/server/machine';//接口路径-主机模块
const alertMessageUrl = '/family/server/alertMessage';//接口路径-报警模块
const maintainMessageUrl = '/family/server/maintainMessage';//接口路径-维保模块
const aMMessageAmassUrl = '/family/server/aMMessageAmass';//接口路径-消息汇总模块
const cameraUrl = '/family/server/camera';//接口路径-消息汇总模块
const commonUrlTest = '/family/client/common';//接口路径-账号模块
const entryUrlTest = '/family/client/entry';//接口路径-出入模块
const apiModuleUrl = ['/common','/entry'];//模块-账号、出入
const toast = Toast.$create({
  txt: '请稍后...',
  type: 'loading',
  time: 3000,
  mask: true
})

//http request 拦截器
// axios.interceptors.request.use(
//   config => {
//     // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
//     let token;
//     try {
//       token = CYJ.cookie()
//     } catch (e) {
//       token = null;
//     }
//     // config.data = JSON.stringify(config.data);
//     config.headers = {
//       // 'Content-Type': 'application/json'
//       // 'Content-Type': 'multipart/form-data'
//       'Content-Type': 'application/x-www-form-urlencoded'
//     }
//     if (token) {
//       config.params = {
//         'token': token
//       }
//     } else {
//
//     }
//     //toast.hide()
//     return config;
//   },
//   error => {
//     // console.table(error)
//     return Promise.reject(error)
//   }
// );

//http 全局默认配置
axios.defaults.timeout = 10000;
// axios.defaults.baseURL = '';
// axios.defaults.headers.origin = process.env.VUE_APP_Origin;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = [function (data) {
  let ret = '';
  for (let it in data) {
    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
  }
  return ret
}];

//http response 拦截器
axios.interceptors.response.use(
  response => {
    // console.log(response);
    if (response.data && response.data.errors) {
      const dialog = Dialog.$create({
        type: 'alert',
        title: `错误代码: ${String(response.data.errors[0].status)||'xxx'}`,
        content: response.data.errors[0].msg,
        icon: ''
      }).show()
    }
    return response;
  }, error => {
    // console.table(error);
    let message;
    if (error.response && error.response.status) {
      switch (error.response.status) {
        case 400:
          message = '请求错误(400)';
          break;
        case 401:
          message = '未授权，请重新登录(401)';
          break;
        case 403:
          message = '拒绝访问(403)';
          break;
        case 404:
          message = '请求出错(404)';
          break;
        case 408:
          message = '请求超时(408)';
          break;
        case 500:
          message = '服务器错误(500)';
          break;
        case 501:
          message = '找不到请求类型(501)';
          break;
        case 502:
          message = '网络错误(502)';
          break;
        case 503:
          message = '服务不可用(503)';
          break;
        case 504:
          message = '网络超时(504)';
          break;
        case 505:
          message = 'HTTP版本不受支持(505)';
          break;
        default:
          message = `${error}!`;
      }
    } else {
      // message = error+"出现了一个错误,请稍后再试！"
      message = "网络超时，请稍后再试！"
    }
    const dialog = Dialog.$create({
      type: 'alert',
      title: '网络故障',
      content: message,
      icon: 'fa fa-times-circle-o'
    }).show()
    return Promise.reject(error)
  }
)


/**
 * 封装get方法
 * @param data
 * @returns {Promise}
 */

export function fetch(params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(api, {
        params: params
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(portUrl, url, data = {}) {
  let mApi = {api: "",apiHome: ""};
  let mUrl = "", api = process.env.VUE_APP_ApiUrl, apiHome = process.env.VUE_APP_ApiHomeUrl;
  // switch (process.env.NODE_ENV) {
  //   case "development":
  //     mApi.api = "http://192.168.31.186:8089";//开发
  //     mApi.apiHome = "http://192.168.31.122:8181";//开发
  //     break;
  //   case "test":
  //     mApi.api = "http://172.31.1.179:8080";//测试
  //     mApi.apiHome = "http://172.31.1.179:8181";//测试
  //     break;
  //   case "production":
  //     mApi.api = "http://172.31.1.179:8080";//测试
  //     mApi.apiHome = "http://172.31.1.179:8181";//测试
  //     break;
  //   case "aaa":
  //     mApi.api = "http://192.168.31.186:8089";//开发
  //     mApi.apiHome = "http://192.168.31.122:8181";//开发
  //     break;
  //   default:
  //     break;
  // }
  // api = mApi.api;
  // apiHome = mApi.apiHome;

  switch (portUrl) {
    case "common":
      mUrl = api+commonUrl+url;
      break;
    case "entry":
      mUrl = api+entryUrl+url;
      break;
    case "community":
      mUrl = api+communityUrl+url;
      break;
    case "com":
      mUrl = api+comUrl+url;
      break;
    case "hArea":
      mUrl = apiHome+hAreaUrl+url;
      break;
    case "hCommon":
      mUrl = apiHome+hCommonUrl+url;
      break;
    case "machine":
      mUrl = apiHome+machineUrl+url;
      break;
    case "alertMessage":
      mUrl = apiHome+alertMessageUrl+url;
      break;
    case "maintainMessage":
      mUrl = apiHome+maintainMessageUrl+url;
      break;
    case "aMMessageAmass":
      mUrl = apiHome+aMMessageAmassUrl+url;
      break;
    case "camera":
      mUrl = apiHome+cameraUrl+url;
      break;

    default:
      break;
  }
  // switch (portUrl) {
  //   case "common":
  //     mUrl = api+commonUrlTest+url;
  //     break;
  //   case "entry":
  //     mUrl = api+entryUrlTest+url;
  //     break;
  //   default:
  //     break;
  // }
  // toast.show(mUrl);

  let mDate = new Date().getTime();
  return new Promise((resolve, reject) => {
    data.userid = CYJ.userID();
    data.timestamp = mDate;
    data.sign = CYJ.userSign(mDate);
    data.secret = CYJ.secret();
    data.appid = CYJ.appID();
    data.appsign = CYJ.appSign(mDate);

    axios.post(mUrl, data)

    // axios.post(api+apiBaseUrl+apiAppUrl+url, data)

    // data.userid = 'aX1WzfdweeKoGltpjP73TtG89GjNLy8A'
    // data.sign = 'aX1WzfdweeKoGltpjP73TtG89GjNLy8A';
    // data.timestamp = new Date().getTime();
    // data.secret = 'secretGU76kzWHgHiLjlE7Yr4mMC7T2qbjjzGk';
    // axios.post(apiTest+apiBaseUrlTest+apiAppUrl+url, data)
      .then(response => {
        // toast.hide();
        if (response.data.errorCode === 0) {
          resolve(response.data);
        } else if (response.data.errorCode === -1 || response.data.errorCode === -2) {
          this.$createDialog({
            type: 'confirm',
            icon: '',
            title: '确定要退出吗？',
            content: response.data.errorMsg,
            confirmBtn: {
              text: '确定',
              active: true,
              disabled: false,
              href: 'javascript:;'
            },
            cancelBtn: {
              text: '取消',
              active: false,
              disabled: false,
              href: 'javascript:;'
            },
            onConfirm: () => {
              utils.logout();
            },
            onCancel: () => {
              // this.$createToast({
              //   type: 'warn',
              //   time: 1000,
              //   txt: '点击取消按钮'
              // }).show()
            }
          }).show();
        } else {//1000是其它错误
          alert(response.data.errorMsg);
        }
      }, err => {
        // this.$createDialog({
        //   type: 'confirm',
        //   icon: '',
        //   title: '确定要退出吗？',
        //   content: err,
        //   confirmBtn: {
        //     text: '确定',
        //     active: true,
        //     disabled: false,
        //     href: 'javascript:;'
        //   },
        //   cancelBtn: {
        //     text: '取消',
        //     active: false,
        //     disabled: false,
        //     href: 'javascript:;'
        //   },
        //   onConfirm: () => {
        //     utils.logout();
        //   },
        //   onCancel: () => {
        //     reject(err);
        //   }
        // }).show();

        // process.env.NODE_ENV==='production'? utils.logout():reject(err);
      })
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(api, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(api, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}