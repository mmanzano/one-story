<template>
    <div>
        <div class="container">
            <h1 class="title">
                One Story [month edition]
            </h1>
            <h2 class="subtitle">
                Upload your story writing something daily for a month
            </h2>

            <month-selector/>

        </div>
    </div>
</template>

<script>
  import MonthSelector from '../components/monthSelector'

  export default {
    components: {
      MonthSelector
    }
  }
</script>