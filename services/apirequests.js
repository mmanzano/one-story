import jsonApiCall from './api'

const api = jsonApiCall()

export async function retrieveAllStories () {
  const query = {
    include: 'characters',
    fields: {
      stories: 'title,body',
      characters: 'name,description'
    }
  }
  return api.get('/stories', query)
}
