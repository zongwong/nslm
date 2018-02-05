'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var env = 'production';

var hosts = {
  development: 'http://lady.zdgphp.cn/api',
  production: 'https://www.nskcb.com/api'

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJlbnYiLCJob3N0cyIsImRldmVsb3BtZW50IiwicHJvZHVjdGlvbiIsImFwaSIsInVzZXJzIiwibG9naW4iLCJtZXRob2QiLCJ1cmwiLCJzYXZlIiwiZ2V0IiwicHVibGlzaCIsImpvaW4iLCJteW1vb2QiLCJteWV4IiwibXl2aWRlbyIsIm15YXJ0aWNsZSIsImV4ZGV0YWlsIiwiY2FyZCIsIndpdGhkcmF3IiwibW9uZXlkZXRhaWwiLCJhY3Rpdml0eSIsImxpc3QiLCJhZGQiLCJpbmZvIiwic2lnbiIsImNpcmNsZSIsInRvcCIsInNpZ25EZXRhaWwiLCJ6YW4iLCJjb21tZW50IiwibXlwcm9ncmVzcyIsInNlYXJjaCIsInNoYXJlIiwicGJtb29kIiwiY291cnNlIiwiY2xpc3QiLCJkZXRhaWwiLCJjb2xsZWN0IiwiZXhjYXQiLCJleGxpc3QiLCJleGNoYW5nZSIsImZtIiwiZGZtIiwibW9vZCIsImFydGljbGUiLCJhcnRpY2xlZGV0YWlsIiwiYXJ0aWNsZUNvbGxlY3QiLCJpbmRleCIsImFzayIsImRvY3RvciIsImZvb2QiLCJwdWJsaWMiLCJ1cGxvYWQiLCJnbG9iYWwiLCJwYXkiLCJkaXNwb3NlVXJsIiwib2JqIiwicHJlVXJsIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsTUFBTSxZQUFaOztBQUVBLElBQU1DLFFBQVE7QUFDWkMsZUFBYSwyQkFERDtBQUVaQyxjQUFZOztBQUdkO0FBTGMsQ0FBZCxDQU1BLElBQU1DLE1BQU07QUFDVkMsU0FBTztBQUNMO0FBQ0FDLFdBQU87QUFDTEMsY0FBUSxNQURIO0FBRUxDLFdBQUs7QUFGQSxLQUZGO0FBTUw7QUFDQUMsVUFBTTtBQUNKRixjQUFRLE1BREo7QUFFSkMsV0FBSztBQUZELEtBUEQ7QUFXTDtBQUNBRSxTQUFLO0FBQ0hILGNBQVEsTUFETDtBQUVIQyxXQUFLO0FBRkYsS0FaQTtBQWdCTDtBQUNB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LFVBQUNDLEdBQUQsRUFBTWQsS0FBTixFQUFnQjtBQUN2QyxRQUFJUyxJQUFJSyxHQUFKLEVBQVN0RCxHQUFiLEVBQWtCO0FBQ2hCaUQsVUFBSUssR0FBSixFQUFTdEQsR0FBVCxHQUFla0QsU0FBU0QsSUFBSUssR0FBSixFQUFTdEQsR0FBakM7QUFDRCxLQUZELE1BRU87QUFDTGdELGlCQUFXQyxJQUFJSyxHQUFKLENBQVgsRUFBcUJKLE1BQXJCO0FBQ0Q7QUFDRixHQU5EO0FBT0EsU0FBT0QsR0FBUDtBQUNELENBVEQ7O2tCQVdlRCxXQUFXcEQsR0FBWCxFQUFnQkgsTUFBTUQsR0FBTixDQUFoQixDIiwiZmlsZSI6ImNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGVudiA9ICdwcm9kdWN0aW9uJ1xyXG5cclxuY29uc3QgaG9zdHMgPSB7XHJcbiAgZGV2ZWxvcG1lbnQ6ICdodHRwOi8vbGFkeS56ZGdwaHAuY24vYXBpJyxcclxuICBwcm9kdWN0aW9uOiAnaHR0cHM6Ly93d3cubnNrY2IuY29tL2FwaSdcclxufVxyXG5cclxuLy8gYXBp5YiX6KGoXHJcbmNvbnN0IGFwaSA9IHtcclxuICB1c2Vyczoge1xyXG4gICAgLy8g55So5oi355m75b2VXHJcbiAgICBsb2dpbjoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL3VzZXJzL2xvZ2luJ1xyXG4gICAgfSxcclxuICAgIC8vIOe8lui+kei1hOaWmVxyXG4gICAgc2F2ZToge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL3VzZXJzL2VkaXRVc2VySW5mbydcclxuICAgIH0sXHJcbiAgICAvLyDojrflj5bnlKjmiLfotYTmlplcclxuICAgIGdldDoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL3VzZXJzL3VzZXJJbmZvJ1xyXG4gICAgfSxcclxuICAgIC8vIOaIkeeahOWPkeW4g1xyXG4gICAgcHVibGlzaDoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL3VzZXJzL215QWN0aXZpdHknXHJcbiAgICB9LFxyXG4gICAgLy8g5oiR55qE5Y+C5LiOXHJcbiAgICBqb2luOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvdXNlcnMvbXlKb2luQWN0aXZpdHknXHJcbiAgICB9LFxyXG4gICAgLy8g5oiR55qE5b+D5oOFXHJcbiAgICBteW1vb2Q6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy91c2Vycy9teU1vb2QnXHJcbiAgICB9LFxyXG4gICAgLy8g5oiR55qE5YWR5o2iXHJcbiAgICBteWV4OiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvdXNlcnMvbXlFeGNoYW5nZSdcclxuICAgIH0sXHJcbiAgICAvLyDmiJHnmoTop4bpopFcclxuICAgIG15dmlkZW86IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy91c2Vycy9teVN0dWR5J1xyXG4gICAgfSxcclxuICAgIC8vIOaIkeeahOaWh+eroFxyXG4gICAgbXlhcnRpY2xlOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvdXNlcnMvbXlBcnRpY2xlJ1xyXG4gICAgfSxcclxuICAgIC8vIOWFkeaNouivpuaDhVxyXG4gICAgZXhkZXRhaWw6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9xdWVyeS9leGNoYW5nZURldGFpbCdcclxuICAgIH0sXHJcbiAgICAvLyDnu5Hlrprpk7booYzljaFcclxuICAgIGNhcmQ6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy91c2Vycy9iaW5kQmFua0FjY291bnQnXHJcbiAgICB9LFxyXG4gICAgLy8g5o+Q546wXHJcbiAgICB3aXRoZHJhdzoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL3VzZXJzL3dpdGhkcmF3J1xyXG4gICAgfSxcclxuICAgIC8vIOWllumHkeaYjue7hlxyXG4gICAgbW9uZXlkZXRhaWw6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy91c2Vycy9hY2NvdW50RGV0YWlsJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWN0aXZpdHk6IHtcclxuICAgIC8vIOmmlumhtea0u+WKqOWIl+ihqFxyXG4gICAgbGlzdDoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2FjdGl2aXR5TGlzdCdcclxuICAgIH0sXHJcbiAgICAvLyDliJvlu7rmtLvliqhcclxuICAgIGFkZDoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2FjdGl2aXR5QWRkJ1xyXG4gICAgfSxcclxuICAgIC8vIOa0u+WKqOivpuaDhVxyXG4gICAgaW5mbzoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2FjdGl2aXR5U2hvdydcclxuICAgIH0sXHJcbiAgICAvLyDlj4LliqDmtLvliqhcclxuICAgIGpvaW46IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY3Rpdml0eS9hY3Rpdml0eUpvaW4nXHJcbiAgICB9LFxyXG4gICAgLy8g5omT5Y2hXHJcbiAgICBzaWduOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWN0aXZpdHkvY2xvY2snXHJcbiAgICB9LFxyXG4gICAgLy8g5omT5Y2h5ZyIXHJcbiAgICBjaXJjbGU6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY3Rpdml0eS9jbG9ja0NpcmNsZSdcclxuICAgIH0sXHJcbiAgICAvLyDmiZPljaHmjpLooYzmppxcclxuICAgIHRvcDoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2Nsb2NrUmFuaydcclxuICAgIH0sXHJcbiAgICAvLyDmiZPljaHor6bmg4VcclxuICAgIHNpZ25EZXRhaWw6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY3Rpdml0eS9jbG9ja0RldGFpbCdcclxuICAgIH0sXHJcbiAgICAvLyDngrnotZ5cclxuICAgIHphbjoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2Nsb2NrWmFuJ1xyXG4gICAgfSxcclxuICAgIC8vIOivhOiuuuaJk+WNoVxyXG4gICAgY29tbWVudDoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2Nsb2NrQ29tbWVudCdcclxuICAgIH0sXHJcbiAgICAvLyDmiJHnmoTmiZPljaHov5vluqZcclxuICAgIG15cHJvZ3Jlc3M6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY3Rpdml0eS9jbG9ja015J1xyXG4gICAgfSxcclxuICAgIC8vIHBr5pCc57SiXHJcbiAgICBzZWFyY2g6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY3Rpdml0eS9hY3Rpdml0eVNlYXJjaCdcclxuICAgIH0sXHJcbiAgICAvLyBzaGFyZVxyXG4gICAgc2hhcmU6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY3Rpdml0eS9hY3Rpdml0eVNoYXJlJ1xyXG4gICAgfSxcclxuICAgIC8vIOWPkeihqOW/g+aDhVxyXG4gICAgcGJtb29kOiB7XHJcbiAgICAgIHVybDogJy9xdWVyeS9jcmVhdGVNb29kJyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH0sXHJcbiAgICAvLyDor77nqIvor4TorrpcclxuICAgIGNvdXJzZToge1xyXG4gICAgICB1cmw6ICcvc3R1ZHkvc3R1ZHlDb21tZW50JyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH1cclxuICB9LFxyXG4gIGNvdXJzZToge1xyXG4gICAgbGlzdDoge1xyXG4gICAgICB1cmw6ICcvc3R1ZHkvc3R1ZHlUeXBlTGlzdCcsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9LFxyXG4gICAgY2xpc3Q6IHtcclxuICAgICAgdXJsOiAnL3N0dWR5L3N0dWR5TGlzdCcsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9LFxyXG4gICAgZGV0YWlsOiB7XHJcbiAgICAgIHVybDogJy9zdHVkeS9zdHVkeURldGFpbCcsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9LFxyXG4gICAgLy8g5pS26JePXHJcbiAgICBjb2xsZWN0OiB7XHJcbiAgICAgIHVybDogJy9zdHVkeS9zdHVkeUNvbGxlY3QnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfSxcclxuICAgIC8vIOWFkeaNouWIhuexu1xyXG4gICAgZXhjYXQ6IHtcclxuICAgICAgdXJsOiAnL3F1ZXJ5L2V4Y2hhbmdlVHlwZScsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9LFxyXG4gICAgLy8g5YWR5o2i5YiX6KGoXHJcbiAgICBleGxpc3Q6IHtcclxuICAgICAgdXJsOiAnL3F1ZXJ5L2V4Y2hhbmdlTGlzdCcsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9LFxyXG4gICAgLy8g5YWR5o2iXHJcbiAgICBleGNoYW5nZToge1xyXG4gICAgICB1cmw6ICcvcXVlcnkvZXhjaGFuZ2UnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfSxcclxuICAgIC8vIGZt5YiX6KGoXHJcbiAgICBmbToge1xyXG4gICAgICB1cmw6ICcvcXVlcnkvZm0nLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfSxcclxuICAgIC8vIGZt5YiX6KGoXHJcbiAgICBkZm06IHtcclxuICAgICAgdXJsOiAnL3F1ZXJ5L2ZtRGV0YWlsJyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH1cclxuICB9LFxyXG4gIG1vb2Q6IHtcclxuICAgIC8vIOaWh+eroOWIl+ihqFxyXG4gICAgYXJ0aWNsZToge1xyXG4gICAgICB1cmw6ICcvYXJ0aWNsZS9hcnRpY2xlTGlzdCcsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9LFxyXG4gICAgLy8g5paH56ug6K+m5oOFXHJcbiAgICBhcnRpY2xlZGV0YWlsOiB7XHJcbiAgICAgIHVybDogJy9hcnRpY2xlL2FydGljbGVTaG93JyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH0sXHJcbiAgICAvLyDmlofnq6DmlLbol49cclxuICAgIGFydGljbGVDb2xsZWN0OiB7XHJcbiAgICAgIHVybDogJy9hcnRpY2xlL2FydGljbGVDb2xsZWN0JyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH0sXHJcbiAgICAvLyDlv4PnkIbliJfooahcclxuICAgIGluZGV4OiB7XHJcbiAgICAgIHVybDogJy9xdWVyeS9pbmRleCcsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9LFxyXG4gICAgLy8g5Y+R6KGo5b+D5oOFXHJcbiAgICBwYm1vb2Q6IHtcclxuICAgICAgdXJsOiAnL3F1ZXJ5L2luZGV4JyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH0sXHJcbiAgICAvLyDlj5HluIPlkqjor6JcclxuICAgIGFzazoge1xyXG4gICAgICB1cmw6ICcvcXVlcnkvcXVlcnknLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfSxcclxuICAgIC8vIOWMu+eUn+WGhemhtVxyXG4gICAgZG9jdG9yOiB7XHJcbiAgICAgIHVybDogJy9xdWVyeS9kb2N0b3JEZXRhaWwnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfSxcclxuICAgIC8vIOmkkOmlruW7uuiurlxyXG4gICAgZm9vZDoge1xyXG4gICAgICB1cmw6ICcvc3R1ZHkvZm9vZCcsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9XHJcbiAgfSxcclxuICBwdWJsaWM6IHtcclxuICAgIC8vIOS4iuS8oOWbvueJh1xyXG4gICAgdXBsb2FkOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvcHVibGljL3VwbG9hZEltZydcclxuICAgIH0sXHJcbiAgICAvLyDlhajlsYDmlbDmja5cclxuICAgIGdsb2JhbDoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL3B1YmxpYy9nbG9iYWxEYXRhJ1xyXG4gICAgfSxcclxuICAgIC8vIOiOt+WPluaUr+S7mOWPguaVsFxyXG4gICAgcGF5OiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvcHVibGljL3BheSdcclxuICAgIH1cclxuICB9XHJcbn1cclxuLy8g6YCS5b2S5aSE55CGdXJsXHJcbmNvbnN0IGRpc3Bvc2VVcmwgPSAob2JqLCBwcmVVcmwpID0+IHtcclxuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcclxuICAgIGlmIChvYmpba2V5XS51cmwpIHtcclxuICAgICAgb2JqW2tleV0udXJsID0gcHJlVXJsICsgb2JqW2tleV0udXJsXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXNwb3NlVXJsKG9ialtrZXldLCBwcmVVcmwpXHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4gb2JqXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3Bvc2VVcmwoYXBpLCBob3N0c1tlbnZdKVxyXG4iXX0=