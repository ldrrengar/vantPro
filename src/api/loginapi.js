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
    url: `/api/api/tasks/?page=${data.page}&page_size=${data.pageSize}&type=${data.type}&state=1`,
    method: 'get'
  })
}

export const getNews = (data) => {
  return request({
    url: `/api/api/news/?page=${data.page}&page_size=${data.pageSize}`,
    method: 'get'
  })
}

export const getNewsDetails = (data) => {
  return request({
    url: `/api/api/news/${data.id}/`,
    method: 'get'
  })
}

export const getTasksSelfComplete = (data) => {
  return request({
    url: `/api/api/complete_tasks/?page=${data.page}&page_size=${data.pageSize}&state=${data.state}`,
    method: 'get'
  })
}
