/**
 * 微信号id登录接口
 * 成功后需要走账号密码登录接口，否则走手机号登录接口
 */
export const login = (data) => {
  const url = '/WeChatLoginAction.do?method=login'
  return this.$post(url, data)
}

/**
 * 账号密码登录接口
 */
export const personalLogin = (data) => {
  let url = '/platformAction.do?method=personalLogin'
  const headers = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
  return this.$post(url, data, headers)
}
