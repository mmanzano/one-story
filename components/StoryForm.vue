<template>
    <div>
        <div class="field">
            <div class="control">
                <input class="input"
                       type="text"
                       placeholder="Title of your story"
                       v-model="title"
                >
            </div>
        </div>
        <div v-if="mode == 'edit'">
            <button class="button is-success"
                    @click="save"
            >
                Save
            </button>

            <button class="button is-success"
                    @click="cancel"
            >
                Cancel
            </button>
        </div>
        <textarea
                class="textarea"
                placeholder="Start by writing your story or add something of context"
                rows="40"
                v-model="body"
        ></textarea>

    </div>
</template>

<script>
  export default {
    name: 'StoryForm',
    props: {
      mode: {
        type: String,
        required: true
      },
      story: {
        type: Object,
        required: false,
        default: function () {
          return {
            title: '',
            body: ''
          }
        }
      }
    },
    data () {
      return {
        title: this.story.title,
        body: this.story.body,
        currentStory: {
          title: this.story.title,
          body: this.story.body
        }
      }
    },
    computed: {
      isCreated () {
        return (!this.story.title && !this.story.body)
      }
    },
    methods: {
      save () {
        this.currentStory = {
          title: this.title,
          body: this.body
        }
        if (this.isCreated) {
          this.$emit('save', this.currentStory)
        } else {
          this.$emit('update', this.currentStory)
        }
      },
      cancel () {
        this.$emit('cancel')
      }
    }
  }
</script>