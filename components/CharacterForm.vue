<template>
    <div>
        <p class="title is-1">{{ modeTitle }} Character</p>

        <div class="field">
            <div class="control">
                <input class="input"
                       type="text"
                       placeholder="Name"
                       v-model="name"
                >
            </div>
        </div>

        <textarea
                class="textarea"
                placeholder="Description"
                rows="10"
                v-model="description"
        ></textarea>
    </div>
</template>

<script>
  export default {
    props: ['mode'],
    data () {
      return {
        name: null,
        description: null
      }
    },
    computed: {
      modeTitle () {
        return this.mode.charAt(0).toUpperCase() + this.mode.slice(1)
      }
    }
  }
</script>