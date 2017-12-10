import wepy from 'wepy'
import api from '../config'
const interfaces = {
  async getUserInfo() {
    const {
      userInfo
    } = await wepy.getUserInfo()
    const {
      code
    } = await wepy.login()
    return {
      userInfo: userInfo,
      code: code
    }
  },
  async login() {
    const data = await interfaces.getUserInfo()
    const res = await wepy.request({
      url: api.users.login.url,
      data: data,
      method: api.users.login.method
    })
    console.log(res)
  }

}
export default interfaces
