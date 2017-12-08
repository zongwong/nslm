import wepy from 'wepy'
import api from '../config'
const interfaces = {
  async getUserInfo() {
    const { userInfo } = await wepy.getUserInfo()
    const { code } = await wepy.login()
    userInfo.code = code
    return userInfo
  },
  async login() {
    const userInfo = await interfaces.getUserInfo()
  }

}
export default interfaces
