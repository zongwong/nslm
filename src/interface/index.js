import wepy from 'wepy'
import api from '../config'
const interfaces = {
  // 获取用户信息
  async getUserInfo() {
    const {
      userInfo
    } = await wepy.getUserInfo()
    const {
      code
    } = await wepy.login()
    await wepy.setStorage({
      key: 'userInfo',
      data: userInfo
    })
    return {
      userInfo: userInfo,
      code: code
    }
  },
  // 登录
  async login() {
    let data = {}
    let userinfo = {}
    try {
      data = await interfaces.getUserInfo()
      userinfo = await wepy.request({
        url: api.users.login.url,
        data: data,
        method: api.users.login.method,
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        }
      })
      await wepy.setStorage({
        key: '_token',
        data: userinfo.data.info._token
      })
    } catch (e) {
      wx.showModal({
        title: '提示',
        content: `获取用户信息失败，请关闭重新进入。${e.message}`
      })
    }
  },
  // 上传图片
  async uploadImg() {
    const temp = await wepy.chooseImage()
    const {
      data
    } = await wepy.uploadFile({
      url: api.public.upload.url,
      filePath: temp.tempFilePaths[0],
      name: 'filename'
    })
    return data
  },
  // 支付
  async getPayinfo(data) {
    const res = await wepy.requestPayment({
      'timeStamp': data.timeStamp,
      'nonceStr': data.nonceStr,
      'package': data.package,
      'signType': 'MD5',
      'paySign': data.paySign
    })
    return res
  },
  // 剪贴板
  async copyText(data) {
    await wepy.setClipboardData({
      data: data
    })
    const res = await wepy.getClipboardData()
    if (res.data) {
      wepy.showToast({
        title: '复制成功'
      })
    }
    return res
  }
}
export default interfaces
