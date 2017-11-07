import axios from 'axios'
import jsonapi from 'jsonapi-parse'

export default () => {
  return {
    get: async function (uri, queryParams = {}) {
      const response = await axios.get(process.env.JSONAPIBaseUrl + uri)
      return jsonapi.parse(response.data).data
    }
  }
}
