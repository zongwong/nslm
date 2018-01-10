import wepy from 'wepy'
import api from '../config'
const login = {
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
      userInfo: JSON.stringify(userInfo),
      code: code
    }
  },
  // 登录
  async login() {
    let data = {}
    let userinfo = {}
    try {
      data = await login.getUserInfo()
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
      console.log(userinfo)
    } catch (e) {
      wepy.showModal({
        title: '提示',
        content: `获取用户信息失败，请关闭重新进入。${e.message}`
      })
    }
  }
}
export default login
