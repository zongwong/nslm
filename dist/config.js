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
    },
    // 我的心情
    mymood: {
      method: 'post',
      url: '/users/myMood'
    },
    // 我的兑换
    myex: {
      method: 'post',
      url: '/users/myExchange'
    },
    // 我的视频
    myvideo: {
      method: 'post',
      url: '/users/myStudy'
    },
    // 我的文章
    myarticle: {
      method: 'post',
      url: '/users/myArticle'
    },
    // 兑换详情
    exdetail: {
      method: 'post',
      url: '/query/exchangeDetail'
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
    // 打卡排行榜
    top: {
      method: 'post',
      url: '/activity/clockRank'
    },
    // 打卡详情
    signDetail: {
      method: 'post',
      url: '/activity/clockDetail'
    },
    // 点赞
    zan: {
      method: 'post',
      url: '/activity/clockZan'
    },
    // 评论打卡
    comment: {
      method: 'post',
      url: '/activity/clockComment'
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
    },
    // 发表心情
    pbmood: {
      url: '/query/createMood',
      method: 'post'
    },
    // 课程评论
    course: {
      url: '/study/studyComment',
      method: 'post'
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
    },
    // 兑换分类
    excat: {
      url: '/query/exchangeType',
      method: 'post'
    },
    // 兑换列表
    exlist: {
      url: '/query/exchangeList',
      method: 'post'
    },
    // 兑换
    exchange: {
      url: '/query/exchange',
      method: 'post'
    },
    // fm列表
    fm: {
      url: '/query/fm',
      method: 'post'
    },
    // fm列表
    dfm: {
      url: '/query/fmDetail',
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
    },
    // 文章收藏
    articleCollect: {
      url: '/article/articleCollect',
      method: 'post'
    },
    // 心理列表
    index: {
      url: '/query/index',
      method: 'post'
    },
    // 发表心情
    pbmood: {
      url: '/query/index',
      method: 'post'
    },
    // 发布咨询
    ask: {
      url: '/query/query',
      method: 'post'
    },
    // 医生内页
    doctor: {
      url: '/query/doctorDetail',
      method: 'post'
    },
    // 餐饮建议
    food: {
      url: '/study/food',
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
    },
    // 获取支付参数
    pay: {
      method: 'post',
      url: '/public/pay'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJlbnYiLCJob3N0cyIsImRldmVsb3BtZW50IiwicHJvZHVjdGlvbiIsImFwaSIsInVzZXJzIiwibG9naW4iLCJtZXRob2QiLCJ1cmwiLCJzYXZlIiwiZ2V0IiwicHVibGlzaCIsImpvaW4iLCJteW1vb2QiLCJteWV4IiwibXl2aWRlbyIsIm15YXJ0aWNsZSIsImV4ZGV0YWlsIiwiYWN0aXZpdHkiLCJsaXN0IiwiYWRkIiwiaW5mbyIsInNpZ24iLCJjaXJjbGUiLCJ0b3AiLCJzaWduRGV0YWlsIiwiemFuIiwiY29tbWVudCIsIm15cHJvZ3Jlc3MiLCJzZWFyY2giLCJzaGFyZSIsInBibW9vZCIsImNvdXJzZSIsImNsaXN0IiwiZGV0YWlsIiwiY29sbGVjdCIsImV4Y2F0IiwiZXhsaXN0IiwiZXhjaGFuZ2UiLCJmbSIsImRmbSIsIm1vb2QiLCJhcnRpY2xlIiwiYXJ0aWNsZWRldGFpbCIsImFydGljbGVDb2xsZWN0IiwiaW5kZXgiLCJhc2siLCJkb2N0b3IiLCJmb29kIiwicHVibGljIiwidXBsb2FkIiwiZ2xvYmFsIiwicGF5IiwiZGlzcG9zZVVybCIsIm9iaiIsInByZVVybCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU1BLE1BQU0sWUFBWjs7QUFFQSxJQUFNQyxRQUFRO0FBQ1pDLGVBQWEsMkJBREQ7QUFFWkMsY0FBWTs7QUFHZDtBQUxjLENBQWQsQ0FNQSxJQUFNQyxNQUFNO0FBQ1ZDLFNBQU87QUFDTDtBQUNBQyxXQUFPO0FBQ0xDLGNBQVEsTUFESDtBQUVMQyxXQUFLO0FBRkEsS0FGRjtBQU1MO0FBQ0FDLFVBQU07QUFDSkYsY0FBUSxNQURKO0FBRUpDLFdBQUs7QUFGRCxLQVBEO0FBV0w7QUFDQUUsU0FBSztBQUNISCxjQUFRLE1BREw7QUFFSEMsV0FBSztBQUZGLEtBWkE7QUFnQkw7QUFDQUcsYUFBUztBQUNQSixjQUFRLE1BREQ7QUFFUEMsV0FB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RixHQU5EO0FBT0EsU0FBT0QsR0FBUDtBQUNELENBVEQ7O2tCQVdlRCxXQUFXakQsR0FBWCxFQUFnQkgsTUFBTUQsR0FBTixDQUFoQixDIiwiZmlsZSI6ImNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGVudiA9ICdwcm9kdWN0aW9uJ1xyXG5cclxuY29uc3QgaG9zdHMgPSB7XHJcbiAgZGV2ZWxvcG1lbnQ6ICdodHRwOi8vbGFkeS56ZGdwaHAuY24vYXBpJyxcclxuICBwcm9kdWN0aW9uOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9hcGknXHJcbn1cclxuXHJcbi8vIGFwaeWIl+ihqFxyXG5jb25zdCBhcGkgPSB7XHJcbiAgdXNlcnM6IHtcclxuICAgIC8vIOeUqOaIt+eZu+W9lVxyXG4gICAgbG9naW46IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy91c2Vycy9sb2dpbidcclxuICAgIH0sXHJcbiAgICAvLyDnvJbovpHotYTmlplcclxuICAgIHNhdmU6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy91c2Vycy9lZGl0VXNlckluZm8nXHJcbiAgICB9LFxyXG4gICAgLy8g6I635Y+W55So5oi36LWE5paZXHJcbiAgICBnZXQ6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy91c2Vycy91c2VySW5mbydcclxuICAgIH0sXHJcbiAgICAvLyDmiJHnmoTlj5HluINcclxuICAgIHB1Ymxpc2g6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy91c2Vycy9teUFjdGl2aXR5J1xyXG4gICAgfSxcclxuICAgIC8vIOaIkeeahOWPguS4jlxyXG4gICAgam9pbjoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL3VzZXJzL215Sm9pbkFjdGl2aXR5J1xyXG4gICAgfSxcclxuICAgIC8vIOaIkeeahOW/g+aDhVxyXG4gICAgbXltb29kOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvdXNlcnMvbXlNb29kJ1xyXG4gICAgfSxcclxuICAgIC8vIOaIkeeahOWFkeaNolxyXG4gICAgbXlleDoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL3VzZXJzL215RXhjaGFuZ2UnXHJcbiAgICB9LFxyXG4gICAgLy8g5oiR55qE6KeG6aKRXHJcbiAgICBteXZpZGVvOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvdXNlcnMvbXlTdHVkeSdcclxuICAgIH0sXHJcbiAgICAvLyDmiJHnmoTmlofnq6BcclxuICAgIG15YXJ0aWNsZToge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL3VzZXJzL215QXJ0aWNsZSdcclxuICAgIH0sXHJcbiAgICAvLyDlhZHmjaLor6bmg4VcclxuICAgIGV4ZGV0YWlsOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvcXVlcnkvZXhjaGFuZ2VEZXRhaWwnXHJcbiAgICB9XHJcbiAgfSxcclxuICBhY3Rpdml0eToge1xyXG4gICAgLy8g6aaW6aG15rS75Yqo5YiX6KGoXHJcbiAgICBsaXN0OiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWN0aXZpdHkvYWN0aXZpdHlMaXN0J1xyXG4gICAgfSxcclxuICAgIC8vIOWIm+W7uua0u+WKqFxyXG4gICAgYWRkOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWN0aXZpdHkvYWN0aXZpdHlBZGQnXHJcbiAgICB9LFxyXG4gICAgLy8g5rS75Yqo6K+m5oOFXHJcbiAgICBpbmZvOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWN0aXZpdHkvYWN0aXZpdHlTaG93J1xyXG4gICAgfSxcclxuICAgIC8vIOWPguWKoOa0u+WKqFxyXG4gICAgam9pbjoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2FjdGl2aXR5Sm9pbidcclxuICAgIH0sXHJcbiAgICAvLyDmiZPljaFcclxuICAgIHNpZ246IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY3Rpdml0eS9jbG9jaydcclxuICAgIH0sXHJcbiAgICAvLyDmiZPljaHlnIhcclxuICAgIGNpcmNsZToge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2Nsb2NrQ2lyY2xlJ1xyXG4gICAgfSxcclxuICAgIC8vIOaJk+WNoeaOkuihjOamnFxyXG4gICAgdG9wOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWN0aXZpdHkvY2xvY2tSYW5rJ1xyXG4gICAgfSxcclxuICAgIC8vIOaJk+WNoeivpuaDhVxyXG4gICAgc2lnbkRldGFpbDoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2Nsb2NrRGV0YWlsJ1xyXG4gICAgfSxcclxuICAgIC8vIOeCuei1nlxyXG4gICAgemFuOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWN0aXZpdHkvY2xvY2taYW4nXHJcbiAgICB9LFxyXG4gICAgLy8g6K+E6K665omT5Y2hXHJcbiAgICBjb21tZW50OiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWN0aXZpdHkvY2xvY2tDb21tZW50J1xyXG4gICAgfSxcclxuICAgIC8vIOaIkeeahOaJk+WNoei/m+W6plxyXG4gICAgbXlwcm9ncmVzczoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2Nsb2NrTXknXHJcbiAgICB9LFxyXG4gICAgLy8gcGvmkJzntKJcclxuICAgIHNlYXJjaDoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2FjdGl2aXR5U2VhcmNoJ1xyXG4gICAgfSxcclxuICAgIC8vIHNoYXJlXHJcbiAgICBzaGFyZToge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2FjdGl2aXR5U2hhcmUnXHJcbiAgICB9LFxyXG4gICAgLy8g5Y+R6KGo5b+D5oOFXHJcbiAgICBwYm1vb2Q6IHtcclxuICAgICAgdXJsOiAnL3F1ZXJ5L2NyZWF0ZU1vb2QnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfSxcclxuICAgIC8vIOivvueoi+ivhOiuulxyXG4gICAgY291cnNlOiB7XHJcbiAgICAgIHVybDogJy9zdHVkeS9zdHVkeUNvbW1lbnQnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY291cnNlOiB7XHJcbiAgICBsaXN0OiB7XHJcbiAgICAgIHVybDogJy9zdHVkeS9zdHVkeVR5cGVMaXN0JyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH0sXHJcbiAgICBjbGlzdDoge1xyXG4gICAgICB1cmw6ICcvc3R1ZHkvc3R1ZHlMaXN0JyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH0sXHJcbiAgICBkZXRhaWw6IHtcclxuICAgICAgdXJsOiAnL3N0dWR5L3N0dWR5RGV0YWlsJyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH0sXHJcbiAgICAvLyDmlLbol49cclxuICAgIGNvbGxlY3Q6IHtcclxuICAgICAgdXJsOiAnL3N0dWR5L3N0dWR5Q29sbGVjdCcsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9LFxyXG4gICAgLy8g5YWR5o2i5YiG57G7XHJcbiAgICBleGNhdDoge1xyXG4gICAgICB1cmw6ICcvcXVlcnkvZXhjaGFuZ2VUeXBlJyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH0sXHJcbiAgICAvLyDlhZHmjaLliJfooahcclxuICAgIGV4bGlzdDoge1xyXG4gICAgICB1cmw6ICcvcXVlcnkvZXhjaGFuZ2VMaXN0JyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH0sXHJcbiAgICAvLyDlhZHmjaJcclxuICAgIGV4Y2hhbmdlOiB7XHJcbiAgICAgIHVybDogJy9xdWVyeS9leGNoYW5nZScsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9LFxyXG4gICAgLy8gZm3liJfooahcclxuICAgIGZtOiB7XHJcbiAgICAgIHVybDogJy9xdWVyeS9mbScsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9LFxyXG4gICAgLy8gZm3liJfooahcclxuICAgIGRmbToge1xyXG4gICAgICB1cmw6ICcvcXVlcnkvZm1EZXRhaWwnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbW9vZDoge1xyXG4gICAgLy8g5paH56ug5YiX6KGoXHJcbiAgICBhcnRpY2xlOiB7XHJcbiAgICAgIHVybDogJy9hcnRpY2xlL2FydGljbGVMaXN0JyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH0sXHJcbiAgICAvLyDmlofnq6Dor6bmg4VcclxuICAgIGFydGljbGVkZXRhaWw6IHtcclxuICAgICAgdXJsOiAnL2FydGljbGUvYXJ0aWNsZVNob3cnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfSxcclxuICAgIC8vIOaWh+eroOaUtuiXj1xyXG4gICAgYXJ0aWNsZUNvbGxlY3Q6IHtcclxuICAgICAgdXJsOiAnL2FydGljbGUvYXJ0aWNsZUNvbGxlY3QnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfSxcclxuICAgIC8vIOW/g+eQhuWIl+ihqFxyXG4gICAgaW5kZXg6IHtcclxuICAgICAgdXJsOiAnL3F1ZXJ5L2luZGV4JyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH0sXHJcbiAgICAvLyDlj5Hooajlv4Pmg4VcclxuICAgIHBibW9vZDoge1xyXG4gICAgICB1cmw6ICcvcXVlcnkvaW5kZXgnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfSxcclxuICAgIC8vIOWPkeW4g+WSqOivolxyXG4gICAgYXNrOiB7XHJcbiAgICAgIHVybDogJy9xdWVyeS9xdWVyeScsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9LFxyXG4gICAgLy8g5Yy755Sf5YaF6aG1XHJcbiAgICBkb2N0b3I6IHtcclxuICAgICAgdXJsOiAnL3F1ZXJ5L2RvY3RvckRldGFpbCcsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9LFxyXG4gICAgLy8g6aSQ6aWu5bu66K6uXHJcbiAgICBmb29kOiB7XHJcbiAgICAgIHVybDogJy9zdHVkeS9mb29kJyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH1cclxuICB9LFxyXG4gIHB1YmxpYzoge1xyXG4gICAgLy8g5LiK5Lyg5Zu+54mHXHJcbiAgICB1cGxvYWQ6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9wdWJsaWMvdXBsb2FkSW1nJ1xyXG4gICAgfSxcclxuICAgIC8vIOWFqOWxgOaVsOaNrlxyXG4gICAgZ2xvYmFsOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvcHVibGljL2dsb2JhbERhdGEnXHJcbiAgICB9LFxyXG4gICAgLy8g6I635Y+W5pSv5LuY5Y+C5pWwXHJcbiAgICBwYXk6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9wdWJsaWMvcGF5J1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4vLyDpgJLlvZLlpITnkIZ1cmxcclxuY29uc3QgZGlzcG9zZVVybCA9IChvYmosIHByZVVybCkgPT4ge1xyXG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xyXG4gICAgaWYgKG9ialtrZXldLnVybCkge1xyXG4gICAgICBvYmpba2V5XS51cmwgPSBwcmVVcmwgKyBvYmpba2V5XS51cmxcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpc3Bvc2VVcmwob2JqW2tleV0sIHByZVVybClcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiBvYmpcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcG9zZVVybChhcGksIGhvc3RzW2Vudl0pXHJcbiJdfQ==