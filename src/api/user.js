import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/vue-element-admin/user/login',
    method: 'post',
    data
  })
}

export function loginIn(data) {
  return request({
    url: '/api/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function queryByName(name) {
  return request({
    url: '/api/user/queryByName',
    method: 'get',
	params:{
		name:name
	}
  })
}


export function loginOut(token) {
  return request({
    url: '/api/user/loginOut',
    method: 'post',
	params:{
		token:token
	}
  })
}


export function getUserInfo(token) {
  return request({
    url: '/api/user/queryByToken',
    method: 'get',
    params: {
      token: token
    }
  })
}
