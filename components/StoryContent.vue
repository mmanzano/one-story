<template>
    <div>
        <div class="field">
            <div class="control">
                <input class="input is-primary" type="text"
                       placeholder="Title of your story" v-model="storyTitle">
            </div>
        </div>

        <textarea
                class="textarea"
                placeholder="Start by writing your story or add something of context"
                rows="10"
                v-model="storyBody"
        ></textarea>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        storyTitle: null,
        storyBody: null
      }
    }
  }
</script>