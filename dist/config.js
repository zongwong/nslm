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
    },
    // 绑定银行卡
    card: {
      method: 'post',
      url: '/users/bindBankAccount'
    },
    // 提现
    withdraw: {
      method: 'post',
      url: '/users/withdraw'
    },
    // 奖金明细
    moneydetail: {
      method: 'post',
      url: '/users/accountDetail'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJlbnYiLCJob3N0cyIsImRldmVsb3BtZW50IiwicHJvZHVjdGlvbiIsImFwaSIsInVzZXJzIiwibG9naW4iLCJtZXRob2QiLCJ1cmwiLCJzYXZlIiwiZ2V0IiwicHVibGlzaCIsImpvaW4iLCJteW1vb2QiLCJteWV4IiwibXl2aWRlbyIsIm15YXJ0aWNsZSIsImV4ZGV0YWlsIiwiY2FyZCIsIndpdGhkcmF3IiwibW9uZXlkZXRhaWwiLCJhY3Rpdml0eSIsImxpc3QiLCJhZGQiLCJpbmZvIiwic2lnbiIsImNpcmNsZSIsInRvcCIsInNpZ25EZXRhaWwiLCJ6YW4iLCJjb21tZW50IiwibXlwcm9ncmVzcyIsInNlYXJjaCIsInNoYXJlIiwicGJtb29kIiwiY291cnNlIiwiY2xpc3QiLCJkZXRhaWwiLCJjb2xsZWN0IiwiZXhjYXQiLCJleGxpc3QiLCJleGNoYW5nZSIsImZtIiwiZGZtIiwibW9vZCIsImFydGljbGUiLCJhcnRpY2xlZGV0YWlsIiwiYXJ0aWNsZUNvbGxlY3QiLCJpbmRleCIsImFzayIsImRvY3RvciIsImZvb2QiLCJwdWJsaWMiLCJ1cGxvYWQiLCJnbG9iYWwiLCJwYXkiLCJkaXNwb3NlVXJsIiwib2JqIiwicHJlVXJsIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsTUFBTSxZQUFaOztBQUVBLElBQU1DLFFBQVE7QUFDWkMsZUFBYSwyQkFERDtBQUVaQyxjQUFZOztBQUdkO0FBTGMsQ0FBZCxDQU1BLElBQU1DLE1BQU07QUFDVkMsU0FBTztBQUNMO0FBQ0FDLFdBQU87QUFDTEMsY0FBUSxNQURIO0FBRUxDLFdBQUs7QUFGQSxLQUZGO0FBTUw7QUFDQUMsVUFBTTtBQUNKRixjQUFRLE1BREo7QUFFSkMsV0FBSztBQUZELEtBUEQ7QUFXTDtBQUNBRSxTQUFLO0FBQ0hILGNBQVEsTUFETDtBQUVIQyxXQUFLO0FBRkYsS0FaQTtBQWdCTDtBQUNB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LFVBQUNDLEdBQUQsRUFBTWQsS0FBTixFQUFnQjtBQUN2QyxRQUFJUyxJQUFJSyxHQUFKLEVBQVN0RCxHQUFiLEVBQWtCO0FBQ2hCaUQsVUFBSUssR0FBSixFQUFTdEQsR0FBVCxHQUFla0QsU0FBU0QsSUFBSUssR0FBSixFQUFTdEQsR0FBakM7QUFDRCxLQUZELE1BRU87QUFDTGdELGlCQUFXQyxJQUFJSyxHQUFKLENBQVgsRUFBcUJKLE1BQXJCO0FBQ0Q7QUFDRixHQU5EO0FBT0EsU0FBT0QsR0FBUDtBQUNELENBVEQ7O2tCQVdlRCxXQUFXcEQsR0FBWCxFQUFnQkgsTUFBTUQsR0FBTixDQUFoQixDIiwiZmlsZSI6ImNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGVudiA9ICdwcm9kdWN0aW9uJ1xyXG5cclxuY29uc3QgaG9zdHMgPSB7XHJcbiAgZGV2ZWxvcG1lbnQ6ICdodHRwOi8vbGFkeS56ZGdwaHAuY24vYXBpJyxcclxuICBwcm9kdWN0aW9uOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9hcGknXHJcbn1cclxuXHJcbi8vIGFwaeWIl+ihqFxyXG5jb25zdCBhcGkgPSB7XHJcbiAgdXNlcnM6IHtcclxuICAgIC8vIOeUqOaIt+eZu+W9lVxyXG4gICAgbG9naW46IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy91c2Vycy9sb2dpbidcclxuICAgIH0sXHJcbiAgICAvLyDnvJbovpHotYTmlplcclxuICAgIHNhdmU6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy91c2Vycy9lZGl0VXNlckluZm8nXHJcbiAgICB9LFxyXG4gICAgLy8g6I635Y+W55So5oi36LWE5paZXHJcbiAgICBnZXQ6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy91c2Vycy91c2VySW5mbydcclxuICAgIH0sXHJcbiAgICAvLyDmiJHnmoTlj5HluINcclxuICAgIHB1Ymxpc2g6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy91c2Vycy9teUFjdGl2aXR5J1xyXG4gICAgfSxcclxuICAgIC8vIOaIkeeahOWPguS4jlxyXG4gICAgam9pbjoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL3VzZXJzL215Sm9pbkFjdGl2aXR5J1xyXG4gICAgfSxcclxuICAgIC8vIOaIkeeahOW/g+aDhVxyXG4gICAgbXltb29kOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvdXNlcnMvbXlNb29kJ1xyXG4gICAgfSxcclxuICAgIC8vIOaIkeeahOWFkeaNolxyXG4gICAgbXlleDoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL3VzZXJzL215RXhjaGFuZ2UnXHJcbiAgICB9LFxyXG4gICAgLy8g5oiR55qE6KeG6aKRXHJcbiAgICBteXZpZGVvOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvdXNlcnMvbXlTdHVkeSdcclxuICAgIH0sXHJcbiAgICAvLyDmiJHnmoTmlofnq6BcclxuICAgIG15YXJ0aWNsZToge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL3VzZXJzL215QXJ0aWNsZSdcclxuICAgIH0sXHJcbiAgICAvLyDlhZHmjaLor6bmg4VcclxuICAgIGV4ZGV0YWlsOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvcXVlcnkvZXhjaGFuZ2VEZXRhaWwnXHJcbiAgICB9LFxyXG4gICAgLy8g57uR5a6a6ZO26KGM5Y2hXHJcbiAgICBjYXJkOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvdXNlcnMvYmluZEJhbmtBY2NvdW50J1xyXG4gICAgfSxcclxuICAgIC8vIOaPkOeOsFxyXG4gICAgd2l0aGRyYXc6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy91c2Vycy93aXRoZHJhdydcclxuICAgIH0sXHJcbiAgICAvLyDlpZbph5HmmI7nu4ZcclxuICAgIG1vbmV5ZGV0YWlsOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvdXNlcnMvYWNjb3VudERldGFpbCdcclxuICAgIH1cclxuICB9LFxyXG4gIGFjdGl2aXR5OiB7XHJcbiAgICAvLyDpppbpobXmtLvliqjliJfooahcclxuICAgIGxpc3Q6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY3Rpdml0eS9hY3Rpdml0eUxpc3QnXHJcbiAgICB9LFxyXG4gICAgLy8g5Yib5bu65rS75YqoXHJcbiAgICBhZGQ6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY3Rpdml0eS9hY3Rpdml0eUFkZCdcclxuICAgIH0sXHJcbiAgICAvLyDmtLvliqjor6bmg4VcclxuICAgIGluZm86IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY3Rpdml0eS9hY3Rpdml0eVNob3cnXHJcbiAgICB9LFxyXG4gICAgLy8g5Y+C5Yqg5rS75YqoXHJcbiAgICBqb2luOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWN0aXZpdHkvYWN0aXZpdHlKb2luJ1xyXG4gICAgfSxcclxuICAgIC8vIOaJk+WNoVxyXG4gICAgc2lnbjoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2Nsb2NrJ1xyXG4gICAgfSxcclxuICAgIC8vIOaJk+WNoeWciFxyXG4gICAgY2lyY2xlOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWN0aXZpdHkvY2xvY2tDaXJjbGUnXHJcbiAgICB9LFxyXG4gICAgLy8g5omT5Y2h5o6S6KGM5qacXHJcbiAgICB0b3A6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY3Rpdml0eS9jbG9ja1JhbmsnXHJcbiAgICB9LFxyXG4gICAgLy8g5omT5Y2h6K+m5oOFXHJcbiAgICBzaWduRGV0YWlsOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWN0aXZpdHkvY2xvY2tEZXRhaWwnXHJcbiAgICB9LFxyXG4gICAgLy8g54K56LWeXHJcbiAgICB6YW46IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY3Rpdml0eS9jbG9ja1phbidcclxuICAgIH0sXHJcbiAgICAvLyDor4TorrrmiZPljaFcclxuICAgIGNvbW1lbnQ6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY3Rpdml0eS9jbG9ja0NvbW1lbnQnXHJcbiAgICB9LFxyXG4gICAgLy8g5oiR55qE5omT5Y2h6L+b5bqmXHJcbiAgICBteXByb2dyZXNzOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWN0aXZpdHkvY2xvY2tNeSdcclxuICAgIH0sXHJcbiAgICAvLyBwa+aQnOe0olxyXG4gICAgc2VhcmNoOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWN0aXZpdHkvYWN0aXZpdHlTZWFyY2gnXHJcbiAgICB9LFxyXG4gICAgLy8gc2hhcmVcclxuICAgIHNoYXJlOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWN0aXZpdHkvYWN0aXZpdHlTaGFyZSdcclxuICAgIH0sXHJcbiAgICAvLyDlj5Hooajlv4Pmg4VcclxuICAgIHBibW9vZDoge1xyXG4gICAgICB1cmw6ICcvcXVlcnkvY3JlYXRlTW9vZCcsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9LFxyXG4gICAgLy8g6K++56iL6K+E6K66XHJcbiAgICBjb3Vyc2U6IHtcclxuICAgICAgdXJsOiAnL3N0dWR5L3N0dWR5Q29tbWVudCcsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb3Vyc2U6IHtcclxuICAgIGxpc3Q6IHtcclxuICAgICAgdXJsOiAnL3N0dWR5L3N0dWR5VHlwZUxpc3QnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfSxcclxuICAgIGNsaXN0OiB7XHJcbiAgICAgIHVybDogJy9zdHVkeS9zdHVkeUxpc3QnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfSxcclxuICAgIGRldGFpbDoge1xyXG4gICAgICB1cmw6ICcvc3R1ZHkvc3R1ZHlEZXRhaWwnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfSxcclxuICAgIC8vIOaUtuiXj1xyXG4gICAgY29sbGVjdDoge1xyXG4gICAgICB1cmw6ICcvc3R1ZHkvc3R1ZHlDb2xsZWN0JyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH0sXHJcbiAgICAvLyDlhZHmjaLliIbnsbtcclxuICAgIGV4Y2F0OiB7XHJcbiAgICAgIHVybDogJy9xdWVyeS9leGNoYW5nZVR5cGUnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfSxcclxuICAgIC8vIOWFkeaNouWIl+ihqFxyXG4gICAgZXhsaXN0OiB7XHJcbiAgICAgIHVybDogJy9xdWVyeS9leGNoYW5nZUxpc3QnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfSxcclxuICAgIC8vIOWFkeaNolxyXG4gICAgZXhjaGFuZ2U6IHtcclxuICAgICAgdXJsOiAnL3F1ZXJ5L2V4Y2hhbmdlJyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH0sXHJcbiAgICAvLyBmbeWIl+ihqFxyXG4gICAgZm06IHtcclxuICAgICAgdXJsOiAnL3F1ZXJ5L2ZtJyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH0sXHJcbiAgICAvLyBmbeWIl+ihqFxyXG4gICAgZGZtOiB7XHJcbiAgICAgIHVybDogJy9xdWVyeS9mbURldGFpbCcsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9XHJcbiAgfSxcclxuICBtb29kOiB7XHJcbiAgICAvLyDmlofnq6DliJfooahcclxuICAgIGFydGljbGU6IHtcclxuICAgICAgdXJsOiAnL2FydGljbGUvYXJ0aWNsZUxpc3QnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfSxcclxuICAgIC8vIOaWh+eroOivpuaDhVxyXG4gICAgYXJ0aWNsZWRldGFpbDoge1xyXG4gICAgICB1cmw6ICcvYXJ0aWNsZS9hcnRpY2xlU2hvdycsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9LFxyXG4gICAgLy8g5paH56ug5pS26JePXHJcbiAgICBhcnRpY2xlQ29sbGVjdDoge1xyXG4gICAgICB1cmw6ICcvYXJ0aWNsZS9hcnRpY2xlQ29sbGVjdCcsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9LFxyXG4gICAgLy8g5b+D55CG5YiX6KGoXHJcbiAgICBpbmRleDoge1xyXG4gICAgICB1cmw6ICcvcXVlcnkvaW5kZXgnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfSxcclxuICAgIC8vIOWPkeihqOW/g+aDhVxyXG4gICAgcGJtb29kOiB7XHJcbiAgICAgIHVybDogJy9xdWVyeS9pbmRleCcsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9LFxyXG4gICAgLy8g5Y+R5biD5ZKo6K+iXHJcbiAgICBhc2s6IHtcclxuICAgICAgdXJsOiAnL3F1ZXJ5L3F1ZXJ5JyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH0sXHJcbiAgICAvLyDljLvnlJ/lhoXpobVcclxuICAgIGRvY3Rvcjoge1xyXG4gICAgICB1cmw6ICcvcXVlcnkvZG9jdG9yRGV0YWlsJyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH0sXHJcbiAgICAvLyDppJDppa7lu7rorq5cclxuICAgIGZvb2Q6IHtcclxuICAgICAgdXJsOiAnL3N0dWR5L2Zvb2QnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcHVibGljOiB7XHJcbiAgICAvLyDkuIrkvKDlm77niYdcclxuICAgIHVwbG9hZDoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL3B1YmxpYy91cGxvYWRJbWcnXHJcbiAgICB9LFxyXG4gICAgLy8g5YWo5bGA5pWw5o2uXHJcbiAgICBnbG9iYWw6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9wdWJsaWMvZ2xvYmFsRGF0YSdcclxuICAgIH0sXHJcbiAgICAvLyDojrflj5bmlK/ku5jlj4LmlbBcclxuICAgIHBheToge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL3B1YmxpYy9wYXknXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi8vIOmAkuW9kuWkhOeQhnVybFxyXG5jb25zdCBkaXNwb3NlVXJsID0gKG9iaiwgcHJlVXJsKSA9PiB7XHJcbiAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XHJcbiAgICBpZiAob2JqW2tleV0udXJsKSB7XHJcbiAgICAgIG9ialtrZXldLnVybCA9IHByZVVybCArIG9ialtrZXldLnVybFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGlzcG9zZVVybChvYmpba2V5XSwgcHJlVXJsKVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIG9ialxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwb3NlVXJsKGFwaSwgaG9zdHNbZW52XSlcclxuIl19