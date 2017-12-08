'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var env = 'production';

var hosts = {
  development: 'http://lady.zdgphp.cn',
  production: 'http://lady.zdgphp.cn'

  // api列表
};var api = {
  users: {
    login: {
      method: 'get',
      url: '/users/login'
    }
  },
  login: {
    url: '/1'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJlbnYiLCJob3N0cyIsImRldmVsb3BtZW50IiwicHJvZHVjdGlvbiIsImFwaSIsInVzZXJzIiwibG9naW4iLCJtZXRob2QiLCJ1cmwiLCJkaXNwb3NlVXJsIiwib2JqIiwicHJlVXJsIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxNQUFNLFlBQVo7O0FBRUEsSUFBTUMsUUFBUTtBQUNaQyxlQUFhLHVCQUREO0FBRVpDLGNBQVk7O0FBR2Q7QUFMYyxDQUFkLENBTUEsSUFBTUMsTUFBTTtBQUNWQyxTQUFPO0FBQ0xDLFdBQU87QUFDTEMsY0FBUSxLQURIO0FBRUxDLFdBQUs7QUFGQTtBQURGLEdBREc7QUFPVkYsU0FBTztBQUNMRSxTQUFLO0FBREE7QUFJVDtBQVhZLENBQVosQ0FZQSxJQUFNQyxhQUFhLFNBQWJBLFVBQWEsQ0FBQ0MsR0FBRCxFQUFNQyxNQUFOLEVBQWlCO0FBQ2xDQyxTQUFPQyxJQUFQLENBQVlILEdBQVosRUFBaUJJLE9BQWpCLENBQXlCLFVBQUNDLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUN2QyxRQUFJTixJQUFJSyxHQUFKLEVBQVNQLEdBQWIsRUFBa0I7QUFDaEJFLFVBQUlLLEdBQUosRUFBU1AsR0FBVCxHQUFlRyxTQUFTRCxJQUFJSyxHQUFKLEVBQVNQLEdBQWpDO0FBQ0QsS0FGRCxNQUVPO0FBQ0xDLGlCQUFXQyxJQUFJSyxHQUFKLENBQVgsRUFBcUJKLE1BQXJCO0FBQ0Q7QUFDRixHQU5EO0FBT0EsU0FBT0QsR0FBUDtBQUNELENBVEQ7O2tCQVdlRCxXQUFXTCxHQUFYLEVBQWdCSCxNQUFNRCxHQUFOLENBQWhCLEMiLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZW52ID0gJ3Byb2R1Y3Rpb24nXHJcblxyXG5jb25zdCBob3N0cyA9IHtcclxuICBkZXZlbG9wbWVudDogJ2h0dHA6Ly9sYWR5LnpkZ3BocC5jbicsXHJcbiAgcHJvZHVjdGlvbjogJ2h0dHA6Ly9sYWR5LnpkZ3BocC5jbidcclxufVxyXG5cclxuLy8gYXBp5YiX6KGoXHJcbmNvbnN0IGFwaSA9IHtcclxuICB1c2Vyczoge1xyXG4gICAgbG9naW46IHtcclxuICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgdXJsOiAnL3VzZXJzL2xvZ2luJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbG9naW46IHtcclxuICAgIHVybDogJy8xJ1xyXG4gIH1cclxufVxyXG4vLyDpgJLlvZLlpITnkIZ1cmxcclxuY29uc3QgZGlzcG9zZVVybCA9IChvYmosIHByZVVybCkgPT4ge1xyXG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xyXG4gICAgaWYgKG9ialtrZXldLnVybCkge1xyXG4gICAgICBvYmpba2V5XS51cmwgPSBwcmVVcmwgKyBvYmpba2V5XS51cmxcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpc3Bvc2VVcmwob2JqW2tleV0sIHByZVVybClcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiBvYmpcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcG9zZVVybChhcGksIGhvc3RzW2Vudl0pXHJcbiJdfQ==