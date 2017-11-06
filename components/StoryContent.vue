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

        <textarea
                class="textarea"
                placeholder="Start by writing your story or add something of context"
                rows="10"
                v-model="body"
        ></textarea>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        title: null,
        body: null
      }
    }
  }
</script>