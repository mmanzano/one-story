import jsonApiCall from './api'

const api = jsonApiCall()

export async function retrieveAllStories () {
  return api.get('/stories')
}
