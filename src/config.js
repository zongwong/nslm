const env = 'production'

const hosts = {
  development: 'http://lady.zdgphp.cn',
  production: 'http://lady.zdgphp.cn'
}

// api列表
const api = {
  users: {
    login: {
      method: 'get',
      url: '/users/login'
    }
  },
  login: {
    url: '/1'
  }
}
// 递归处理url
const disposeUrl = (obj, preUrl) => {
  Object.keys(obj).forEach((key, index) => {
    if (obj[key].url) {
      obj[key].url = preUrl + obj[key].url
    } else {
      disposeUrl(obj[key], preUrl)
    }
  })
  return obj
}

export default disposeUrl(api, hosts[env])
