import wepy from 'wepy'
import login from '../interface/login'
export default async function request(options, token) {
  if (options.method === 'post') {
    options.header = {
      'content-type': 'application/x-www-form-urlencoded'
    }
  }
  if (token) {
    options.data['_token'] = wepy.getStorageSync('_token')
  }
  let response = await wepy.request(options)
  if (response.statusCode === 500) {
    wepy.showModal({
      title: '提示',
      content: `服务器错误,${response.data.errmsg}`
    })
  } else if (response.data.msg === '请登录') {
    await login.login()
    return await request(options, true)
  } else {
    return response
  }
}
