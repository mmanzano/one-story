import axios from 'axios'
import jsonapi from 'jsonapi-parse'
import qs from 'qs'

export default () => {
  return {
    get: async function (uri, queryParams = {}, id = '') {
      id = id ? '/' + id : id
      const response = await axios.get(process.env.JSONAPIBaseUrl + uri + id, {
        params: queryParams,
        paramsSerializer: function (params) {
          return qs.stringify(params, { encode: false })
        }
      })
      return jsonapi.parse(response.data).data
    }
  }
}
