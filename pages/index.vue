<template>
    <div>
        <h2 class="subtitle">
            Upload your story writing something daily for a month
        </h2>

        <month-selector/>

        <div class="field">
            <div class="control">
                <nuxt-link
                        class="button is-success"
                        to="/story"
                >
                    <span class="icon is-small">
                       <i class="material-icons">done</i>
                    </span>
                    <span>Create a Story</span>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
  import MonthSelector from '../components/MonthSelector'

  export default {
    components: {
      MonthSelector
    }
  }
</script>