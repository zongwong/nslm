const _ = {
  getNextTime(start, days) {
    let now = new Date(new Date(start).getTime() + days * 24 * 3600 * 1000)
    return now.getFullYear() + '-' + _.addZero(now.getMonth() + 1) + '-' + _.addZero(now.getDate())
  },
  addZero(n) {
    return n.toString()[1] ? n : '0' + n
  },
  getDate(n) {
    return n.slice(0, 10)
  },
  timeDir(data) {
    let today = new Date().getTime()
    let time = new Date(data).getTime()
    let dir = today - time
    if (dir > 0 && dir < 24 * 3600 * 1000) {
      return 1
    } else if (dir < 0) {
      return 2
    } else {
      return 3
    }
  }
}
export default _
