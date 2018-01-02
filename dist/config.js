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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJlbnYiLCJob3N0cyIsImRldmVsb3BtZW50IiwicHJvZHVjdGlvbiIsImFwaSIsInVzZXJzIiwibG9naW4iLCJtZXRob2QiLCJ1cmwiLCJzYXZlIiwiZ2V0IiwicHVibGlzaCIsImpvaW4iLCJteW1vb2QiLCJteWV4IiwibXl2aWRlbyIsIm15YXJ0aWNsZSIsImV4ZGV0YWlsIiwiYWN0aXZpdHkiLCJsaXN0IiwiYWRkIiwiaW5mbyIsInNpZ24iLCJjaXJjbGUiLCJ0b3AiLCJzaWduRGV0YWlsIiwiemFuIiwiY29tbWVudCIsIm15cHJvZ3Jlc3MiLCJzZWFyY2giLCJzaGFyZSIsInBibW9vZCIsImNvdXJzZSIsImNsaXN0IiwiZGV0YWlsIiwiY29sbGVjdCIsImV4Y2F0IiwiZXhsaXN0IiwiZXhjaGFuZ2UiLCJtb29kIiwiYXJ0aWNsZSIsImFydGljbGVkZXRhaWwiLCJhcnRpY2xlQ29sbGVjdCIsImluZGV4IiwiYXNrIiwiZG9jdG9yIiwiZm9vZCIsInB1YmxpYyIsInVwbG9hZCIsImdsb2JhbCIsInBheSIsImRpc3Bvc2VVcmwiLCJvYmoiLCJwcmVVcmwiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxNQUFNLFlBQVo7O0FBRUEsSUFBTUMsUUFBUTtBQUNaQyxlQUFhLDJCQUREO0FBRVpDLGNBQVk7O0FBR2Q7QUFMYyxDQUFkLENBTUEsSUFBTUMsTUFBTTtBQUNWQyxTQUFPO0FBQ0w7QUFDQUMsV0FBTztBQUNMQyxjQUFRLE1BREg7QUFFTEMsV0FBSztBQUZBLEtBRkY7QUFNTDtBQUNBQyxVQUFNO0FBQ0pGLGNBQVEsTUFESjtBQUVKQyxXQUFLO0FBRkQsS0FQRDtBQVdMO0FBQ0FFLFNBQUs7QUFDSEgsY0FBUSxNQURMO0FBRUhDLFdBQUs7QUFGRixLQVpBO0FBZ0JMO0FBQ0FHLGFBQVM7QUFDUEosY0FBUSxNQUREO0FBRVBDLFdBQUs7QUFGRSxLQWpC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diA9ICdwcm9kdWN0aW9uJ1xyXG5cclxuY29uc3QgaG9zdHMgPSB7XHJcbiAgZGV2ZWxvcG1lbnQ6ICdodHRwOi8vbGFkeS56ZGdwaHAuY24vYXBpJyxcclxuICBwcm9kdWN0aW9uOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9hcGknXHJcbn1cclxuXHJcbi8vIGFwaeWIl+ihqFxyXG5jb25zdCBhcGkgPSB7XHJcbiAgdXNlcnM6IHtcclxuICAgIC8vIOeUqOaIt+eZu+W9lVxyXG4gICAgbG9naW46IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy91c2Vycy9sb2dpbidcclxuICAgIH0sXHJcbiAgICAvLyDnvJbovpHotYTmlplcclxuICAgIHNhdmU6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy91c2Vycy9lZGl0VXNlckluZm8nXHJcbiAgICB9LFxyXG4gICAgLy8g6I635Y+W55So5oi36LWE5paZXHJcbiAgICBnZXQ6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy91c2Vycy91c2VySW5mbydcclxuICAgIH0sXHJcbiAgICAvLyDmiJHnmoTlj5HluINcclxuICAgIHB1Ymxpc2g6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy91c2Vycy9teUFjdGl2aXR5J1xyXG4gICAgfSxcclxuICAgIC8vIOaIkeeahOWPguS4jlxyXG4gICAgam9pbjoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL3VzZXJzL215Sm9pbkFjdGl2aXR5J1xyXG4gICAgfSxcclxuICAgIC8vIOaIkeeahOW/g+aDhVxyXG4gICAgbXltb29kOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvdXNlcnMvbXlNb29kJ1xyXG4gICAgfSxcclxuICAgIC8vIOaIkeeahOWFkeaNolxyXG4gICAgbXlleDoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL3VzZXJzL215RXhjaGFuZ2UnXHJcbiAgICB9LFxyXG4gICAgLy8g5oiR55qE6KeG6aKRXHJcbiAgICBteXZpZGVvOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvdXNlcnMvbXlTdHVkeSdcclxuICAgIH0sXHJcbiAgICAvLyDmiJHnmoTmlofnq6BcclxuICAgIG15YXJ0aWNsZToge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL3VzZXJzL215QXJ0aWNsZSdcclxuICAgIH0sXHJcbiAgICAvLyDlhZHmjaLor6bmg4VcclxuICAgIGV4ZGV0YWlsOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvcXVlcnkvZXhjaGFuZ2VEZXRhaWwnXHJcbiAgICB9XHJcbiAgfSxcclxuICBhY3Rpdml0eToge1xyXG4gICAgLy8g6aaW6aG15rS75Yqo5YiX6KGoXHJcbiAgICBsaXN0OiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWN0aXZpdHkvYWN0aXZpdHlMaXN0J1xyXG4gICAgfSxcclxuICAgIC8vIOWIm+W7uua0u+WKqFxyXG4gICAgYWRkOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWN0aXZpdHkvYWN0aXZpdHlBZGQnXHJcbiAgICB9LFxyXG4gICAgLy8g5rS75Yqo6K+m5oOFXHJcbiAgICBpbmZvOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWN0aXZpdHkvYWN0aXZpdHlTaG93J1xyXG4gICAgfSxcclxuICAgIC8vIOWPguWKoOa0u+WKqFxyXG4gICAgam9pbjoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2FjdGl2aXR5Sm9pbidcclxuICAgIH0sXHJcbiAgICAvLyDmiZPljaFcclxuICAgIHNpZ246IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY3Rpdml0eS9jbG9jaydcclxuICAgIH0sXHJcbiAgICAvLyDmiZPljaHlnIhcclxuICAgIGNpcmNsZToge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2Nsb2NrQ2lyY2xlJ1xyXG4gICAgfSxcclxuICAgIC8vIOaJk+WNoeaOkuihjOamnFxyXG4gICAgdG9wOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWN0aXZpdHkvY2xvY2tSYW5rJ1xyXG4gICAgfSxcclxuICAgIC8vIOaJk+WNoeivpuaDhVxyXG4gICAgc2lnbkRldGFpbDoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2Nsb2NrRGV0YWlsJ1xyXG4gICAgfSxcclxuICAgIC8vIOeCuei1nlxyXG4gICAgemFuOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWN0aXZpdHkvY2xvY2taYW4nXHJcbiAgICB9LFxyXG4gICAgLy8g6K+E6K665omT5Y2hXHJcbiAgICBjb21tZW50OiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWN0aXZpdHkvY2xvY2tDb21tZW50J1xyXG4gICAgfSxcclxuICAgIC8vIOaIkeeahOaJk+WNoei/m+W6plxyXG4gICAgbXlwcm9ncmVzczoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2Nsb2NrTXknXHJcbiAgICB9LFxyXG4gICAgLy8gcGvmkJzntKJcclxuICAgIHNlYXJjaDoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2FjdGl2aXR5U2VhcmNoJ1xyXG4gICAgfSxcclxuICAgIC8vIHNoYXJlXHJcbiAgICBzaGFyZToge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2FjdGl2aXR5U2hhcmUnXHJcbiAgICB9LFxyXG4gICAgLy8g5Y+R6KGo5b+D5oOFXHJcbiAgICBwYm1vb2Q6IHtcclxuICAgICAgdXJsOiAnL3F1ZXJ5L2NyZWF0ZU1vb2QnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfSxcclxuICAgIC8vIOivvueoi+ivhOiuulxyXG4gICAgY291cnNlOiB7XHJcbiAgICAgIHVybDogJy9zdHVkeS9zdHVkeUNvbW1lbnQnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY291cnNlOiB7XHJcbiAgICBsaXN0OiB7XHJcbiAgICAgIHVybDogJy9zdHVkeS9zdHVkeVR5cGVMaXN0JyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH0sXHJcbiAgICBjbGlzdDoge1xyXG4gICAgICB1cmw6ICcvc3R1ZHkvc3R1ZHlMaXN0JyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH0sXHJcbiAgICBkZXRhaWw6IHtcclxuICAgICAgdXJsOiAnL3N0dWR5L3N0dWR5RGV0YWlsJyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH0sXHJcbiAgICAvLyDmlLbol49cclxuICAgIGNvbGxlY3Q6IHtcclxuICAgICAgdXJsOiAnL3N0dWR5L3N0dWR5Q29sbGVjdCcsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9LFxyXG4gICAgLy8g5YWR5o2i5YiG57G7XHJcbiAgICBleGNhdDoge1xyXG4gICAgICB1cmw6ICcvcXVlcnkvZXhjaGFuZ2VUeXBlJyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH0sXHJcbiAgICAvLyDlhZHmjaLliJfooahcclxuICAgIGV4bGlzdDoge1xyXG4gICAgICB1cmw6ICcvcXVlcnkvZXhjaGFuZ2VMaXN0JyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH0sXHJcbiAgICAvLyDlhZHmjaJcclxuICAgIGV4Y2hhbmdlOiB7XHJcbiAgICAgIHVybDogJy9xdWVyeS9leGNoYW5nZScsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9XHJcbiAgfSxcclxuICBtb29kOiB7XHJcbiAgICAvLyDmlofnq6DliJfooahcclxuICAgIGFydGljbGU6IHtcclxuICAgICAgdXJsOiAnL2FydGljbGUvYXJ0aWNsZUxpc3QnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfSxcclxuICAgIC8vIOaWh+eroOivpuaDhVxyXG4gICAgYXJ0aWNsZWRldGFpbDoge1xyXG4gICAgICB1cmw6ICcvYXJ0aWNsZS9hcnRpY2xlU2hvdycsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9LFxyXG4gICAgLy8g5paH56ug5pS26JePXHJcbiAgICBhcnRpY2xlQ29sbGVjdDoge1xyXG4gICAgICB1cmw6ICcvYXJ0aWNsZS9hcnRpY2xlQ29sbGVjdCcsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9LFxyXG4gICAgLy8g5b+D55CG5YiX6KGoXHJcbiAgICBpbmRleDoge1xyXG4gICAgICB1cmw6ICcvcXVlcnkvaW5kZXgnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfSxcclxuICAgIC8vIOWPkeihqOW/g+aDhVxyXG4gICAgcGJtb29kOiB7XHJcbiAgICAgIHVybDogJy9xdWVyeS9pbmRleCcsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9LFxyXG4gICAgLy8g5Y+R5biD5ZKo6K+iXHJcbiAgICBhc2s6IHtcclxuICAgICAgdXJsOiAnL3F1ZXJ5L3F1ZXJ5JyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH0sXHJcbiAgICAvLyDljLvnlJ/lhoXpobVcclxuICAgIGRvY3Rvcjoge1xyXG4gICAgICB1cmw6ICcvcXVlcnkvZG9jdG9yRGV0YWlsJyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH0sXHJcbiAgICAvLyDppJDppa7lu7rorq5cclxuICAgIGZvb2Q6IHtcclxuICAgICAgdXJsOiAnL3N0dWR5L2Zvb2QnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcHVibGljOiB7XHJcbiAgICAvLyDkuIrkvKDlm77niYdcclxuICAgIHVwbG9hZDoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL3B1YmxpYy91cGxvYWRJbWcnXHJcbiAgICB9LFxyXG4gICAgLy8g5YWo5bGA5pWw5o2uXHJcbiAgICBnbG9iYWw6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9wdWJsaWMvZ2xvYmFsRGF0YSdcclxuICAgIH0sXHJcbiAgICAvLyDojrflj5bmlK/ku5jlj4LmlbBcclxuICAgIHBheToge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL3B1YmxpYy9wYXknXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi8vIOmAkuW9kuWkhOeQhnVybFxyXG5jb25zdCBkaXNwb3NlVXJsID0gKG9iaiwgcHJlVXJsKSA9PiB7XHJcbiAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XHJcbiAgICBpZiAob2JqW2tleV0udXJsKSB7XHJcbiAgICAgIG9ialtrZXldLnVybCA9IHByZVVybCArIG9ialtrZXldLnVybFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGlzcG9zZVVybChvYmpba2V5XSwgcHJlVXJsKVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIG9ialxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwb3NlVXJsKGFwaSwgaG9zdHNbZW52XSlcclxuIl19