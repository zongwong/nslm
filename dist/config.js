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
    }
  },
  public: {
    // 上传图片
    upload: {
      method: 'post',
      url: '/public/uploadImg'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJlbnYiLCJob3N0cyIsImRldmVsb3BtZW50IiwicHJvZHVjdGlvbiIsImFwaSIsInVzZXJzIiwibG9naW4iLCJtZXRob2QiLCJ1cmwiLCJhY3Rpdml0eSIsImxpc3QiLCJhZGQiLCJpbmZvIiwiam9pbiIsInNpZ24iLCJjaXJjbGUiLCJteXByb2dyZXNzIiwicHVibGljIiwidXBsb2FkIiwiZGlzcG9zZVVybCIsIm9iaiIsInByZVVybCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsTUFBTSxhQUFaOztBQUVBLElBQU1DLFFBQVE7QUFDWkMsZUFBYSwyQkFERDtBQUVaQyxjQUFZOztBQUdkO0FBTGMsQ0FBZCxDQU1BLElBQU1DLE1BQU07QUFDVkMsU0FBTztBQUNMO0FBQ0FDLFdBQU87QUFDTEMsY0FBUSxNQURIO0FBRUxDLFdBQUs7QUFGQTtBQUZGLEdBREc7QUFRVkMsWUFBVTtBQUNSO0FBQ0FDLFVBQU07QUFDSkgsY0FBUSxNQURKO0FBRUpDLFdBQUs7QUFGRCxLQUZFO0FBTVI7QUFDQUcsU0FBSztBQUNISixjQUFRLE1BREw7QUFFSEMsV0FBSztBQUZGLEtBUEc7QUFXUjtBQUNBSSxVQUFNO0FBQ0pMLGNBQVEsTUFESjtBQUVKQyxXQUFLO0FBRkQsS0FaRTtBQWdCUjtBQUNBSyxVQUFNO0FBQ0pOLGNBQVEsTUFESjtBQUVKQyxXQUFLO0FBRkQsS0FqQkU7QUFxQlI7QUFDQU0sVUFBTTtBQUNKUCxjQUFRLE1BREo7QUFFSkMsV0FBSztBQUZELEtBdEJFO0FBMEJSO0FBQ0FPLFlBQVE7QUFDTlIsY0FBUSxNQURGO0FBRU5DLFdBQUs7QUFGQyxLQTNCQTtBQStCUjtBQUNBUSxnQkFBWTtBQUNWVCxjQUFRLE1BREU7QUFFVkMsV0FBSztBQUZLO0FBaENKLEdBUkE7QUE2Q1ZTLFVBQVE7QUFDTjtBQUNBQyxZQUFRO0FBQ05YLGNBQVEsTUFERjtBQUVOQyxXQUFLO0FBRkM7QUFGRjtBQVFWO0FBckRZLENBQVosQ0FzREEsSUFBTVcsYUFBYSxTQUFiQSxVQUFhLENBQUNDLEdBQUQsRUFBTUMsTUFBTixFQUFpQjtBQUNsQ0MsU0FBT0MsSUFBUCxDQUFZSCxHQUFaLEVBQWlCSSxPQUFqQixDQUF5QixVQUFDQyxHQUFELEVBQU1DLEtBQU4sRUFBZ0I7QUFDdkMsUUFBSU4sSUFBSUssR0FBSixFQUFTakIsR0FBYixFQUFrQjtBQUNoQlksVUFBSUssR0FBSixFQUFTakIsR0FBVCxHQUFlYSxTQUFTRCxJQUFJSyxHQUFKLEVBQVNqQixHQUFqQztBQUNELEtBRkQsTUFFTztBQUNMVyxpQkFBV0MsSUFBSUssR0FBSixDQUFYLEVBQXFCSixNQUFyQjtBQUNEO0FBQ0YsR0FORDtBQU9BLFNBQU9ELEdBQVA7QUFDRCxDQVREOztrQkFXZUQsV0FBV2YsR0FBWCxFQUFnQkgsTUFBTUQsR0FBTixDQUFoQixDIiwiZmlsZSI6ImNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGVudiA9ICdkZXZlbG9wbWVudCdcclxuXHJcbmNvbnN0IGhvc3RzID0ge1xyXG4gIGRldmVsb3BtZW50OiAnaHR0cDovL2xhZHkuemRncGhwLmNuL2FwaScsXHJcbiAgcHJvZHVjdGlvbjogJ2h0dHA6Ly9sYWR5LnpkZ3BocC5jbi9hcGknXHJcbn1cclxuXHJcbi8vIGFwaeWIl+ihqFxyXG5jb25zdCBhcGkgPSB7XHJcbiAgdXNlcnM6IHtcclxuICAgIC8vIOeUqOaIt+eZu+W9lVxyXG4gICAgbG9naW46IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy91c2Vycy9sb2dpbidcclxuICAgIH1cclxuICB9LFxyXG4gIGFjdGl2aXR5OiB7XHJcbiAgICAvLyDpppbpobXmtLvliqjliJfooahcclxuICAgIGxpc3Q6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY3Rpdml0eS9hY3Rpdml0eUxpc3QnXHJcbiAgICB9LFxyXG4gICAgLy8g5Yib5bu65rS75YqoXHJcbiAgICBhZGQ6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY3Rpdml0eS9hY3Rpdml0eUFkZCdcclxuICAgIH0sXHJcbiAgICAvLyDmtLvliqjor6bmg4VcclxuICAgIGluZm86IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9hY3Rpdml0eS9hY3Rpdml0eVNob3cnXHJcbiAgICB9LFxyXG4gICAgLy8g5Y+C5Yqg5rS75YqoXHJcbiAgICBqb2luOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWN0aXZpdHkvYWN0aXZpdHlKb2luJ1xyXG4gICAgfSxcclxuICAgIC8vIOaJk+WNoVxyXG4gICAgc2lnbjoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2Nsb2NrJ1xyXG4gICAgfSxcclxuICAgIC8vIOaJk+WNoeWciFxyXG4gICAgY2lyY2xlOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWN0aXZpdHkvY2xvY2tDaXJjbGUnXHJcbiAgICB9LFxyXG4gICAgLy8g5oiR55qE5omT5Y2h6L+b5bqmXHJcbiAgICBteXByb2dyZXNzOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvYWN0aXZpdHkvY2xvY2tNeSdcclxuICAgIH1cclxuICB9LFxyXG4gIHB1YmxpYzoge1xyXG4gICAgLy8g5LiK5Lyg5Zu+54mHXHJcbiAgICB1cGxvYWQ6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy9wdWJsaWMvdXBsb2FkSW1nJ1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4vLyDpgJLlvZLlpITnkIZ1cmxcclxuY29uc3QgZGlzcG9zZVVybCA9IChvYmosIHByZVVybCkgPT4ge1xyXG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xyXG4gICAgaWYgKG9ialtrZXldLnVybCkge1xyXG4gICAgICBvYmpba2V5XS51cmwgPSBwcmVVcmwgKyBvYmpba2V5XS51cmxcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpc3Bvc2VVcmwob2JqW2tleV0sIHByZVVybClcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiBvYmpcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcG9zZVVybChhcGksIGhvc3RzW2Vudl0pXHJcbiJdfQ==