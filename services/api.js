import axios from 'axios'
import jsonapi from 'jsonapi-parse'

export default () => {
  return {
    get: async function (uri, queryParams = {}, id = '') {
      id = id ? '/' + id : id
      const response = await axios.get(process.env.JSONAPIBaseUrl + uri + id, {params: queryParams})
      return jsonapi.parse(response.data).data
    }
  }
}
