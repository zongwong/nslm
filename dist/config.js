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
    },
    // 发表心情
    pbmood: {
      url: '/query/createMood',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJlbnYiLCJob3N0cyIsImRldmVsb3BtZW50IiwicHJvZHVjdGlvbiIsImFwaSIsInVzZXJzIiwibG9naW4iLCJtZXRob2QiLCJ1cmwiLCJzYXZlIiwiZ2V0IiwicHVibGlzaCIsImpvaW4iLCJhY3Rpdml0eSIsImxpc3QiLCJhZGQiLCJpbmZvIiwic2lnbiIsImNpcmNsZSIsIm15cHJvZ3Jlc3MiLCJzZWFyY2giLCJzaGFyZSIsInBibW9vZCIsImNvdXJzZSIsImNsaXN0IiwiZGV0YWlsIiwiY29sbGVjdCIsImV4Y2F0IiwiZXhsaXN0IiwiZXhjaGFuZ2UiLCJtb29kIiwiYXJ0aWNsZSIsImFydGljbGVkZXRhaWwiLCJpbmRleCIsImFzayIsImRvY3RvciIsInB1YmxpYyIsInVwbG9hZCIsImdsb2JhbCIsImRpc3Bvc2VVcmwiLCJvYmoiLCJwcmVVcmwiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxNQUFNLFlBQVo7O0FBRUEsSUFBTUMsUUFBUTtBQUNaQyxlQUFhLDJCQUREO0FBRVpDLGNBQVk7O0FBR2Q7QUFMYyxDQUFkLENBTUEsSUFBTUMsTUFBTTtBQUNWQyxTQUFPO0FBQ0w7QUFDQUMsV0FBTztBQUNMQyxjQUFRLE1BREg7QUFFTEMsV0FBSztBQUZBLEtBRkY7QUFNTDtBQUNBQyxVQUFNO0FBQ0pGLGNBQVEsTUFESjtBQUVKQyxXQUFLO0FBRkQsS0FQRDtBQVdMO0FBQ0FFLFNBQUs7QUFDSEgsY0FBUSxNQURMO0FBRUhDLFdBQUs7QUFGRixLQVpBO0FBZ0JMO0FBQ0FHLGFBQVM7QUFDUEosY0FBUSxNQUREO0FBRVBDLFdBQUs7QUFGRSxLQWpCSjtBQXFCTDtBQUNBSSxVQUFNO0FBQ0pMLGNBQVEsTUFESjtBQUVKQyxXQUFLO0FBRkQ7QUF0QkQsR0FERztBQTRCVkssWUFBVTtBQUNSO0FBQ0FDLFVBQU07QUFDSlAsY0FBUSxNQURKO0FBRUpDLFdBQUs7QUFGRCxLQUZFO0FBTVI7QUFDQU8sU0FBSztBQUNIUixjQUFRLE1BREw7QUFFSEMsV0FBSztBQUZGLEtBUEc7QUFXUjtBQUNBUSxVQUFNO0FBQ0pULGNBQVEsTUFESjtBQUVKQyxXQUFLO0FBRkQsS0FaRTtBQWdCUjtBQUNBSSxVQUFNO0FBQ0pMLGNBQVEsTUFESjtBQUVKQyxXQUFLO0FBRkQsS0FqQkU7QUFxQlI7QUFDQVMsVUFBTTtBQUNKVixjQUFRLE1BREo7QUFFSkMsV0FBSztBQUZELEtBdEJFO0FBMEJSO0FBQ0FVLFlBQVE7QUFDTlgsY0FBUSxNQURGO0FBRU5DLFdBQUs7QUFGQyxLQTNCQTtBQStCUjtBQUNBVyxnQkFBWTtBQUNWWixjQUFRLE1BREU7QUFFVkMsV0FBSztBQUZLLEtBaENKO0FBb0NSO0FBQ0FZLFlBQVE7QUFDTmIsY0FBUSxNQURGO0FBRU5DLFdBQUs7QUFGQyxLQXJDQTtBQXlDUjtBQUNBYSxXQUFPO0FBQ0xkLGNBQVEsTUFESDtBQUVMQyxXQUFLO0FBRkEsS0ExQ0M7QUE4Q1I7QUFDQWMsWUFBUTtBQUNOZCxXQUFLLG1CQURDO0FBRU5ELGNBQVE7QUFGRjtBQS9DQSxHQTVCQTtBQWdGVmdCLFVBQVE7QUFDTlQsVUFBTTtBQUNKTixXQUFLLHNCQUREO0FBRUpELGNBQVE7QUFGSixLQURBO0FBS05pQixXQUFPO0FBQ0xoQixXQUFLLGtCQURBO0FBRUxELGNBQVE7QUFGSCxLQUxEO0FBU05rQixZQUFRO0FBQ05qQixXQUFLLG9CQURDO0FBRU5ELGNBQVE7QUFGRixLQVRGO0FBYU47QUFDQW1CLGFBQVM7QUFDUGxCLFdBQUsscUJBREU7QUFFUEQsY0FBUTtBQUZELEtBZEg7QUFrQk47QUFDQW9CLFdBQU87QUFDTG5CLFdBQUsscUJBREE7QUFFTEQsY0FBUTtBQUZILEtBbkJEO0FBdUJOO0FBQ0FxQixZQUFRO0FBQ05wQixXQUFLLHFCQURDO0FBRU5ELGNBQVE7QUFGRixLQXhCRjtBQTRCTjtBQUNBc0IsY0FBVTtBQUNSckIsV0FBSyxpQkFERztBQUVSRCxjQUFRO0FBRkE7QUE3QkosR0FoRkU7QUFrSFZ1QixRQUFNO0FBQ0o7QUFDQUMsYUFBUztBQUNQdkIsV0FBSyxzQkFERTtBQUVQRCxjQUFRO0FBRkQsS0FGTDtBQU1KO0FBQ0F5QixtQkFBZTtBQUNieEIsV0FBSyxzQkFEUTtBQUViRCxjQUFRO0FBRkssS0FQWDtBQVdKO0FBQ0EwQixXQUFPO0FBQ0x6QixXQUFLLGNBREE7QUFFTEQsY0FBUTtBQUZILEtBWkg7QUFnQko7QUFDQWUsWUFBUTtBQUNOZCxXQUFLLGNBREM7QUFFTkQsY0FBUTtBQUZGLEtBakJKO0FBcUJKO0FBQ0EyQixTQUFLO0FBQ0gxQixXQUFLLGNBREY7QUFFSEQsY0FBUTtBQUZMLEtBdEJEO0FBMEJKO0FBQ0E0QixZQUFRO0FBQ04zQixXQUFLLHFCQURDO0FBRU5ELGNBQVE7QUFGRjtBQTNCSixHQWxISTtBQWtKVjZCLFVBQVE7QUFDTjtBQUNBQyxZQUFRO0FBQ045QixjQUFRLE1BREY7QUFFTkMsV0FBSztBQUZDLEtBRkY7QUFNTjtBQUNBOEIsWUFBUTtBQUNOL0IsY0FBUSxNQURGO0FBRU5DLFdBQUs7QUFGQztBQVBGO0FBYVY7QUEvSlksQ0FBWixDQWdLQSxJQUFNK0IsYUFBYSxTQUFiQSxVQUFhLENBQUNDLEdBQUQsRUFBTUMsTUFBTixFQUFpQjtBQUNsQ0MsU0FBT0MsSUFBUCxDQUFZSCxHQUFaLEVBQWlCSSxPQUFqQixDQUF5QixVQUFDQyxHQUFELEVBQU1aLEtBQU4sRUFBZ0I7QUFDdkMsUUFBSU8sSUFBSUssR0FBSixFQUFTckMsR0FBYixFQUFrQjtBQUNoQmdDLFVBQUlLLEdBQUosRUFBU3JDLEdBQVQsR0FBZWlDLFNBQVNELElBQUlLLEdBQUosRUFBU3JDLEdBQWpDO0FBQ0QsS0FGRCxNQUVPO0FBQ0wrQixpQkFBV0MsSUFBSUssR0FBSixDQUFYLEVBQXFCSixNQUFyQjtBQUNEO0FBQ0YsR0FORDtBQU9BLFNBQU9ELEdBQVA7QUFDRCxDQVREOztrQkFXZUQsV0FBV25DLEdBQVgsRUFBZ0JILE1BQU1ELEdBQU4sQ0FBaEIsQyIsImZpbGUiOiJjb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlbnYgPSAncHJvZHVjdGlvbidcclxuXHJcbmNvbnN0IGhvc3RzID0ge1xyXG4gIGRldmVsb3BtZW50OiAnaHR0cDovL2xhZHkuemRncGhwLmNuL2FwaScsXHJcbiAgcHJvZHVjdGlvbjogJ2h0dHBzOi8vd3d3LjJwOTguY24vYXBpJ1xyXG59XHJcblxyXG4vLyBhcGnliJfooahcclxuY29uc3QgYXBpID0ge1xyXG4gIHVzZXJzOiB7XHJcbiAgICAvLyDnlKjmiLfnmbvlvZVcclxuICAgIGxvZ2luOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvdXNlcnMvbG9naW4nXHJcbiAgICB9LFxyXG4gICAgLy8g57yW6L6R6LWE5paZXHJcbiAgICBzYXZlOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvdXNlcnMvZWRpdFVzZXJJbmZvJ1xyXG4gICAgfSxcclxuICAgIC8vIOiOt+WPlueUqOaIt+i1hOaWmVxyXG4gICAgZ2V0OiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvdXNlcnMvdXNlckluZm8nXHJcbiAgICB9LFxyXG4gICAgLy8g5oiR55qE5Y+R5biDXHJcbiAgICBwdWJsaXNoOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvdXNlcnMvbXlBY3Rpdml0eSdcclxuICAgIH0sXHJcbiAgICAvLyDmiJHnmoTlj4LkuI5cclxuICAgIGpvaW46IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy91c2Vycy9teUpvaW5BY3Rpdml0eSdcclxuICAgIH1cclxuICB9LFxyXG4gIGFjdGl2aXR5OiB7XHJcbiAgICAvLyDpppbpobXmtLvliqjliJfooahcclxuICAgIGxpc3Q6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY3Rpdml0eS9hY3Rpdml0eUxpc3QnXHJcbiAgICB9LFxyXG4gICAgLy8g5Yib5bu65rS75YqoXHJcbiAgICBhZGQ6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY3Rpdml0eS9hY3Rpdml0eUFkZCdcclxuICAgIH0sXHJcbiAgICAvLyDmtLvliqjor6bmg4VcclxuICAgIGluZm86IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY3Rpdml0eS9hY3Rpdml0eVNob3cnXHJcbiAgICB9LFxyXG4gICAgLy8g5Y+C5Yqg5rS75YqoXHJcbiAgICBqb2luOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWN0aXZpdHkvYWN0aXZpdHlKb2luJ1xyXG4gICAgfSxcclxuICAgIC8vIOaJk+WNoVxyXG4gICAgc2lnbjoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2Nsb2NrJ1xyXG4gICAgfSxcclxuICAgIC8vIOaJk+WNoeWciFxyXG4gICAgY2lyY2xlOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWN0aXZpdHkvY2xvY2tDaXJjbGUnXHJcbiAgICB9LFxyXG4gICAgLy8g5oiR55qE5omT5Y2h6L+b5bqmXHJcbiAgICBteXByb2dyZXNzOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWN0aXZpdHkvY2xvY2tNeSdcclxuICAgIH0sXHJcbiAgICAvLyBwa+aQnOe0olxyXG4gICAgc2VhcmNoOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWN0aXZpdHkvYWN0aXZpdHlTZWFyY2gnXHJcbiAgICB9LFxyXG4gICAgLy8gc2hhcmVcclxuICAgIHNoYXJlOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWN0aXZpdHkvYWN0aXZpdHlTaGFyZSdcclxuICAgIH0sXHJcbiAgICAvLyDlj5Hooajlv4Pmg4VcclxuICAgIHBibW9vZDoge1xyXG4gICAgICB1cmw6ICcvcXVlcnkvY3JlYXRlTW9vZCcsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb3Vyc2U6IHtcclxuICAgIGxpc3Q6IHtcclxuICAgICAgdXJsOiAnL3N0dWR5L3N0dWR5VHlwZUxpc3QnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfSxcclxuICAgIGNsaXN0OiB7XHJcbiAgICAgIHVybDogJy9zdHVkeS9zdHVkeUxpc3QnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfSxcclxuICAgIGRldGFpbDoge1xyXG4gICAgICB1cmw6ICcvc3R1ZHkvc3R1ZHlEZXRhaWwnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfSxcclxuICAgIC8vIOaUtuiXj1xyXG4gICAgY29sbGVjdDoge1xyXG4gICAgICB1cmw6ICcvc3R1ZHkvc3R1ZHlDb2xsZWN0JyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH0sXHJcbiAgICAvLyDlhZHmjaLliIbnsbtcclxuICAgIGV4Y2F0OiB7XHJcbiAgICAgIHVybDogJy9xdWVyeS9leGNoYW5nZVR5cGUnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfSxcclxuICAgIC8vIOWFkeaNouWIl+ihqFxyXG4gICAgZXhsaXN0OiB7XHJcbiAgICAgIHVybDogJy9xdWVyeS9leGNoYW5nZUxpc3QnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfSxcclxuICAgIC8vIOWFkeaNolxyXG4gICAgZXhjaGFuZ2U6IHtcclxuICAgICAgdXJsOiAnL3F1ZXJ5L2V4Y2hhbmdlJyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH1cclxuICB9LFxyXG4gIG1vb2Q6IHtcclxuICAgIC8vIOaWh+eroOWIl+ihqFxyXG4gICAgYXJ0aWNsZToge1xyXG4gICAgICB1cmw6ICcvYXJ0aWNsZS9hcnRpY2xlTGlzdCcsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9LFxyXG4gICAgLy8g5paH56ug6K+m5oOFXHJcbiAgICBhcnRpY2xlZGV0YWlsOiB7XHJcbiAgICAgIHVybDogJy9hcnRpY2xlL2FydGljbGVTaG93JyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH0sXHJcbiAgICAvLyDlv4PnkIbliJfooahcclxuICAgIGluZGV4OiB7XHJcbiAgICAgIHVybDogJy9xdWVyeS9pbmRleCcsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9LFxyXG4gICAgLy8g5Y+R6KGo5b+D5oOFXHJcbiAgICBwYm1vb2Q6IHtcclxuICAgICAgdXJsOiAnL3F1ZXJ5L2luZGV4JyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH0sXHJcbiAgICAvLyDlj5HluIPlkqjor6JcclxuICAgIGFzazoge1xyXG4gICAgICB1cmw6ICcvcXVlcnkvcXVlcnknLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfSxcclxuICAgIC8vIOWMu+eUn+WGhemhtVxyXG4gICAgZG9jdG9yOiB7XHJcbiAgICAgIHVybDogJy9xdWVyeS9kb2N0b3JEZXRhaWwnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcHVibGljOiB7XHJcbiAgICAvLyDkuIrkvKDlm77niYdcclxuICAgIHVwbG9hZDoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL3B1YmxpYy91cGxvYWRJbWcnXHJcbiAgICB9LFxyXG4gICAgLy8g5YWo5bGA5pWw5o2uXHJcbiAgICBnbG9iYWw6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9wdWJsaWMvZ2xvYmFsRGF0YSdcclxuICAgIH1cclxuICB9XHJcbn1cclxuLy8g6YCS5b2S5aSE55CGdXJsXHJcbmNvbnN0IGRpc3Bvc2VVcmwgPSAob2JqLCBwcmVVcmwpID0+IHtcclxuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcclxuICAgIGlmIChvYmpba2V5XS51cmwpIHtcclxuICAgICAgb2JqW2tleV0udXJsID0gcHJlVXJsICsgb2JqW2tleV0udXJsXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXNwb3NlVXJsKG9ialtrZXldLCBwcmVVcmwpXHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4gb2JqXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3Bvc2VVcmwoYXBpLCBob3N0c1tlbnZdKVxyXG4iXX0=