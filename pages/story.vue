<template>
    <div>
        <h2 class="title is-2">Create your story in {{ selectedMonth.name
            }}</h2>

        <div class="columns">
            <div class="column">
                <story-content v-bind="{story}"></story-content>
            </div>
            <div class="column">
                <character-list v-bind="{ characters }"></character-list>
            </div>
        </div>
    </div>
</template>

<script>
  import { mapState } from 'vuex'
  import StoryContent from '../components/StoryContent'
  import CharacterList from '../components/CharacterList'

  import { retrieveAllStories } from '~/services/apirequests'

  export default {
    components: {
      StoryContent,
      CharacterList
    },
    computed: {
      story () {
        return this.stories.pop()
      },
      characters () {
        return this.story.characters
      },
      ...mapState([
        'selectedMonth'
      ])
    },
    async asyncData () {
      let promises = []

      promises.push(retrieveAllStories())

      return Promise.all(promises).then(promisesResults => {
        return {
          stories: promisesResults[0]
        }
      })
    }
  }
</script>