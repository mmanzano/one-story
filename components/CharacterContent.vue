<template>
    <div>
        <p class="is-1"
           v-text="name"
        ></p>

        <p
            class="is-description"
            v-text="description"
        ></p>
    </div>
</template>

<script>
  export default {
    props: ['character'],
    data () {
      return {
        name: this.character.name,
        description: this.character.description
      }
    }
  }
</script>