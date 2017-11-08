import jsonApiCall from './api'

const api = jsonApiCall()

export async function retrieveAllStories () {
  const query = {
    include: 'characters'
  }
  return api.get('/stories', query)
}

export async function retrieveStoryForUser (userId) {
  const query = {
    include: 'characters',
    filter: {
      user: userId
    }
  }
  return api.get('/stories', query)
}
