<template>
    <div>
        Create Your Story in {{ selectedMonth.name }}
    </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState([
        'selectedMonth'
      ])
    }
  }
</script>