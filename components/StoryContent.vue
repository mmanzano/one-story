<template>
    <div>
        <div class="card" v-if="!editMode">
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4" v-text="story.title"></p>
                    </div>
                    <button class="button is-success"
                            @click="editMode = true"
                    >
                        Edit
                    </button>
                </div>
                <div class="content" v-text="story.body">
                </div>

            </div>
        </div>

        <story-form
                mode="edit"
                :story="story"
                v-if="editMode"
                @cancel="cancel"
                @save="create"
                @update="update"
        ></story-form>
    </div>
</template>

<script>
  import StoryForm from '../components/StoryForm'

  export default {
    components: {
      StoryForm
    },
    props: ['story'],
    data () {
      return {
        editMode: !this.story.title && !this.story.body
      }
    },
    methods: {
      cancel () {
        this.editMode = false
      },
      create (currentStory) {
        this.story.title = currentStory.title
        this.story.body = currentStory.body
        this.editMode = false
      },
      update (updatedStory) {
        this.story.title = updatedStory.title
        this.story.body = updatedStory.body
        this.editMode = false
      }
    }
  }
</script>