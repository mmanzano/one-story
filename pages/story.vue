<template>
    <div>
        <h2 class="title is-2">Create your story in {{ selectedMonth.name
            }}</h2>

        <story-content></story-content>
    </div>
</template>

<script>
  import { mapState } from 'vuex'
  import StoryContent from '../components/StoryContent'

  export default {
    components: {
      StoryContent
    },
    computed: {
      ...mapState([
        'selectedMonth'
      ])
    }
  }
</script>