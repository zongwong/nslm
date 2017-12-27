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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJlbnYiLCJob3N0cyIsImRldmVsb3BtZW50IiwicHJvZHVjdGlvbiIsImFwaSIsInVzZXJzIiwibG9naW4iLCJtZXRob2QiLCJ1cmwiLCJzYXZlIiwiZ2V0IiwicHVibGlzaCIsImpvaW4iLCJhY3Rpdml0eSIsImxpc3QiLCJhZGQiLCJpbmZvIiwic2lnbiIsImNpcmNsZSIsIm15cHJvZ3Jlc3MiLCJzZWFyY2giLCJzaGFyZSIsInBibW9vZCIsImNvdXJzZSIsImNsaXN0IiwiZGV0YWlsIiwiY29sbGVjdCIsIm1vb2QiLCJhcnRpY2xlIiwiYXJ0aWNsZWRldGFpbCIsImluZGV4IiwiYXNrIiwiZG9jdG9yIiwicHVibGljIiwidXBsb2FkIiwiZ2xvYmFsIiwiZGlzcG9zZVVybCIsIm9iaiIsInByZVVybCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU1BLE1BQU0sWUFBWjs7QUFFQSxJQUFNQyxRQUFRO0FBQ1pDLGVBQWEsMkJBREQ7QUFFWkMsY0FBWTs7QUFHZDtBQUxjLENBQWQsQ0FNQSxJQUFNQyxNQUFNO0FBQ1ZDLFNBQU87QUFDTDtBQUNBQyxXQUFPO0FBQ0xDLGNBQVEsTUFESDtBQUVMQyxXQUFLO0FBRkEsS0FGRjtBQU1MO0FBQ0FDLFVBQU07QUFDSkYsY0FBUSxNQURKO0FBRUpDLFdBQUs7QUFGRCxLQVBEO0FBV0w7QUFDQUUsU0FBSztBQUNISCxjQUFRLE1BREw7QUFFSEMsV0FBSztBQUZGLEtBWkE7QUFnQkw7QUFDQUcsYUFBUztBQUNQSixjQUFRLE1BREQ7QUFFUEMsV0FBSztBQUZFLEtBakJKO0FBcUJMO0FBQ0FJLFVBQU07QUFDSkwsY0FBUSxNQURKO0FBRUpDLFdBQUs7QUFGRDtBQXRCRCxHQURHO0FBNEJWSyxZQUFVO0FBQ1I7QUFDQUMsVUFBTTtBQUNKUCxjQUFRLE1BREo7QUFFSkMsV0FBSztBQUZELEtBRkU7QUFNUjtBQUNBTyxTQUFLO0FBQ0hSLGNBQVEsTUFETDtBQUVIQyxXQUFLO0FBRkYsS0FQRztBQVdSO0FBQ0FRLFVBQU07QUFDSlQsY0FBUSxNQURKO0FBRUpDLFdBQUs7QUFGRCxLQVpFO0FBZ0JSO0FBQ0FJLFVBQU07QUFDSkwsY0FBUSxNQURKO0FBRUpDLFdBQUs7QUFGRCxLQWpCRTtBQXFCUjtBQUNBUyxVQUFNO0FBQ0pWLGNBQVEsTUFESjtBQUVKQyxXQUFLO0FBRkQsS0F0QkU7QUEwQlI7QUFDQVUsWUFBUTtBQUNOWCxjQUFRLE1BREY7QUFFTkMsV0FBSztBQUZDLEtBM0JBO0FBK0JSO0FBQ0FXLGdCQUFZO0FBQ1ZaLGNBQVEsTUFERTtBQUVWQyxXQUFLO0FBRkssS0FoQ0o7QUFvQ1I7QUFDQVksWUFBUTtBQUNOYixjQUFRLE1BREY7QUFFTkMsV0FBSztBQUZDLEtBckNBO0FBeUNSO0FBQ0FhLFdBQU87QUFDTGQsY0FBUSxNQURIO0FBRUxDLFdBQUs7QUFGQSxLQTFDQztBQThDUjtBQUNBYyxZQUFRO0FBQ05kLFdBQUssbUJBREM7QUFFTkQsY0FBUTtBQUZGO0FBL0NBLEdBNUJBO0FBZ0ZWZ0IsVUFBUTtBQUNOVCxVQUFNO0FBQ0pOLFdBQUssc0JBREQ7QUFFSkQsY0FBUTtBQUZKLEtBREE7QUFLTmlCLFdBQU87QUFDTGhCLFdBQUssa0JBREE7QUFFTEQsY0FBUTtBQUZILEtBTEQ7QUFTTmtCLFlBQVE7QUFDTmpCLFdBQUssb0JBREM7QUFFTkQsY0FBUTtBQUZGLEtBVEY7QUFhTjtBQUNBbUIsYUFBUztBQUNQbEIsV0FBSyxxQkFERTtBQUVQRCxjQUFRO0FBRkQ7QUFkSCxHQWhGRTtBQW1HVm9CLFFBQU07QUFDSjtBQUNBQyxhQUFTO0FBQ1BwQixXQUFLLHNCQURFO0FBRVBELGNBQVE7QUFGRCxLQUZMO0FBTUo7QUFDQXNCLG1CQUFlO0FBQ2JyQixXQUFLLHNCQURRO0FBRWJELGNBQVE7QUFGSyxLQVBYO0FBV0o7QUFDQXVCLFdBQU87QUFDTHRCLFdBQUssY0FEQTtBQUVMRCxjQUFRO0FBRkgsS0FaSDtBQWdCSjtBQUNBZSxZQUFRO0FBQ05kLFdBQUssY0FEQztBQUVORCxjQUFRO0FBRkYsS0FqQko7QUFxQko7QUFDQXdCLFNBQUs7QUFDSHZCLFdBQUssY0FERjtBQUVIRCxjQUFRO0FBRkwsS0F0QkQ7QUEwQko7QUFDQXlCLFlBQVE7QUFDTnhCLFdBQUsscUJBREM7QUFFTkQsY0FBUTtBQUZGO0FBM0JKLEdBbkdJO0FBbUlWMEIsVUFBUTtBQUNOO0FBQ0FDLFlBQVE7QUFDTjNCLGNBQVEsTUFERjtBQUVOQyxXQUFLO0FBRkMsS0FGRjtBQU1OO0FBQ0EyQixZQUFRO0FBQ041QixjQUFRLE1BREY7QUFFTkMsV0FBSztBQUZDO0FBUEY7QUFhVjtBQWhKWSxDQUFaLENBaUpBLElBQU00QixhQUFhLFNBQWJBLFVBQWEsQ0FBQ0MsR0FBRCxFQUFNQyxNQUFOLEVBQWlCO0FBQ2xDQyxTQUFPQyxJQUFQLENBQVlILEdBQVosRUFBaUJJLE9BQWpCLENBQXlCLFVBQUNDLEdBQUQsRUFBTVosS0FBTixFQUFnQjtBQUN2QyxRQUFJTyxJQUFJSyxHQUFKLEVBQVNsQyxHQUFiLEVBQWtCO0FBQ2hCNkIsVUFBSUssR0FBSixFQUFTbEMsR0FBVCxHQUFlOEIsU0FBU0QsSUFBSUssR0FBSixFQUFTbEMsR0FBakM7QUFDRCxLQUZELE1BRU87QUFDTDRCLGlCQUFXQyxJQUFJSyxHQUFKLENBQVgsRUFBcUJKLE1BQXJCO0FBQ0Q7QUFDRixHQU5EO0FBT0EsU0FBT0QsR0FBUDtBQUNELENBVEQ7O2tCQVdlRCxXQUFXaEMsR0FBWCxFQUFnQkgsTUFBTUQsR0FBTixDQUFoQixDIiwiZmlsZSI6ImNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGVudiA9ICdwcm9kdWN0aW9uJ1xyXG5cclxuY29uc3QgaG9zdHMgPSB7XHJcbiAgZGV2ZWxvcG1lbnQ6ICdodHRwOi8vbGFkeS56ZGdwaHAuY24vYXBpJyxcclxuICBwcm9kdWN0aW9uOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9hcGknXHJcbn1cclxuXHJcbi8vIGFwaeWIl+ihqFxyXG5jb25zdCBhcGkgPSB7XHJcbiAgdXNlcnM6IHtcclxuICAgIC8vIOeUqOaIt+eZu+W9lVxyXG4gICAgbG9naW46IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy91c2Vycy9sb2dpbidcclxuICAgIH0sXHJcbiAgICAvLyDnvJbovpHotYTmlplcclxuICAgIHNhdmU6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy91c2Vycy9lZGl0VXNlckluZm8nXHJcbiAgICB9LFxyXG4gICAgLy8g6I635Y+W55So5oi36LWE5paZXHJcbiAgICBnZXQ6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy91c2Vycy91c2VySW5mbydcclxuICAgIH0sXHJcbiAgICAvLyDmiJHnmoTlj5HluINcclxuICAgIHB1Ymxpc2g6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy91c2Vycy9teUFjdGl2aXR5J1xyXG4gICAgfSxcclxuICAgIC8vIOaIkeeahOWPguS4jlxyXG4gICAgam9pbjoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL3VzZXJzL215Sm9pbkFjdGl2aXR5J1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWN0aXZpdHk6IHtcclxuICAgIC8vIOmmlumhtea0u+WKqOWIl+ihqFxyXG4gICAgbGlzdDoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2FjdGl2aXR5TGlzdCdcclxuICAgIH0sXHJcbiAgICAvLyDliJvlu7rmtLvliqhcclxuICAgIGFkZDoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2FjdGl2aXR5QWRkJ1xyXG4gICAgfSxcclxuICAgIC8vIOa0u+WKqOivpuaDhVxyXG4gICAgaW5mbzoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2FjdGl2aXR5U2hvdydcclxuICAgIH0sXHJcbiAgICAvLyDlj4LliqDmtLvliqhcclxuICAgIGpvaW46IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY3Rpdml0eS9hY3Rpdml0eUpvaW4nXHJcbiAgICB9LFxyXG4gICAgLy8g5omT5Y2hXHJcbiAgICBzaWduOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWN0aXZpdHkvY2xvY2snXHJcbiAgICB9LFxyXG4gICAgLy8g5omT5Y2h5ZyIXHJcbiAgICBjaXJjbGU6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY3Rpdml0eS9jbG9ja0NpcmNsZSdcclxuICAgIH0sXHJcbiAgICAvLyDmiJHnmoTmiZPljaHov5vluqZcclxuICAgIG15cHJvZ3Jlc3M6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY3Rpdml0eS9jbG9ja015J1xyXG4gICAgfSxcclxuICAgIC8vIHBr5pCc57SiXHJcbiAgICBzZWFyY2g6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY3Rpdml0eS9hY3Rpdml0eVNlYXJjaCdcclxuICAgIH0sXHJcbiAgICAvLyBzaGFyZVxyXG4gICAgc2hhcmU6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY3Rpdml0eS9hY3Rpdml0eVNoYXJlJ1xyXG4gICAgfSxcclxuICAgIC8vIOWPkeihqOW/g+aDhVxyXG4gICAgcGJtb29kOiB7XHJcbiAgICAgIHVybDogJy9xdWVyeS9jcmVhdGVNb29kJyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH1cclxuICB9LFxyXG4gIGNvdXJzZToge1xyXG4gICAgbGlzdDoge1xyXG4gICAgICB1cmw6ICcvc3R1ZHkvc3R1ZHlUeXBlTGlzdCcsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9LFxyXG4gICAgY2xpc3Q6IHtcclxuICAgICAgdXJsOiAnL3N0dWR5L3N0dWR5TGlzdCcsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9LFxyXG4gICAgZGV0YWlsOiB7XHJcbiAgICAgIHVybDogJy9zdHVkeS9zdHVkeURldGFpbCcsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9LFxyXG4gICAgLy8g5pS26JePXHJcbiAgICBjb2xsZWN0OiB7XHJcbiAgICAgIHVybDogJy9zdHVkeS9zdHVkeUNvbGxlY3QnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbW9vZDoge1xyXG4gICAgLy8g5paH56ug5YiX6KGoXHJcbiAgICBhcnRpY2xlOiB7XHJcbiAgICAgIHVybDogJy9hcnRpY2xlL2FydGljbGVMaXN0JyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH0sXHJcbiAgICAvLyDmlofnq6Dor6bmg4VcclxuICAgIGFydGljbGVkZXRhaWw6IHtcclxuICAgICAgdXJsOiAnL2FydGljbGUvYXJ0aWNsZVNob3cnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfSxcclxuICAgIC8vIOW/g+eQhuWIl+ihqFxyXG4gICAgaW5kZXg6IHtcclxuICAgICAgdXJsOiAnL3F1ZXJ5L2luZGV4JyxcclxuICAgICAgbWV0aG9kOiAncG9zdCdcclxuICAgIH0sXHJcbiAgICAvLyDlj5Hooajlv4Pmg4VcclxuICAgIHBibW9vZDoge1xyXG4gICAgICB1cmw6ICcvcXVlcnkvaW5kZXgnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfSxcclxuICAgIC8vIOWPkeW4g+WSqOivolxyXG4gICAgYXNrOiB7XHJcbiAgICAgIHVybDogJy9xdWVyeS9xdWVyeScsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9LFxyXG4gICAgLy8g5Yy755Sf5YaF6aG1XHJcbiAgICBkb2N0b3I6IHtcclxuICAgICAgdXJsOiAnL3F1ZXJ5L2RvY3RvckRldGFpbCcsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9XHJcbiAgfSxcclxuICBwdWJsaWM6IHtcclxuICAgIC8vIOS4iuS8oOWbvueJh1xyXG4gICAgdXBsb2FkOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvcHVibGljL3VwbG9hZEltZydcclxuICAgIH0sXHJcbiAgICAvLyDlhajlsYDmlbDmja5cclxuICAgIGdsb2JhbDoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL3B1YmxpYy9nbG9iYWxEYXRhJ1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4vLyDpgJLlvZLlpITnkIZ1cmxcclxuY29uc3QgZGlzcG9zZVVybCA9IChvYmosIHByZVVybCkgPT4ge1xyXG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xyXG4gICAgaWYgKG9ialtrZXldLnVybCkge1xyXG4gICAgICBvYmpba2V5XS51cmwgPSBwcmVVcmwgKyBvYmpba2V5XS51cmxcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpc3Bvc2VVcmwob2JqW2tleV0sIHByZVVybClcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiBvYmpcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcG9zZVVybChhcGksIGhvc3RzW2Vudl0pXHJcbiJdfQ==