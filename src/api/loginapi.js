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

export const getTasks = (data) => {
  return request({
    url: `/api/api/tasks/?page=${data.page}&page_size=${data.pageSize}&type=${data.type}`,
    method: 'get'
  })
}
