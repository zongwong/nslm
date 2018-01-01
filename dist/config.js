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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJlbnYiLCJob3N0cyIsImRldmVsb3BtZW50IiwicHJvZHVjdGlvbiIsImFwaSIsInVzZXJzIiwibG9naW4iLCJtZXRob2QiLCJ1cmwiLCJzYXZlIiwiZ2V0IiwicHVibGlzaCIsImpvaW4iLCJteW1vb2QiLCJteWV4IiwibXl2aWRlbyIsIm15YXJ0aWNsZSIsImV4ZGV0YWlsIiwiYWN0aXZpdHkiLCJsaXN0IiwiYWRkIiwiaW5mbyIsInNpZ24iLCJjaXJjbGUiLCJ0b3AiLCJzaWduRGV0YWlsIiwiemFuIiwiY29tbWVudCIsIm15cHJvZ3Jlc3MiLCJzZWFyY2giLCJzaGFyZSIsInBibW9vZCIsImNvdXJzZSIsImNsaXN0IiwiZGV0YWlsIiwiY29sbGVjdCIsImV4Y2F0IiwiZXhsaXN0IiwiZXhjaGFuZ2UiLCJtb29kIiwiYXJ0aWNsZSIsImFydGljbGVkZXRhaWwiLCJhcnRpY2xlQ29sbGVjdCIsImluZGV4IiwiYXNrIiwiZG9jdG9yIiwiZm9vZCIsInB1YmxpYyIsInVwbG9hZCIsImdsb2JhbCIsImRpc3Bvc2VVcmwiLCJvYmoiLCJwcmVVcmwiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxNQUFNLFlBQVo7O0FBRUEsSUFBTUMsUUFBUTtBQUNaQyxlQUFhLDJCQUREO0FBRVpDLGNBQVk7O0FBR2Q7QUFMYyxDQUFkLENBTUEsSUFBTUMsTUFBTTtBQUNWQyxTQUFPO0FBQ0w7QUFDQUMsV0FBTztBQUNMQyxjQUFRLE1BREg7QUFFTEMsV0FBSztBQUZBLEtBRkY7QUFNTDtBQUNBQyxVQUFNO0FBQ0pGLGNBQVEsTUFESjtBQUVKQyxXQUFLO0FBRkQsS0FQRDtBQVdMO0FBQ0FFLFNBQUs7QUFDSEgsY0FBUSxNQURMO0FBRUhDLFdBQUs7QUFGRixLQVpBO0FBZ0JMO0FBQ0FHLGFBQVM7QUFDUEosY0FBUSxNQUREO0FBRVBDLFdBQUs7QUFGRSxLQWpCSjtBQXFC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QUFLLGNBREE7QUFFTEQsY0FBUTtBQUZILEtBakJIO0FBcUJKO0FBQ0F3QixZQUFRO0FBQ052QixXQUFLLGNBREM7QUFFTkQsY0FBUTtBQUZGLEtBdEJKO0FBMEJKO0FBQ0FxQyxTQUFLO0FBQ0hwQyxXQUFLLGNBREY7QUFFSEQsY0FBUTtBQUZMLEtBM0JEO0FBK0JKO0FBQ0FzQyxZQUFRO0FBQ05yQyxXQUFLLHFCQURDO0FBRU5ELGNBQVE7QUFGRixLQWhDSjtBQW9DSjtBQUNBdUMsVUFBTTtBQUNKdEMsV0FBSyxhQUREO0FBRUpELGNBQVE7QUFGSjtBQXJDRixHQXBLSTtBQThNVndDLFVBQVE7QUFDTjtBQUNBQyxZQUFRO0FBQ056QyxjQUFRLE1BREY7QUFFTkMsV0FBSztBQUZDLEtBRkY7QUFNTjtBQUNBeUMsWUFBUTtBQUNOMUMsY0FBUSxNQURGO0FBRU5DLFdBQUs7QUFGQztBQVBGO0FBYVY7QUEzTlksQ0FBWixDQTROQSxJQUFNMEMsYUFBYSxTQUFiQSxVQUFhLENBQUNDLEdBQUQsRUFBTUMsTUFBTixFQUFpQjtBQUNsQ0MsU0FBT0MsSUFBUCxDQUFZSCxHQUFaLEVBQWlCSSxPQUFqQixDQUF5QixVQUFDQyxHQUFELEVBQU1iLEtBQU4sRUFBZ0I7QUFDdkMsUUFBSVEsSUFBSUssR0FBSixFQUFTaEQsR0FBYixFQUFrQjtBQUNoQjJDLFVBQUlLLEdBQUosRUFBU2hELEdBQVQsR0FBZTRDLFNBQVNELElBQUlLLEdBQUosRUFBU2hELEdBQWpDO0FBQ0QsS0FGRCxNQUVPO0FBQ0wwQyxpQkFBV0MsSUFBSUssR0FBSixDQUFYLEVBQXFCSixNQUFyQjtBQUNEO0FBQ0YsR0FORDtBQU9BLFNBQU9ELEdBQVA7QUFDRCxDQVREOztrQkFXZUQsV0FBVzlDLEdBQVgsRUFBZ0JILE1BQU1ELEdBQU4sQ0FBaEIsQyIsImZpbGUiOiJjb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlbnYgPSAncHJvZHVjdGlvbidcclxuXHJcbmNvbnN0IGhvc3RzID0ge1xyXG4gIGRldmVsb3BtZW50OiAnaHR0cDovL2xhZHkuemRncGhwLmNuL2FwaScsXHJcbiAgcHJvZHVjdGlvbjogJ2h0dHBzOi8vd3d3LjJwOTguY24vYXBpJ1xyXG59XHJcblxyXG4vLyBhcGnliJfooahcclxuY29uc3QgYXBpID0ge1xyXG4gIHVzZXJzOiB7XHJcbiAgICAvLyDnlKjmiLfnmbvlvZVcclxuICAgIGxvZ2luOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvdXNlcnMvbG9naW4nXHJcbiAgICB9LFxyXG4gICAgLy8g57yW6L6R6LWE5paZXHJcbiAgICBzYXZlOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvdXNlcnMvZWRpdFVzZXJJbmZvJ1xyXG4gICAgfSxcclxuICAgIC8vIOiOt+WPlueUqOaIt+i1hOaWmVxyXG4gICAgZ2V0OiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvdXNlcnMvdXNlckluZm8nXHJcbiAgICB9LFxyXG4gICAgLy8g5oiR55qE5Y+R5biDXHJcbiAgICBwdWJsaXNoOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvdXNlcnMvbXlBY3Rpdml0eSdcclxuICAgIH0sXHJcbiAgICAvLyDmiJHnmoTlj4LkuI5cclxuICAgIGpvaW46IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy91c2Vycy9teUpvaW5BY3Rpdml0eSdcclxuICAgIH0sXHJcbiAgICAvLyDmiJHnmoTlv4Pmg4VcclxuICAgIG15bW9vZDoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL3VzZXJzL215TW9vZCdcclxuICAgIH0sXHJcbiAgICAvLyDmiJHnmoTlhZHmjaJcclxuICAgIG15ZXg6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy91c2Vycy9teUV4Y2hhbmdlJ1xyXG4gICAgfSxcclxuICAgIC8vIOaIkeeahOinhumikVxyXG4gICAgbXl2aWRlbzoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL3VzZXJzL215U3R1ZHknXHJcbiAgICB9LFxyXG4gICAgLy8g5oiR55qE5paH56ugXHJcbiAgICBteWFydGljbGU6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy91c2Vycy9teUFydGljbGUnXHJcbiAgICB9LFxyXG4gICAgLy8g5YWR5o2i6K+m5oOFXHJcbiAgICBleGRldGFpbDoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL3F1ZXJ5L2V4Y2hhbmdlRGV0YWlsJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWN0aXZpdHk6IHtcclxuICAgIC8vIOmmlumhtea0u+WKqOWIl+ihqFxyXG4gICAgbGlzdDoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2FjdGl2aXR5TGlzdCdcclxuICAgIH0sXHJcbiAgICAvLyDliJvlu7rmtLvliqhcclxuICAgIGFkZDoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2FjdGl2aXR5QWRkJ1xyXG4gICAgfSxcclxuICAgIC8vIOa0u+WKqOivpuaDhVxyXG4gICAgaW5mbzoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2FjdGl2aXR5U2hvdydcclxuICAgIH0sXHJcbiAgICAvLyDlj4LliqDmtLvliqhcclxuICAgIGpvaW46IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY3Rpdml0eS9hY3Rpdml0eUpvaW4nXHJcbiAgICB9LFxyXG4gICAgLy8g5omT5Y2hXHJcbiAgICBzaWduOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWN0aXZpdHkvY2xvY2snXHJcbiAgICB9LFxyXG4gICAgLy8g5omT5Y2h5ZyIXHJcbiAgICBjaXJjbGU6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY3Rpdml0eS9jbG9ja0NpcmNsZSdcclxuICAgIH0sXHJcbiAgICAvLyDmiZPljaHmjpLooYzmppxcclxuICAgIHRvcDoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2Nsb2NrUmFuaydcclxuICAgIH0sXHJcbiAgICAvLyDmiZPljaHor6bmg4VcclxuICAgIHNpZ25EZXRhaWw6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY3Rpdml0eS9jbG9ja0RldGFpbCdcclxuICAgIH0sXHJcbiAgICAvLyDngrnotZ5cclxuICAgIHphbjoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2Nsb2NrWmFuJ1xyXG4gICAgfSxcclxuICAgIC8vIOivhOiuuuaJk+WNoVxyXG4gICAgY29tbWVudDoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2Nsb2NrQ29tbWVudCdcclxuICAgIH0sXHJcbiAgICAvLyDmiJHnmoTmiZPljaHov5vluqZcclxuICAgIG15cHJvZ3Jlc3M6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY3Rpdml0eS9jbG9ja015J1xyXG4gICAgfSxcclxuICAgIC8vIHBr5pCc57SiXHJcbiAgICBzZWFyY2g6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY3Rpdml0eS9hY3Rpdml0eVNlYXJjaCdcclxuICAgIH0sXHJcbiAgICAvLyBzaGFyZVxyXG4gICAgc2hhcmU6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY3Rpdml0eS9hY3Rpdml0eVNoYXJlJ1xyXG4gICAgfSxcclxuICAgIC8vIOWPkeihqOW/g+aDhVxyXG4gICAgcGJtb29kOiB7XHJcbiAgICAgIHVybDogJy9xdWVyeS9jcmVhdGVNb29kJyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH0sXHJcbiAgICAvLyDor77nqIvor4TorrpcclxuICAgIGNvdXJzZToge1xyXG4gICAgICB1cmw6ICcvc3R1ZHkvc3R1ZHlDb21tZW50JyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH1cclxuICB9LFxyXG4gIGNvdXJzZToge1xyXG4gICAgbGlzdDoge1xyXG4gICAgICB1cmw6ICcvc3R1ZHkvc3R1ZHlUeXBlTGlzdCcsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9LFxyXG4gICAgY2xpc3Q6IHtcclxuICAgICAgdXJsOiAnL3N0dWR5L3N0dWR5TGlzdCcsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9LFxyXG4gICAgZGV0YWlsOiB7XHJcbiAgICAgIHVybDogJy9zdHVkeS9zdHVkeURldGFpbCcsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9LFxyXG4gICAgLy8g5pS26JePXHJcbiAgICBjb2xsZWN0OiB7XHJcbiAgICAgIHVybDogJy9zdHVkeS9zdHVkeUNvbGxlY3QnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfSxcclxuICAgIC8vIOWFkeaNouWIhuexu1xyXG4gICAgZXhjYXQ6IHtcclxuICAgICAgdXJsOiAnL3F1ZXJ5L2V4Y2hhbmdlVHlwZScsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9LFxyXG4gICAgLy8g5YWR5o2i5YiX6KGoXHJcbiAgICBleGxpc3Q6IHtcclxuICAgICAgdXJsOiAnL3F1ZXJ5L2V4Y2hhbmdlTGlzdCcsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9LFxyXG4gICAgLy8g5YWR5o2iXHJcbiAgICBleGNoYW5nZToge1xyXG4gICAgICB1cmw6ICcvcXVlcnkvZXhjaGFuZ2UnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbW9vZDoge1xyXG4gICAgLy8g5paH56ug5YiX6KGoXHJcbiAgICBhcnRpY2xlOiB7XHJcbiAgICAgIHVybDogJy9hcnRpY2xlL2FydGljbGVMaXN0JyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH0sXHJcbiAgICAvLyDmlofnq6Dor6bmg4VcclxuICAgIGFydGljbGVkZXRhaWw6IHtcclxuICAgICAgdXJsOiAnL2FydGljbGUvYXJ0aWNsZVNob3cnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfSxcclxuICAgIC8vIOaWh+eroOaUtuiXj1xyXG4gICAgYXJ0aWNsZUNvbGxlY3Q6IHtcclxuICAgICAgdXJsOiAnL2FydGljbGUvYXJ0aWNsZUNvbGxlY3QnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfSxcclxuICAgIC8vIOW/g+eQhuWIl+ihqFxyXG4gICAgaW5kZXg6IHtcclxuICAgICAgdXJsOiAnL3F1ZXJ5L2luZGV4JyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH0sXHJcbiAgICAvLyDlj5Hooajlv4Pmg4VcclxuICAgIHBibW9vZDoge1xyXG4gICAgICB1cmw6ICcvcXVlcnkvaW5kZXgnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfSxcclxuICAgIC8vIOWPkeW4g+WSqOivolxyXG4gICAgYXNrOiB7XHJcbiAgICAgIHVybDogJy9xdWVyeS9xdWVyeScsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9LFxyXG4gICAgLy8g5Yy755Sf5YaF6aG1XHJcbiAgICBkb2N0b3I6IHtcclxuICAgICAgdXJsOiAnL3F1ZXJ5L2RvY3RvckRldGFpbCcsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9LFxyXG4gICAgLy8g6aSQ6aWu5bu66K6uXHJcbiAgICBmb29kOiB7XHJcbiAgICAgIHVybDogJy9zdHVkeS9mb29kJyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH1cclxuICB9LFxyXG4gIHB1YmxpYzoge1xyXG4gICAgLy8g5LiK5Lyg5Zu+54mHXHJcbiAgICB1cGxvYWQ6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9wdWJsaWMvdXBsb2FkSW1nJ1xyXG4gICAgfSxcclxuICAgIC8vIOWFqOWxgOaVsOaNrlxyXG4gICAgZ2xvYmFsOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvcHVibGljL2dsb2JhbERhdGEnXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi8vIOmAkuW9kuWkhOeQhnVybFxyXG5jb25zdCBkaXNwb3NlVXJsID0gKG9iaiwgcHJlVXJsKSA9PiB7XHJcbiAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XHJcbiAgICBpZiAob2JqW2tleV0udXJsKSB7XHJcbiAgICAgIG9ialtrZXldLnVybCA9IHByZVVybCArIG9ialtrZXldLnVybFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGlzcG9zZVVybChvYmpba2V5XSwgcHJlVXJsKVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIG9ialxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwb3NlVXJsKGFwaSwgaG9zdHNbZW52XSlcclxuIl19