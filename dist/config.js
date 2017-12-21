'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var env = 'production';

var hosts = {
  development: 'http://lady.zdgphp.cn',
  production: 'http://lady.zdgphp.cn/api'

  // api列表
};var api = {
  users: {
    login: {
      method: 'post',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJlbnYiLCJob3N0cyIsImRldmVsb3BtZW50IiwicHJvZHVjdGlvbiIsImFwaSIsInVzZXJzIiwibG9naW4iLCJtZXRob2QiLCJ1cmwiLCJkaXNwb3NlVXJsIiwib2JqIiwicHJlVXJsIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxNQUFNLFlBQVo7O0FBRUEsSUFBTUMsUUFBUTtBQUNaQyxlQUFhLHVCQUREO0FBRVpDLGNBQVk7O0FBR2Q7QUFMYyxDQUFkLENBTUEsSUFBTUMsTUFBTTtBQUNWQyxTQUFPO0FBQ0xDLFdBQU87QUFDTEMsY0FBUSxNQURIO0FBRUxDLFdBQUs7QUFGQTtBQURGLEdBREc7QUFPVkYsU0FBTztBQUNMRSxTQUFLO0FBREE7QUFJVDtBQVhZLENBQVosQ0FZQSxJQUFNQyxhQUFhLFNBQWJBLFVBQWEsQ0FBQ0MsR0FBRCxFQUFNQyxNQUFOLEVBQWlCO0FBQ2xDQyxTQUFPQyxJQUFQLENBQVlILEdBQVosRUFBaUJJLE9BQWpCLENBQXlCLFVBQUNDLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUN2QyxRQUFJTixJQUFJSyxHQUFKLEVBQVNQLEdBQWIsRUFBa0I7QUFDaEJFLFVBQUlLLEdBQUosRUFBU1AsR0FBVCxHQUFlRyxTQUFTRCxJQUFJSyxHQUFKLEVBQVNQLEdBQWpDO0FBQ0QsS0FGRCxNQUVPO0FBQ0xDLGlCQUFXQyxJQUFJSyxHQUFKLENBQVgsRUFBcUJKLE1BQXJCO0FBQ0Q7QUFDRixHQU5EO0FBT0EsU0FBT0QsR0FBUDtBQUNELENBVEQ7O2tCQVdlRCxXQUFXTCxHQUFYLEVBQWdCSCxNQUFNRCxHQUFOLENBQWhCLEMiLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZW52ID0gJ3Byb2R1Y3Rpb24nXHJcblxyXG5jb25zdCBob3N0cyA9IHtcclxuICBkZXZlbG9wbWVudDogJ2h0dHA6Ly9sYWR5LnpkZ3BocC5jbicsXHJcbiAgcHJvZHVjdGlvbjogJ2h0dHA6Ly9sYWR5LnpkZ3BocC5jbi9hcGknXHJcbn1cclxuXHJcbi8vIGFwaeWIl+ihqFxyXG5jb25zdCBhcGkgPSB7XHJcbiAgdXNlcnM6IHtcclxuICAgIGxvZ2luOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvdXNlcnMvbG9naW4nXHJcbiAgICB9XHJcbiAgfSxcclxuICBsb2dpbjoge1xyXG4gICAgdXJsOiAnLzEnXHJcbiAgfVxyXG59XHJcbi8vIOmAkuW9kuWkhOeQhnVybFxyXG5jb25zdCBkaXNwb3NlVXJsID0gKG9iaiwgcHJlVXJsKSA9PiB7XHJcbiAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XHJcbiAgICBpZiAob2JqW2tleV0udXJsKSB7XHJcbiAgICAgIG9ialtrZXldLnVybCA9IHByZVVybCArIG9ialtrZXldLnVybFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGlzcG9zZVVybChvYmpba2V5XSwgcHJlVXJsKVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIG9ialxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwb3NlVXJsKGFwaSwgaG9zdHNbZW52XSlcclxuIl19