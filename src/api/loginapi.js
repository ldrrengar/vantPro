import request from '@/utils/request'
/**
 * 微信号id登录接口
 * 成功后需要走账号密码登录接口，否则走手机号登录接口
 */
export const authLoginByAccount = (data) => {
  return request({
    url: '/api/jwt-auth/',
    method: 'post',
    data
  })
}
