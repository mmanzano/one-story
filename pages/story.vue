<template>
    <div>
        <h2 class="title is-2">Create your story in {{ selectedMonth.name
            }}</h2>

        <div class="columns">
            <div class="column">
                <story-content></story-content>
            </div>
            <div class="column">
                <character-list></character-list>
            </div>
        </div>
    </div>
</template>

<script>
  import { mapState } from 'vuex'
  import StoryContent from '../components/StoryContent'
  import CharacterList from '../components/CharacterList'

  export default {
    components: {
      StoryContent,
      CharacterList
    },
    computed: {
      ...mapState([
        'selectedMonth'
      ])
    }
  }
</script>