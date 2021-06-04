const Mock = require('mockjs')

const propertyList = []
const count = 5

for (let i = 0; i < count; i++) {
  propertyList.push(Mock.mock({
    id: '@increment',
    timestamp: +Mock.Random.date('T'),
    'mapType|1': ['flatMap', 'functionMap', 'selfMap'],
    'sourceColumn': 'property',
    'sourceType|1': ['string', 'double', 'integer'],
    'targetColumn': 'column',
    'targetType|1': ['string', 'double', 'integer']
  }))
}

module.exports = [
  {
    url: '/vue-element-admin/compute/center/list',
    type: 'get',
    response: config => {
      const { importance, type, title, page = 1, limit = 20, sort } = config.query

      let mockList = propertyList.filter(item => {
        if (importance && item.importance !== +importance) return false
        if (type && item.type !== type) return false
        if (title && item.title.indexOf(title) < 0) return false
        return true
      })

      if (sort === '-id') {
        mockList = mockList.reverse()
      }

      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  },

  {
    url: '/vue-element-admin/compute/center/detail',
    type: 'get',
    response: config => {
      const { id } = config.query
      for (const article of propertyList) {
        if (article.id === +id) {
          return {
            code: 20000,
            data: article
          }
        }
      }
    }
  },

  {
    url: '/vue-element-admin/compute/center/pv',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          pvData: [
            { key: 'PC', pv: 1024 },
            { key: 'mobile', pv: 1024 },
            { key: 'ios', pv: 1024 },
            { key: 'android', pv: 1024 }
          ]
        }
      }
    }
  },

  {
    url: '/vue-element-admin/compute/center/create',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  {
    url: '/vue-element-admin/compute/center/update',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]

