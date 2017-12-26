'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var env = 'production';

var hosts = {
  development: 'http://lady.zdgphp.cn/api',
  production: 'https://www.2p98.cn/api'

  // api列表
};var api = {
  users: {
    // 用户登录
    login: {
      method: 'post',
      url: '/users/login'
    },
    // 编辑资料
    save: {
      method: 'post',
      url: '/users/editUserInfo'
    },
    // 获取用户资料
    get: {
      method: 'post',
      url: '/users/userInfo'
    },
    // 我的发布
    publish: {
      method: 'post',
      url: '/users/myActivity'
    },
    // 我的参与
    join: {
      method: 'post',
      url: '/users/myJoinActivity'
    }
  },
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
    },
    // pk搜索
    search: {
      method: 'post',
      url: '/activity/activitySearch'
    },
    // share
    share: {
      method: 'post',
      url: '/activity/activityShare'
    }
  },
  course: {
    list: {
      url: '/study/studyTypeList',
      method: 'post'
    },
    clist: {
      url: '/study/studyList',
      method: 'post'
    },
    detail: {
      url: '/study/studyDetail',
      method: 'post'
    },
    // 收藏
    collect: {
      url: '/study/studyCollect',
      method: 'post'
    }
  },
  mood: {
    // 文章列表
    article: {
      url: '/article/articleList',
      method: 'post'
    },
    // 文章详情
    articledetail: {
      url: '/article/articleShow',
      method: 'post'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJlbnYiLCJob3N0cyIsImRldmVsb3BtZW50IiwicHJvZHVjdGlvbiIsImFwaSIsInVzZXJzIiwibG9naW4iLCJtZXRob2QiLCJ1cmwiLCJzYXZlIiwiZ2V0IiwicHVibGlzaCIsImpvaW4iLCJhY3Rpdml0eSIsImxpc3QiLCJhZGQiLCJpbmZvIiwic2lnbiIsImNpcmNsZSIsIm15cHJvZ3Jlc3MiLCJzZWFyY2giLCJzaGFyZSIsImNvdXJzZSIsImNsaXN0IiwiZGV0YWlsIiwiY29sbGVjdCIsIm1vb2QiLCJhcnRpY2xlIiwiYXJ0aWNsZWRldGFpbCIsInB1YmxpYyIsInVwbG9hZCIsImdsb2JhbCIsImRpc3Bvc2VVcmwiLCJvYmoiLCJwcmVVcmwiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU1BLE1BQU0sWUFBWjs7QUFFQSxJQUFNQyxRQUFRO0FBQ1pDLGVBQWEsMkJBREQ7QUFFWkMsY0FBWTs7QUFHZDtBQUxjLENBQWQsQ0FNQSxJQUFNQyxNQUFNO0FBQ1ZDLFNBQU87QUFDTDtBQUNBQyxXQUFPO0FBQ0xDLGNBQVEsTUFESDtBQUVMQyxXQUFLO0FBRkEsS0FGRjtBQU1MO0FBQ0FDLFVBQU07QUFDSkYsY0FBUSxNQURKO0FBRUpDLFdBQUs7QUFGRCxLQVBEO0FBV0w7QUFDQUUsU0FBSztBQUNISCxjQUFRLE1BREw7QUFFSEMsV0FBSztBQUZGLEtBWkE7QUFnQkw7QUFDQUcsYUFBUztBQUNQSixjQUFRLE1BREQ7QUFFUEMsV0FBSztBQUZFLEtBakJKO0FBcUJMO0FBQ0FJLFVBQU07QUFDSkwsY0FBUSxNQURKO0FBRUpDLFdBQUs7QUFGRDtBQXRCRCxHQURHO0FBNEJWSyxZQUFVO0FBQ1I7QUFDQUMsVUFBTTtBQUNKUCxjQUFRLE1BREo7QUFFSkMsV0FBSztBQUZELEtBRkU7QUFNUjtBQUNBTyxTQUFLO0FBQ0hSLGNBQVEsTUFETDtBQUVIQyxXQUFLO0FBRkYsS0FQRztBQVdSO0FBQ0FRLFVBQU07QUFDSlQsY0FBUSxNQURKO0FBRUpDLFdBQUs7QUFGRCxLQVpFO0FBZ0JSO0FBQ0FJLFVBQU07QUFDSkwsY0FBUSxNQURKO0FBRUpDLFdBQUs7QUFGRCxLQWpCRTtBQXFCUjtBQUNBUyxVQUFNO0FBQ0pWLGNBQVEsTUFESjtBQUVKQyxXQUFLO0FBRkQsS0F0QkU7QUEwQlI7QUFDQVUsWUFBUTtBQUNOWCxjQUFRLE1BREY7QUFFTkMsV0FBSztBQUZDLEtBM0JBO0FBK0JSO0FBQ0FXLGdCQUFZO0FBQ1ZaLGNBQVEsTUFERTtBQUVWQyxXQUFLO0FBRkssS0FoQ0o7QUFvQ1I7QUFDQVksWUFBUTtBQUNOYixjQUFRLE1BREY7QUFFTkMsV0FBSztBQUZDLEtBckNBO0FBeUNSO0FBQ0FhLFdBQU87QUFDTGQsY0FBUSxNQURIO0FBRUxDLFdBQUs7QUFGQTtBQTFDQyxHQTVCQTtBQTJFVmMsVUFBUTtBQUNOUixVQUFNO0FBQ0pOLFdBQUssc0JBREQ7QUFFSkQsY0FBUTtBQUZKLEtBREE7QUFLTmdCLFdBQU87QUFDTGYsV0FBSyxrQkFEQTtBQUVMRCxjQUFRO0FBRkgsS0FMRDtBQVNOaUIsWUFBUTtBQUNOaEIsV0FBSyxvQkFEQztBQUVORCxjQUFRO0FBRkYsS0FURjtBQWFOO0FBQ0FrQixhQUFTO0FBQ1BqQixXQUFLLHFCQURFO0FBRVBELGNBQVE7QUFGRDtBQWRILEdBM0VFO0FBOEZWbUIsUUFBTTtBQUNKO0FBQ0FDLGFBQVM7QUFDUG5CLFdBQUssc0JBREU7QUFFUEQsY0FBUTtBQUZELEtBRkw7QUFNSjtBQUNBcUIsbUJBQWU7QUFDYnBCLFdBQUssc0JBRFE7QUFFYkQsY0FBUTtBQUZLO0FBUFgsR0E5Rkk7QUEwR1ZzQixVQUFRO0FBQ047QUFDQUMsWUFBUTtBQUNOdkIsY0FBUSxNQURGO0FBRU5DLFdBQUs7QUFGQyxLQUZGO0FBTU47QUFDQXVCLFlBQVE7QUFDTnhCLGNBQVEsTUFERjtBQUVOQyxXQUFLO0FBRkM7QUFQRjtBQWFWO0FBdkhZLENBQVosQ0F3SEEsSUFBTXdCLGFBQWEsU0FBYkEsVUFBYSxDQUFDQyxHQUFELEVBQU1DLE1BQU4sRUFBaUI7QUFDbENDLFNBQU9DLElBQVAsQ0FBWUgsR0FBWixFQUFpQkksT0FBakIsQ0FBeUIsVUFBQ0MsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQ3ZDLFFBQUlOLElBQUlLLEdBQUosRUFBUzlCLEdBQWIsRUFBa0I7QUFDaEJ5QixVQUFJSyxHQUFKLEVBQVM5QixHQUFULEdBQWUwQixTQUFTRCxJQUFJSyxHQUFKLEVBQVM5QixHQUFqQztBQUNELEtBRkQsTUFFTztBQUNMd0IsaUJBQVdDLElBQUlLLEdBQUosQ0FBWCxFQUFxQkosTUFBckI7QUFDRDtBQUNGLEdBTkQ7QUFPQSxTQUFPRCxHQUFQO0FBQ0QsQ0FURDs7a0JBV2VELFdBQVc1QixHQUFYLEVBQWdCSCxNQUFNRCxHQUFOLENBQWhCLEMiLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZW52ID0gJ3Byb2R1Y3Rpb24nXHJcblxyXG5jb25zdCBob3N0cyA9IHtcclxuICBkZXZlbG9wbWVudDogJ2h0dHA6Ly9sYWR5LnpkZ3BocC5jbi9hcGknLFxyXG4gIHByb2R1Y3Rpb246ICdodHRwczovL3d3dy4ycDk4LmNuL2FwaSdcclxufVxyXG5cclxuLy8gYXBp5YiX6KGoXHJcbmNvbnN0IGFwaSA9IHtcclxuICB1c2Vyczoge1xyXG4gICAgLy8g55So5oi355m75b2VXHJcbiAgICBsb2dpbjoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL3VzZXJzL2xvZ2luJ1xyXG4gICAgfSxcclxuICAgIC8vIOe8lui+kei1hOaWmVxyXG4gICAgc2F2ZToge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL3VzZXJzL2VkaXRVc2VySW5mbydcclxuICAgIH0sXHJcbiAgICAvLyDojrflj5bnlKjmiLfotYTmlplcclxuICAgIGdldDoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL3VzZXJzL3VzZXJJbmZvJ1xyXG4gICAgfSxcclxuICAgIC8vIOaIkeeahOWPkeW4g1xyXG4gICAgcHVibGlzaDoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL3VzZXJzL215QWN0aXZpdHknXHJcbiAgICB9LFxyXG4gICAgLy8g5oiR55qE5Y+C5LiOXHJcbiAgICBqb2luOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvdXNlcnMvbXlKb2luQWN0aXZpdHknXHJcbiAgICB9XHJcbiAgfSxcclxuICBhY3Rpdml0eToge1xyXG4gICAgLy8g6aaW6aG15rS75Yqo5YiX6KGoXHJcbiAgICBsaXN0OiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWN0aXZpdHkvYWN0aXZpdHlMaXN0J1xyXG4gICAgfSxcclxuICAgIC8vIOWIm+W7uua0u+WKqFxyXG4gICAgYWRkOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWN0aXZpdHkvYWN0aXZpdHlBZGQnXHJcbiAgICB9LFxyXG4gICAgLy8g5rS75Yqo6K+m5oOFXHJcbiAgICBpbmZvOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWN0aXZpdHkvYWN0aXZpdHlTaG93J1xyXG4gICAgfSxcclxuICAgIC8vIOWPguWKoOa0u+WKqFxyXG4gICAgam9pbjoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2FjdGl2aXR5Sm9pbidcclxuICAgIH0sXHJcbiAgICAvLyDmiZPljaFcclxuICAgIHNpZ246IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY3Rpdml0eS9jbG9jaydcclxuICAgIH0sXHJcbiAgICAvLyDmiZPljaHlnIhcclxuICAgIGNpcmNsZToge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2Nsb2NrQ2lyY2xlJ1xyXG4gICAgfSxcclxuICAgIC8vIOaIkeeahOaJk+WNoei/m+W6plxyXG4gICAgbXlwcm9ncmVzczoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2Nsb2NrTXknXHJcbiAgICB9LFxyXG4gICAgLy8gcGvmkJzntKJcclxuICAgIHNlYXJjaDoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2FjdGl2aXR5U2VhcmNoJ1xyXG4gICAgfSxcclxuICAgIC8vIHNoYXJlXHJcbiAgICBzaGFyZToge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2FjdGl2aXR5U2hhcmUnXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb3Vyc2U6IHtcclxuICAgIGxpc3Q6IHtcclxuICAgICAgdXJsOiAnL3N0dWR5L3N0dWR5VHlwZUxpc3QnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfSxcclxuICAgIGNsaXN0OiB7XHJcbiAgICAgIHVybDogJy9zdHVkeS9zdHVkeUxpc3QnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfSxcclxuICAgIGRldGFpbDoge1xyXG4gICAgICB1cmw6ICcvc3R1ZHkvc3R1ZHlEZXRhaWwnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfSxcclxuICAgIC8vIOaUtuiXj1xyXG4gICAgY29sbGVjdDoge1xyXG4gICAgICB1cmw6ICcvc3R1ZHkvc3R1ZHlDb2xsZWN0JyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH1cclxuICB9LFxyXG4gIG1vb2Q6IHtcclxuICAgIC8vIOaWh+eroOWIl+ihqFxyXG4gICAgYXJ0aWNsZToge1xyXG4gICAgICB1cmw6ICcvYXJ0aWNsZS9hcnRpY2xlTGlzdCcsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9LFxyXG4gICAgLy8g5paH56ug6K+m5oOFXHJcbiAgICBhcnRpY2xlZGV0YWlsOiB7XHJcbiAgICAgIHVybDogJy9hcnRpY2xlL2FydGljbGVTaG93JyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH0sXHJcbiAgfSxcclxuICBwdWJsaWM6IHtcclxuICAgIC8vIOS4iuS8oOWbvueJh1xyXG4gICAgdXBsb2FkOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvcHVibGljL3VwbG9hZEltZydcclxuICAgIH0sXHJcbiAgICAvLyDlhajlsYDmlbDmja5cclxuICAgIGdsb2JhbDoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL3B1YmxpYy9nbG9iYWxEYXRhJ1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4vLyDpgJLlvZLlpITnkIZ1cmxcclxuY29uc3QgZGlzcG9zZVVybCA9IChvYmosIHByZVVybCkgPT4ge1xyXG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xyXG4gICAgaWYgKG9ialtrZXldLnVybCkge1xyXG4gICAgICBvYmpba2V5XS51cmwgPSBwcmVVcmwgKyBvYmpba2V5XS51cmxcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpc3Bvc2VVcmwob2JqW2tleV0sIHByZVVybClcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiBvYmpcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcG9zZVVybChhcGksIGhvc3RzW2Vudl0pXHJcbiJdfQ==