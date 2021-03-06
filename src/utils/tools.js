const _ = {
  getNextTime(start, days) {
    let now = new Date(new Date(start.replace(/-/g, '/')).getTime() + days * 24 * 3600 * 1000)
    return now.getFullYear() + '-' + _.addZero(now.getMonth() + 1) + '-' + _.addZero(now.getDate())
  },
  getToday() {
    let now = new Date()
    return now.getFullYear() + '-' + _.addZero(now.getMonth() + 1) + '-' + _.addZero(now.getDate())
  },
  addZero(n) {
    return n.toString()[1] ? n : '0' + n
  },
  getDate(n) {
    return n.slice(0, 10)
  },
  timeDir(data) {
    let today = new Date()
    let time = new Date(data.replace(/-/g, '/'))
    let dir = today.getTime() - time.getTime()
    let num = 24 * 3600 * 1000
    if (dir > 0) {
      if (dir > num) {
        // alert("不是今天的过去时间")
        return 1
      } else if (today.getDate() !== time.getDate()) {
        // alert("不是今天的过去时间")
        return 1
      } else {
        // alert("是今天里的过去时间")
        return 3
      }
    } else if (dir < 0) {
      // alert("是未来时间")
      return 2
    } else {
      // alert("是现在")
      return 3
    }
  },
  cpTime(x, y) {
    let arr1 = x.split(':')
    let arr2 = y.split(':')
    if (parseInt(arr1[0]) > parseInt(arr2[0])) {
      return false
    } else if (parseInt(arr1[0]) === parseInt(arr2[0]) && parseInt(arr1[1]) >= parseInt(arr2[1])) {
      return false
    } else {
      return true
    }
  },
  random(Min, Max) {
    var Range = Max - Min
    var Rand = Math.random()
    return (Min + Math.round(Rand * Range))
  },
  getDateDiff(startDate, endDate) {
    let startTime = new Date(startDate.replace(/-/g, '/')).getTime()
    let endTime = new Date(endDate.replace(/-/g, '/')).getTime()
    let dates = (endTime - startTime) / (1000 * 60 * 60 * 24)
    return dates
  }
}
export default _
