export const state = () => ({
  'authorization': null,
  'authUser': null,
  'selectedMonth': {
    'id': 11,
    'name': 'November'
  },
  'months': [
    {
      'id': 1,
      'name': 'January'
    },
    {
      'id': 2,
      'name': 'February'
    },
    {
      'id': 3,
      'name': 'March'
    },
    {
      'id': 4,
      'name': 'April'
    },
    {
      'id': 5,
      'name': 'May'
    },
    {
      'id': 6,
      'name': 'June'
    },
    {
      'id': 7,
      'name': 'July'
    },
    {
      'id': 8,
      'name': 'August'
    },
    {
      'id': 9,
      'name': 'September'
    },
    {
      'id': 10,
      'name': 'October'
    },
    {
      'id': 11,
      'name': 'November'
    },
    {
      'id': 12,
      'name': 'December'
    }
  ]
})

export const mutations = {
  changeMonth (state, month) {
    state.selectedMonth = month
  },
  setAuthUser (state, authUser) {
    state.authUser = authUser
  },
  setAuthorization (state, authorization) {
    state.authorization = authorization
  }
}
