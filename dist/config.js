'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var env = 'development';

var hosts = {
  development: 'http://lady.zdgphp.cn/api',
  production: 'http://lady.zdgphp.cn/api'

  // api列表
};var api = {
  users: {
    // 用户登录
    login: {
      method: 'post',
      url: '/users/login'
    },
    // 编辑资料
    edit: {
      method: 'post',
      url: '/users/editUserInfo'
    },
    // 获取用户资料
    get: {
      method: 'post',
      url: '/users/userInfo'
    },
    // 我的发布
    mypublish: {
      method: 'post',
      url: '/users/myActivity'
      // 我的发布
      // mypublish: {
      //   method: 'post',
      //   url: '/users/myActivity'
      // }
    } },
  activity: {
    // 首页活动列表
    list: {
      method: 'post',
      url: '/activity/activityList'
    },
    // 创建活动
    add: {
      method: 'post',
      url: '/activity/activityAdd'
    },
    // 活动详情
    info: {
      method: 'post',
      url: '/activity/activityShow'
    },
    // 参加活动
    join: {
      method: 'post',
      url: '/activity/activityJoin'
    },
    // 打卡
    sign: {
      method: 'post',
      url: '/activity/clock'
    },
    // 打卡圈
    circle: {
      method: 'post',
      url: '/activity/clockCircle'
    },
    // 我的打卡进度
    myprogress: {
      method: 'post',
      url: '/activity/clockMy'
    }
  },
  public: {
    // 上传图片
    upload: {
      method: 'post',
      url: '/public/uploadImg'
    },
    // 全局数据
    global: {
      method: 'post',
      url: '/public/globalData'
    }
  }
  // 递归处理url
};var disposeUrl = function disposeUrl(obj, preUrl) {
  Object.keys(obj).forEach(function (key, index) {
    if (obj[key].url) {
      obj[key].url = preUrl + obj[key].url;
    } else {
      disposeUrl(obj[key], preUrl);
    }
  });
  return obj;
};

exports.default = disposeUrl(api, hosts[env]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJlbnYiLCJob3N0cyIsImRldmVsb3BtZW50IiwicHJvZHVjdGlvbiIsImFwaSIsInVzZXJzIiwibG9naW4iLCJtZXRob2QiLCJ1cmwiLCJlZGl0IiwiZ2V0IiwibXlwdWJsaXNoIiwiYWN0aXZpdHkiLCJsaXN0IiwiYWRkIiwiaW5mbyIsImpvaW4iLCJzaWduIiwiY2lyY2xlIiwibXlwcm9ncmVzcyIsInB1YmxpYyIsInVwbG9hZCIsImdsb2JhbCIsImRpc3Bvc2VVcmwiLCJvYmoiLCJwcmVVcmwiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU1BLE1BQU0sYUFBWjs7QUFFQSxJQUFNQyxRQUFRO0FBQ1pDLGVBQWEsMkJBREQ7QUFFWkMsY0FBWTs7QUFHZDtBQUxjLENBQWQsQ0FNQSxJQUFNQyxNQUFNO0FBQ1ZDLFNBQU87QUFDTDtBQUNBQyxXQUFPO0FBQ0xDLGNBQVEsTUFESDtBQUVMQyxXQUFLO0FBRkEsS0FGRjtBQU1MO0FBQ0FDLFVBQU07QUFDSkYsY0FBUSxNQURKO0FBRUpDLFdBQUs7QUFGRCxLQVBEO0FBV0w7QUFDQUUsU0FBSztBQUNISCxjQUFRLE1BREw7QUFFSEMsV0FBSztBQUZGLEtBWkE7QUFnQkw7QUFDQUcsZUFBVztBQUNUSixjQUFRLE1BREM7QUFFVEMsV0FBSztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSVyxLQWpCTixFQURHO0FBNEJWSSxZQUFVO0FBQ1I7QUFDQUMsVUFBTTtBQUNKTixjQUFRLE1BREo7QUFFSkMsV0FBSztBQUZELEtBRkU7QUFNUjtBQUNBTSxTQUFLO0FBQ0hQLGNBQVEsTUFETDtBQUVIQyxXQUFLO0FBRkYsS0FQRztBQVdSO0FBQ0FPLFVBQU07QUFDSlIsY0FBUSxNQURKO0FBRUpDLFdBQUs7QUFGRCxLQVpFO0FBZ0JSO0FBQ0FRLFVBQU07QUFDSlQsY0FBUSxNQURKO0FBRUpDLFdBQUs7QUFGRCxLQWpCRTtBQXFCUjtBQUNBUyxVQUFNO0FBQ0pWLGNBQVEsTUFESjtBQUVKQyxXQUFLO0FBRkQsS0F0QkU7QUEwQlI7QUFDQVUsWUFBUTtBQUNOWCxjQUFRLE1BREY7QUFFTkMsV0FBSztBQUZDLEtBM0JBO0FBK0JSO0FBQ0FXLGdCQUFZO0FBQ1ZaLGNBQVEsTUFERTtBQUVWQyxXQUFLO0FBRks7QUFoQ0osR0E1QkE7QUFpRVZZLFVBQVE7QUFDTjtBQUNBQyxZQUFRO0FBQ05kLGNBQVEsTUFERjtBQUVOQyxXQUFLO0FBRkMsS0FGRjtBQU1OO0FBQ0FjLFlBQVE7QUFDTmYsY0FBUSxNQURGO0FBRU5DLFdBQUs7QUFGQztBQVBGO0FBYVY7QUE5RVksQ0FBWixDQStFQSxJQUFNZSxhQUFhLFNBQWJBLFVBQWEsQ0FBQ0MsR0FBRCxFQUFNQyxNQUFOLEVBQWlCO0FBQ2xDQyxTQUFPQyxJQUFQLENBQVlILEdBQVosRUFBaUJJLE9BQWpCLENBQXlCLFVBQUNDLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUN2QyxRQUFJTixJQUFJSyxHQUFKLEVBQVNyQixHQUFiLEVBQWtCO0FBQ2hCZ0IsVUFBSUssR0FBSixFQUFTckIsR0FBVCxHQUFlaUIsU0FBU0QsSUFBSUssR0FBSixFQUFTckIsR0FBakM7QUFDRCxLQUZELE1BRU87QUFDTGUsaUJBQVdDLElBQUlLLEdBQUosQ0FBWCxFQUFxQkosTUFBckI7QUFDRDtBQUNGLEdBTkQ7QUFPQSxTQUFPRCxHQUFQO0FBQ0QsQ0FURDs7a0JBV2VELFdBQVduQixHQUFYLEVBQWdCSCxNQUFNRCxHQUFOLENBQWhCLEMiLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZW52ID0gJ2RldmVsb3BtZW50J1xyXG5cclxuY29uc3QgaG9zdHMgPSB7XHJcbiAgZGV2ZWxvcG1lbnQ6ICdodHRwOi8vbGFkeS56ZGdwaHAuY24vYXBpJyxcclxuICBwcm9kdWN0aW9uOiAnaHR0cDovL2xhZHkuemRncGhwLmNuL2FwaSdcclxufVxyXG5cclxuLy8gYXBp5YiX6KGoXHJcbmNvbnN0IGFwaSA9IHtcclxuICB1c2Vyczoge1xyXG4gICAgLy8g55So5oi355m75b2VXHJcbiAgICBsb2dpbjoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL3VzZXJzL2xvZ2luJ1xyXG4gICAgfSxcclxuICAgIC8vIOe8lui+kei1hOaWmVxyXG4gICAgZWRpdDoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL3VzZXJzL2VkaXRVc2VySW5mbydcclxuICAgIH0sXHJcbiAgICAvLyDojrflj5bnlKjmiLfotYTmlplcclxuICAgIGdldDoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL3VzZXJzL3VzZXJJbmZvJ1xyXG4gICAgfSxcclxuICAgIC8vIOaIkeeahOWPkeW4g1xyXG4gICAgbXlwdWJsaXNoOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvdXNlcnMvbXlBY3Rpdml0eSdcclxuICAgIH1cclxuICAgIC8vIOaIkeeahOWPkeW4g1xyXG4gICAgLy8gbXlwdWJsaXNoOiB7XHJcbiAgICAvLyAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgLy8gICB1cmw6ICcvdXNlcnMvbXlBY3Rpdml0eSdcclxuICAgIC8vIH1cclxuICB9LFxyXG4gIGFjdGl2aXR5OiB7XHJcbiAgICAvLyDpppbpobXmtLvliqjliJfooahcclxuICAgIGxpc3Q6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY3Rpdml0eS9hY3Rpdml0eUxpc3QnXHJcbiAgICB9LFxyXG4gICAgLy8g5Yib5bu65rS75YqoXHJcbiAgICBhZGQ6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY3Rpdml0eS9hY3Rpdml0eUFkZCdcclxuICAgIH0sXHJcbiAgICAvLyDmtLvliqjor6bmg4VcclxuICAgIGluZm86IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY3Rpdml0eS9hY3Rpdml0eVNob3cnXHJcbiAgICB9LFxyXG4gICAgLy8g5Y+C5Yqg5rS75YqoXHJcbiAgICBqb2luOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWN0aXZpdHkvYWN0aXZpdHlKb2luJ1xyXG4gICAgfSxcclxuICAgIC8vIOaJk+WNoVxyXG4gICAgc2lnbjoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2Nsb2NrJ1xyXG4gICAgfSxcclxuICAgIC8vIOaJk+WNoeWciFxyXG4gICAgY2lyY2xlOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWN0aXZpdHkvY2xvY2tDaXJjbGUnXHJcbiAgICB9LFxyXG4gICAgLy8g5oiR55qE5omT5Y2h6L+b5bqmXHJcbiAgICBteXByb2dyZXNzOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWN0aXZpdHkvY2xvY2tNeSdcclxuICAgIH1cclxuICB9LFxyXG4gIHB1YmxpYzoge1xyXG4gICAgLy8g5LiK5Lyg5Zu+54mHXHJcbiAgICB1cGxvYWQ6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9wdWJsaWMvdXBsb2FkSW1nJ1xyXG4gICAgfSxcclxuICAgIC8vIOWFqOWxgOaVsOaNrlxyXG4gICAgZ2xvYmFsOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvcHVibGljL2dsb2JhbERhdGEnXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi8vIOmAkuW9kuWkhOeQhnVybFxyXG5jb25zdCBkaXNwb3NlVXJsID0gKG9iaiwgcHJlVXJsKSA9PiB7XHJcbiAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XHJcbiAgICBpZiAob2JqW2tleV0udXJsKSB7XHJcbiAgICAgIG9ialtrZXldLnVybCA9IHByZVVybCArIG9ialtrZXldLnVybFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGlzcG9zZVVybChvYmpba2V5XSwgcHJlVXJsKVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIG9ialxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwb3NlVXJsKGFwaSwgaG9zdHNbZW52XSlcclxuIl19