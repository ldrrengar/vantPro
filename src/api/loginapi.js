import request from '@/utils/request'
/**
 * 登录接口
 */
export const authLoginByAccount = (data) => {
  return request({
    url: '/api/jwt-auth/',
    method: 'post',
    data
  })
}
