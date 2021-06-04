import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/vue-element-admin/compute/center/list',
    method: 'get',
    params: query
  })
}

export function fetchProperty(id) {
  return request({
    url: '/vue-element-admin/compute/center/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/vue-element-admin/compute/center/pv',
    method: 'get',
    params: { pv }
  })
}

export function createProperty(data) {
  return request({
    url: '/vue-element-admin/compute/center/create',
    method: 'post',
    data
  })
}

export function updateProperty(data) {
  return request({
    url: '/vue-element-admin/compute/center/update',
    method: 'post',
    data
  })
}
